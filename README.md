# STIFIn Mulia Website

Website resmi STIFIn Mulia berbasis Astro. Proyek dibuat mobile-first, statis, cepat, dan siap dibangun melalui Docker di Coolify.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Membangun produksi

```bash
npm run build
```

Hasil build berada di folder `dist`.

## Konfigurasi penting

Ubah data bisnis pada `src/data/site.ts`, terutama:

- nomor WhatsApp
- email
- tautan Instagram dan YouTube
- wilayah layanan jika berubah

## Deploy melalui Coolify

1. Unggah proyek ke repository GitHub.
2. Buat resource baru di Coolify dari repository tersebut.
3. Pilih deployment berbasis Dockerfile.
4. Gunakan port aplikasi `80`.
5. Hubungkan domain `stifinmulia.com`.
6. Aktifkan HTTPS.

## Batas publikasi

Periksa harga, wilayah, penggunaan merek, ketentuan promotor, alat tes, dan kebijakan resmi sebelum dipublikasikan. Jangan mengunggah materi sumber berhak cipta sebagai file publik.

Halaman promotor saat ini menampilkan harga program dari sumber pengembangan:

- pembayaran penuh Rp8.000.000
- pembayaran bertahap Rp10.000.000

Konfirmasi kembali angka tersebut sebelum website dipublikasikan karena kebijakan resmi dapat berubah.

## Sinkronisasi jaringan promotor

Website dapat membaca data agregat promotor aktif dari API STIFIn saat proses build. Data publik hanya berisi kota, provinsi, jumlah promotor aktif, dan jumlah cabang. Email, nomor telepon, PassID, tanggal lahir, saldo, dan data pribadi lain tidak disimpan pada website.

Atur environment variable berikut di Coolify:

```text
STIFIN_API_BASE=https://apro.stifin.id/api
STIFIN_BRANCH_CODES=KODE-CABANG-1,KODE-CABANG-2
STIFIN_API_AUTH_HEADER=Authorization
STIFIN_API_AUTH_VALUE=Bearer TOKEN_RESMI
```

`STIFIN_API_AUTH_HEADER` dan `STIFIN_API_AUTH_VALUE` hanya diisi jika API resmi mewajibkan autentikasi. Jangan menulis token di source code atau GitHub.
