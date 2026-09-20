# STIFIn Mulia Website v0.7

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
- tautan Instagram, YouTube, Facebook, dan Telegram
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

Atur environment variable berikut di Coolify dan aktifkan opsi **Build Variable** karena sinkronisasi berlangsung saat image dibangun:

```text
STIFIN_API_BASE=https://apro.stifin.id/api
STIFIN_BRANCH_CODES=KODE-CABANG-1,KODE-CABANG-2
STIFIN_SYNC_CONCURRENCY=6
STIFIN_SYNC_TIMEOUT_MS=15000
STIFIN_SYNC_RETRIES=2
STIFIN_MIN_SUCCESS_RATE=1
STIFIN_MAX_DROP_RATE=0.35
```

Secara default seluruh kode cabang harus berhasil. Jika respons kosong, format API berubah, atau jumlah promotor turun lebih dari 35% dibanding snapshot sebelumnya, build dihentikan agar data parsial tidak terbit.

### Autentikasi API

Jika API resmi mewajibkan autentikasi, atur `STIFIN_API_AUTH_HEADER` sebagai Build Variable. Simpan nilai token sebagai Docker Build Secret dengan id `STIFIN_API_AUTH_VALUE`. Dockerfile memasang secret tersebut hanya pada langkah build dan skrip membacanya dari `/run/secrets/STIFIN_API_AUTH_VALUE`.

Jangan menulis token di `.env`, source code, GitHub, log deployment, atau chat.

## Perubahan v0.7

- Penulisan ulang seluruh halaman penjualan: beranda, Tes STIFIn, Program Promotor, kerja sama, pencarian jaringan, dan halaman kota.
- Headline kini menyebut audiens, masalah, dan langkah yang ditawarkan dengan lebih spesifik.
- Fitur dijelaskan bersama manfaat dan konteks penggunaan nyata, tanpa menambah klaim hasil.
- Alur informasi diurutkan dari kecocokan, manfaat, proses, biaya, batas layanan, hingga tindakan berikutnya.
- Pesan WhatsApp dibuat lebih terstruktur agar percakapan pertama langsung memiliki konteks.
- Bukti foto kegiatan dan transparansi proses ditempatkan dekat keputusan utama.
- Tombol CTA mengambang dihapus agar tidak mengganggu proses membaca dan tidak menghasilkan klik yang belum matang.
- Paragraf, kartu, tipografi, serta formulir diringkas untuk pemindaian cepat di ponsel.

## Perubahan v0.6

- Sinkronisasi paralel dengan timeout, retry, validasi format, dan proteksi penurunan data.
- Tanggal pembaruan dan status kesegaran data jaringan.
- Pencarian kota/provinsi serta statistik promotor dan cabang.
- Halaman kota dengan informasi pemesanan, FAQ, wilayah terkait, dan structured data.
- Structured data Organization, WebSite, CollectionPage, Service, Breadcrumb, dan Article.
- Sumber halaman otomatis pada pesan WhatsApp dan event konversi tanpa isi pesan.
- Instagram, YouTube, Facebook, Telegram, email, dan WhatsApp pusat.
- Halaman privasi, disclaimer, dan 404 khusus.
- Header keamanan tambahan pada Nginx.
