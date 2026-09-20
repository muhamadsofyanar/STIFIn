import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputUrl = new URL('../src/data/network.generated.json', import.meta.url);
const outputPath = fileURLToPath(outputUrl);
const branchCodes = [...new Set((process.env.STIFIN_BRANCH_CODES || '')
  .split(/[\n,;]+/)
  .map((value) => value.trim().toUpperCase())
  .filter(Boolean))];

if (!branchCodes.length) {
  console.log('Sinkronisasi jaringan dilewati: STIFIN_BRANCH_CODES belum diatur.');
  process.exit(0);
}

const invalidCodes = branchCodes.filter((code) => !/^[A-Z0-9][A-Z0-9-]{2,39}$/.test(code));
if (invalidCodes.length) throw new Error(`Format kode cabang tidak valid: ${invalidCodes.join(', ')}`);

const apiBase = (process.env.STIFIN_API_BASE || 'https://apro.stifin.id/api').replace(/\/$/, '');
const authHeader = (process.env.STIFIN_API_AUTH_HEADER || '').trim();
const authFile = (process.env.STIFIN_API_AUTH_VALUE_FILE || '/run/secrets/STIFIN_API_AUTH_VALUE').trim();
const authValue = (process.env.STIFIN_API_AUTH_VALUE || '').trim()
  || (await readFile(authFile, 'utf8').catch(() => '')).trim();
const concurrency = clampNumber(process.env.STIFIN_SYNC_CONCURRENCY, 6, 1, 12);
const timeoutMs = clampNumber(process.env.STIFIN_SYNC_TIMEOUT_MS, 15000, 3000, 60000);
const retries = clampNumber(process.env.STIFIN_SYNC_RETRIES, 2, 0, 5);
const minSuccessRate = clampNumber(process.env.STIFIN_MIN_SUCCESS_RATE, 1, 0.5, 1);
const maxDropRate = clampNumber(process.env.STIFIN_MAX_DROP_RATE, 0.35, 0, 0.95);
const allowEmpty = process.env.STIFIN_ALLOW_EMPTY_NETWORK === '1';
const headers = { Accept: 'application/json' };
if (authHeader && authValue) headers[authHeader] = authValue;

const current = await readFile(outputPath, 'utf8')
  .then((value) => JSON.parse(value))
  .catch(() => ({ generatedAt: null, locations: [] }));

const slugify = (value) => normalizeText(value)
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const results = new Array(branchCodes.length);
let cursor = 0;
async function worker() {
  while (cursor < branchCodes.length) {
    const index = cursor++;
    results[index] = await fetchBranch(branchCodes[index]);
  }
}
await Promise.all(Array.from({ length: Math.min(concurrency, branchCodes.length) }, () => worker()));

const successful = results.filter((result) => result.ok);
const failed = results.filter((result) => !result.ok);
const empty = successful.filter((result) => result.rows.length === 0);
const successRate = successful.length / branchCodes.length;
if (successRate < minSuccessRate) {
  const failedCodes = failed.map((item) => item.branchCode).join(', ');
  throw new Error(`Sinkronisasi dibatalkan: ${successful.length}/${branchCodes.length} cabang berhasil. Gagal: ${failedCodes}`);
}

const grouped = new Map();
for (const result of successful) {
  for (const row of result.rows) {
    if (!isActive(row.Aktif)) continue;
    const city = meaningfulText(firstValue(row, ['Area', 'Kota', 'Kabupaten', 'City', 'area']));
    const province = meaningfulText(firstValue(row, ['Propinsi', 'Provinsi', 'Province', 'province']));
    const promoterCode = meaningfulText(firstValue(row, ['KodeID', 'KodeId', 'kode_id', 'Code', 'code']));
    const rowBranch = meaningfulText(firstValue(row, ['Sub', 'Cabang', 'Branch', 'branch'])) || result.branchCode;
    if (!city || !promoterCode || !rowBranch) continue;

    const key = `${slugify(city)}|${slugify(province || 'wilayah')}`;
    if (!slugify(city)) continue;
    if (!grouped.has(key)) grouped.set(key, { city, province, promoters: new Set(), branches: new Set() });
    grouped.get(key).promoters.add(promoterCode);
    grouped.get(key).branches.add(rowBranch);
  }
}

const locations = [...grouped.values()]
  .map((item) => ({
    slug: slugify(item.province ? `${item.city}-${item.province}` : item.city),
    city: item.city,
    province: item.province,
    promoters: item.promoters.size,
    branches: item.branches.size,
  }))
  .filter((item) => item.slug && item.promoters > 0)
  .sort((a, b) => a.province.localeCompare(b.province, 'id') || a.city.localeCompare(b.city, 'id'));

const newPromoterTotal = locations.reduce((total, item) => total + item.promoters, 0);
const oldPromoterTotal = Array.isArray(current.locations)
  ? current.locations.reduce((total, item) => total + Number(item.promoters || 0), 0)
  : 0;

if (!allowEmpty && newPromoterTotal === 0) throw new Error('Sinkronisasi dibatalkan: API tidak menghasilkan promotor aktif yang valid.');
if (oldPromoterTotal > 0) {
  const dropRate = (oldPromoterTotal - newPromoterTotal) / oldPromoterTotal;
  if (dropRate > maxDropRate) {
    throw new Error(`Sinkronisasi dibatalkan: jumlah promotor turun ${Math.round(dropRate * 100)}%, melebihi batas ${Math.round(maxDropRate * 100)}%.`);
  }
}

const snapshot = {
  generatedAt: new Date().toISOString(),
  summary: {
    requestedBranches: branchCodes.length,
    successfulBranches: successful.length,
    failedBranches: failed.length,
    emptyBranches: empty.length,
    locations: locations.length,
    promoters: newPromoterTotal,
  },
  locations,
};

await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`);
console.log(`Jaringan diperbarui: ${locations.length} wilayah, ${newPromoterTotal} promotor, ${successful.length}/${branchCodes.length} cabang berhasil.`);
if (empty.length) console.warn(`${empty.length} kode cabang merespons tanpa data: ${empty.map((item) => item.branchCode).join(', ')}`);

async function fetchBranch(branchCode) {
  let lastError = new Error('Kesalahan tidak diketahui');
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const url = `${apiBase}/proGetCab/pro/${encodeURIComponent(branchCode)}`;
      const response = await fetch(url, { headers, signal: controller.signal, redirect: 'error' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const body = await response.json();
      if (!body || !Array.isArray(body.data)) throw new Error('Format respons tidak memiliki array data');
      return { ok: true, branchCode, rows: body.data };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (attempt < retries) await delay(500 * (2 ** attempt));
    } finally {
      clearTimeout(timer);
    }
  }
  console.warn(`Cabang ${branchCode} gagal setelah ${retries + 1} percobaan: ${lastError.message}`);
  return { ok: false, branchCode, rows: [], error: lastError.message };
}

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function meaningfulText(value) {
  const text = normalizeText(value);
  if (!text || /^[-–—]+$/.test(text) || /^(null|undefined|n\/?a|tidak ada)$/i.test(text)) return '';
  return text;
}

function firstValue(row, keys) {
  for (const key of keys) {
    const value = meaningfulText(row?.[key]);
    if (value) return value;
  }
  return '';
}

function isActive(value) {
  if (value === undefined || value === null || value === '') return true;
  return ['1', 'true', 'aktif', 'active', 'yes', 'y'].includes(String(value).trim().toLowerCase());
}

function clampNumber(value, fallback, min, max) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : fallback;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
