# Checklist Environment sebelum deploy v1.3

## Kesimpulan

Pertahankan seluruh kode `JML-CAB-01` sampai `JML-CAB-85` yang sudah dimasukkan di Coolify. Tambahkan kode cabang non-JML pada nilai `STIFIN_BRANCH_CODES` yang sama; jangan membuat variabel kedua dengan nama yang sama dan jangan menghapus daftar JML yang sudah ada.

Halaman `https://www.stifin.or.id/AccPromotor` menampilkan area dan promotor, bukan daftar kode cabang untuk endpoint `proGetCab`. Karena itu, nama kota atau kode promotor pada halaman tersebut tidak dapat langsung dijadikan `STIFIN_BRANCH_CODES`.

## Build Variables Coolify

```env
STIFIN_API_BASE=https://apro.stifin.id/api
STIFIN_BRANCH_CODES=JML-CAB-01,JML-CAB-02,JML-CAB-03,JML-CAB-04,JML-CAB-05,JML-CAB-06,JML-CAB-07,JML-CAB-08,JML-CAB-09,JML-CAB-10,JML-CAB-11,JML-CAB-12,JML-CAB-13,JML-CAB-14,JML-CAB-15,JML-CAB-16,JML-CAB-17,JML-CAB-18,JML-CAB-19,JML-CAB-20,JML-CAB-21,JML-CAB-22,JML-CAB-23,JML-CAB-24,JML-CAB-25,JML-CAB-26,JML-CAB-27,JML-CAB-28,JML-CAB-29,JML-CAB-30,JML-CAB-31,JML-CAB-32,JML-CAB-33,JML-CAB-34,JML-CAB-35,JML-CAB-36,JML-CAB-37,JML-CAB-38,JML-CAB-39,JML-CAB-40,JML-CAB-41,JML-CAB-42,JML-CAB-43,JML-CAB-44,JML-CAB-45,JML-CAB-46,JML-CAB-47,JML-CAB-48,JML-CAB-49,JML-CAB-50,JML-CAB-51,JML-CAB-52,JML-CAB-53,JML-CAB-54,JML-CAB-55,JML-CAB-56,JML-CAB-57,JML-CAB-58,JML-CAB-59,JML-CAB-60,JML-CAB-61,JML-CAB-62,JML-CAB-63,JML-CAB-64,JML-CAB-65,JML-CAB-66,JML-CAB-67,JML-CAB-68,JML-CAB-69,JML-CAB-70,JML-CAB-71,JML-CAB-72,JML-CAB-73,JML-CAB-74,JML-CAB-75,JML-CAB-76,JML-CAB-77,JML-CAB-78,JML-CAB-79,JML-CAB-80,JML-CAB-81,JML-CAB-82,JML-CAB-83,JML-CAB-84,JML-CAB-85,BNJ-CAB-01,TGS-CAB-03,JKT-CAB-01,SGI-CAB-50,SMG-CAB-05,BTM-CAB-01,BKS-CAB-03,SGP-CAB-02
STIFIN_SYNC_CONCURRENCY=6
STIFIN_SYNC_TIMEOUT_MS=15000
STIFIN_SYNC_RETRIES=2
STIFIN_MIN_SUCCESS_RATE=0.95
STIFIN_MAX_DROP_RATE=0.35
PUBLIC_STIFIN_LEAD_WEBHOOK_URL=https://n8n.rizqhub.id/webhook/stifin-lead
PUBLIC_META_PIXEL_ID=
```

Semua variabel di atas harus diaktifkan sebagai **Build Variable** karena website Astro dibuat secara statis pada saat Docker image dibangun.

Nilai `0.95` memberi toleransi terhadap gangguan sementara pada sebagian kecil permintaan API tanpa membiarkan kegagalan besar lolos. Log build tetap akan menyebutkan kode mana yang gagal atau merespons tanpa data.

`PUBLIC_META_PIXEL_ID` boleh dibiarkan kosong sampai Pixel tersedia. `PUBLIC_STIFIN_LEAD_WEBHOOK_URL` sebaiknya diisi setelah workflow n8n sudah Active.

## Kode di luar kelompok JML yang dimasukkan

Kode berikut terlihat pada tabel cabang/dashboard dan sudah dimasukkan setelah rangkaian `JML-CAB`:

```text
BNJ-CAB-01
TGS-CAB-03
JKT-CAB-01
SGI-CAB-50
SMG-CAB-05
BTM-CAB-01
BKS-CAB-03
SGP-CAB-02
```

Jika daftar JML sudah tersimpan di Coolify, cukup tambahkan teks berikut pada bagian akhir nilainya:

```text
,BNJ-CAB-01,TGS-CAB-03,JKT-CAB-01,SGI-CAB-50,SMG-CAB-05,BTM-CAB-01,BKS-CAB-03,SGP-CAB-02
```

Jangan memasukkan `JML-CAB-86` ke atas, `KODE-LAINNYA`, kode promotor seperti `BDG-KOT-01`, atau kode baru yang belum menghasilkan respons API valid.

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
4. Pertahankan daftar JML yang sudah ada dan tambahkan delapan kode non-JML pada nilai Build Variable yang sama.
5. Redeploy.
6. Periksa log build: jumlah kode diminta, kode kosong, wilayah, dan promotor.
7. Periksa `/jaringan-promotor/`; tidak boleh ada provinsi `-`, `NULL`, atau `undefined`.
8. Uji form `/ikut-tes-stifin/` dan pastikan lead masuk ke n8n/StarSender.
9. Tambahkan kode cabang lain secara bertahap hanya setelah setiap kode terbukti valid.

## Mengapa 599 area tidak berarti 599 cabang

Halaman AccPromotor memuat sekitar 599 label area mentah. Daftar itu berisi variasi penulisan dan duplikasi, misalnya `BATAM`/`B A T A M`, `BANDAR LAMPUNG`/`BANDARLAMPUNG`, serta `TULUNG AGUNG`/`TULUNGAGUNG`. Ada pula nilai yang bukan wilayah, seperti `NULL`, `STIFIN`, dan `RESEARCH`.

Karena itu:

- jumlah area mentah tidak sama dengan jumlah cabang;
- 395 wilayah pada website tidak otomatis berarti 204 cabang hilang;
- deduplikasi dan pemetaan provinsi harus dilakukan sebelum data dijadikan halaman SEO;
- daftar cabang lengkap tetap memerlukan endpoint resmi semua cabang atau daftar kode dari dashboard yang diizinkan.
