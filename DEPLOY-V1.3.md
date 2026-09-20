# Checklist Environment sebelum deploy v1.3

## Kesimpulan

Pertahankan environment sinkronisasi yang sudah ada, lalu tambahkan environment landing page. Jangan mengganti daftar cabang dengan pola `JML-CAB-01` sampai `JML-CAB-150` kecuali setiap kode sudah dikonfirmasi dari dashboard/API resmi.

Halaman `https://www.stifin.or.id/AccPromotor` menampilkan area dan promotor, bukan daftar kode cabang untuk endpoint `proGetCab`. Karena itu, nama kota atau kode promotor pada halaman tersebut tidak dapat langsung dijadikan `STIFIN_BRANCH_CODES`.

## Build Variables Coolify

```env
STIFIN_API_BASE=https://apro.stifin.id/api
STIFIN_BRANCH_CODES=JML-CAB-62
STIFIN_SYNC_CONCURRENCY=6
STIFIN_SYNC_TIMEOUT_MS=15000
STIFIN_SYNC_RETRIES=2
STIFIN_MIN_SUCCESS_RATE=1
STIFIN_MAX_DROP_RATE=0.35
PUBLIC_STIFIN_LEAD_WEBHOOK_URL=https://n8n.rizqhub.id/webhook/stifin-lead
PUBLIC_META_PIXEL_ID=
```

Semua variabel di atas harus diaktifkan sebagai **Build Variable** karena website Astro dibuat secara statis pada saat Docker image dibangun.

`PUBLIC_META_PIXEL_ID` boleh dibiarkan kosong sampai Pixel tersedia. `PUBLIC_STIFIN_LEAD_WEBHOOK_URL` sebaiknya diisi setelah workflow n8n sudah Active.

## Kode tambahan yang terlihat pada dashboard resmi

Kode berikut pernah terlihat pada tabel cabang/dashboard, tetapi harus diuji satu per satu sebelum dimasukkan ke produksi:

```text
JML-CAB-12
BNJ-CAB-01
TGS-CAB-03
JKT-CAB-01
SGI-CAB-50
SMG-CAB-05
BTM-CAB-01
BKS-CAB-03
SGP-CAB-02
JML-CAB-26
JML-CAB-27
JML-CAB-72
```

Setelah seluruh kode tersebut berhasil diuji, nilai dapat menjadi:

```env
STIFIN_BRANCH_CODES=JML-CAB-62,JML-CAB-12,BNJ-CAB-01,TGS-CAB-03,JKT-CAB-01,SGI-CAB-50,SMG-CAB-05,BTM-CAB-01,BKS-CAB-03,SGP-CAB-02,JML-CAB-26,JML-CAB-27,JML-CAB-72
```

Jangan memasukkan `KODE-LAINNYA`, rentang tebakan, kode promotor seperti `BDG-KOT-01`, atau kode yang belum menghasilkan data valid.

## Authentication

Jika endpoint bekerja tanpa token, jangan isi variabel autentikasi.

Jika kemudian diberikan token resmi:

```env
STIFIN_API_AUTH_HEADER=Authorization
```

Nilai token disimpan sebagai Docker Build Secret bernama:

```text
STIFIN_API_AUTH_VALUE
```

Jangan simpan token di GitHub, file `.env`, screenshot, atau chat.

## Urutan deploy

1. Aktifkan workflow n8n `STIFIn 01 - Website Lead ke StarSender`.
2. Uji Production Webhook menggunakan data contoh.
3. Isi `PUBLIC_STIFIN_LEAD_WEBHOOK_URL` di Coolify.
4. Pertahankan `STIFIN_BRANCH_CODES=JML-CAB-62` untuk deploy aman pertama.
5. Redeploy.
6. Periksa log build: jumlah kode diminta, kode kosong, wilayah, dan promotor.
7. Periksa `/jaringan-promotor/`; tidak boleh ada provinsi `-`, `NULL`, atau `undefined`.
8. Uji form `/ikut-tes-stifin/` dan pastikan lead masuk ke n8n/StarSender.
9. Tambahkan kode cabang lain secara bertahap setelah setiap kode terbukti valid.

## Mengapa 599 area tidak berarti 599 cabang

Halaman AccPromotor memuat sekitar 599 label area mentah. Daftar itu berisi variasi penulisan dan duplikasi, misalnya `BATAM`/`B A T A M`, `BANDAR LAMPUNG`/`BANDARLAMPUNG`, serta `TULUNG AGUNG`/`TULUNGAGUNG`. Ada pula nilai yang bukan wilayah, seperti `NULL`, `STIFIN`, dan `RESEARCH`.

Karena itu:

- jumlah area mentah tidak sama dengan jumlah cabang;
- 395 wilayah pada website tidak otomatis berarti 204 cabang hilang;
- deduplikasi dan pemetaan provinsi harus dilakukan sebelum data dijadikan halaman SEO;
- daftar cabang lengkap tetap memerlukan endpoint resmi semua cabang atau daftar kode dari dashboard yang diizinkan.
