import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputUrl = new URL('../src/data/network.generated.json', import.meta.url);
const outputPath = fileURLToPath(outputUrl);
const branchCodes = (process.env.STIFIN_BRANCH_CODES || '')
  .split(/[\n,;]+/)
  .map((value) => value.trim().toUpperCase())
  .filter(Boolean);

if (!branchCodes.length) {
  console.log('Sinkronisasi jaringan dilewati: STIFIN_BRANCH_CODES belum diatur.');
  process.exit(0);
}

const apiBase = (process.env.STIFIN_API_BASE || 'https://apro.stifin.id/api').replace(/\/$/, '');
const authHeader = (process.env.STIFIN_API_AUTH_HEADER || '').trim();
const authValue = (process.env.STIFIN_API_AUTH_VALUE || '').trim();
const headers = { Accept: 'application/json' };
if (authHeader && authValue) headers[authHeader] = authValue;

const slugify = (value) => value
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const grouped = new Map();
let successCount = 0;

for (const branchCode of branchCodes) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const url = `${apiBase}/proGetCab/pro/${encodeURIComponent(branchCode)}`;
    const response = await fetch(url, { headers, signal: controller.signal, redirect: 'error' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const body = await response.json();
    const rows = Array.isArray(body?.data) ? body.data : [];
    successCount += 1;

    for (const row of rows) {
      if (!row || typeof row !== 'object') continue;
      if (String(row.Aktif ?? '1') !== '1') continue;
      const city = String(row.Area || '').trim();
      const province = String(row.Propinsi || '').trim();
      const promoterCode = String(row.KodeID || '').trim();
      const rowBranch = String(row.Sub || branchCode).trim();
      if (!city || !province || !promoterCode) continue;

      const key = `${city.toLowerCase()}|${province.toLowerCase()}`;
      if (!grouped.has(key)) {
        grouped.set(key, { city, province, promoters: new Set(), branches: new Set() });
      }
      grouped.get(key).promoters.add(promoterCode);
      grouped.get(key).branches.add(rowBranch);
    }
  } catch (error) {
    console.warn(`Cabang ${branchCode} tidak dapat disinkronkan: ${error.message}`);
  } finally {
    clearTimeout(timer);
  }
}

if (!successCount) {
  const current = await readFile(outputPath, 'utf8').catch(() => '');
  if (current) console.warn('Data jaringan sebelumnya dipertahankan.');
  process.exit(0);
}

const locations = [...grouped.values()]
  .map((item) => ({
    slug: slugify(`${item.city}-${item.province}`),
    city: item.city,
    province: item.province,
    promoters: item.promoters.size,
    branches: item.branches.size,
  }))
  .sort((a, b) => a.province.localeCompare(b.province, 'id') || a.city.localeCompare(b.city, 'id'));

await writeFile(outputPath, `${JSON.stringify({ generatedAt: new Date().toISOString(), locations }, null, 2)}\n`);
console.log(`Jaringan diperbarui: ${locations.length} wilayah dari ${successCount} cabang.`);
