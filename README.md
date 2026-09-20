# STIFIn Mulia Website v1.3

Website resmi STIFIn Mulia berbasis Astro. Proyek dibuat mobile-first, statis, cepat, dan siap dibangun melalui Docker di Coolify.

Versi 1.1 memusatkan perjalanan pengunjung pada Gerakan 100 Tes STIFIn: Tes → penjelasan hasil → WSL 1 → promotor aktif → lebih banyak orang terlayani. Pusat pengetahuan diperluas dengan artikel penerapan STIFIn dan Ruang Tafsir Al-Qamar yang dipisahkan secara editorial.

Versi 1.2 menambahkan landing page khusus iklan di `/ikut-tes-stifin/`, halaman konfirmasi `/terima-kasih-tes/`, form lead dengan UTM dan `fbclid`, webhook opsional untuk n8n/CRM, Meta Pixel opsional, sticky CTA mobile, serta menu mobile layar penuh pada website utama.

Versi 1.3 melengkapi integrasi StarSender: setiap lead memiliki `lead_id`, persetujuan WhatsApp dan waktu persetujuan, workflow n8n siap impor, rancangan empat campaign funnel, template welcome/follow-up, SOP pemindahan lead, pengujian, serta panduan pengisian StarSender. Seluruh materi integrasi berada di folder `automation`.

## Landing page iklan dan form lead

Atur dua variabel berikut sebagai **Build Variable** di Coolify:

```text
PUBLIC_STIFIN_LEAD_WEBHOOK_URL=https://n8n.rizqhub.id/webhook/stifin-lead
PUBLIC_META_PIXEL_ID=ID-PIXEL-META-ANDA
```

`PUBLIC_STIFIN_LEAD_WEBHOOK_URL` menerima `POST` JSON berisi ID lead, nama, WhatsApp, kota, kebutuhan, jumlah peserta, persetujuan kontak, waktu persetujuan, halaman sumber, varian landing page, UTM, `fbclid`, dan `gclid`. Webhook n8n harus mengizinkan permintaan dari `https://stifinmulia.com`. Setelah data diproses, halaman mengarahkan calon peserta ke `/terima-kasih-tes/` dan menyiapkan pesan WhatsApp pusat.

Panduan lengkap tersedia di `automation/PANDUAN-STARSENDER-N8N.md`. Impor `automation/STIFIn-01-Website-Lead-ke-StarSender.json` ke n8n, isi ID campaign, pasangkan credential Account API StarSender, uji, lalu aktifkan workflow sebelum redeploy website.

Jika webhook belum diisi, formulir tetap melanjutkan calon peserta ke halaman terima kasih dan WhatsApp, tetapi lead belum tersimpan ke CRM. Pixel juga hanya aktif bila ID Meta Pixel sudah diisi.

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

## Perubahan v1.0

- Seluruh navigasi dan CTA ditulis ulang dari sudut pandang calon peserta, calon promotor, dan lembaga.
- Pencarian jaringan kini memakai bahasa “Tes di Kota Saya” dan tidak memberi kesan wilayah layanan dibatasi.
- Halaman promotor menjelaskan manfaat profesi melalui gaji/kompetensi, laba, rating/reputasi, cinta/relasi, dan bahagia/makna.
- Kalkulator interaktif menampilkan margin kotor berdasarkan voucher Rp165.000, harga tes Rp550.000–Rp650.000, volume peserta, dan estimasi kembali modal.
- Halaman tentang, FAQ, artikel, halaman kota, dan program lembaga dibuat lebih hangat, yakin, dan berorientasi pada hasil yang dicari pengunjung.
- Catatan legal dan kehati-hatian tetap tersedia pada halaman khusus tanpa mendominasi alur penjualan.

## Perubahan v0.9

- Sistem warna diselaraskan dengan identitas hijau STIFIn Mulia (`#043F2B`, `#065234`, putih hangat, dan aksen lime).
- Headline memakai tipografi editorial agar hierarki teks lebih khas dan tidak menyerupai template umum.
- Hero beranda menggunakan dokumentasi kegiatan nyata dengan komposisi editorial, bukan ilustrasi orbit generik.
- Kartu, langkah, formulir, harga, FAQ, galeri, artikel, CTA, dan footer mendapat ritme visual baru yang konsisten.
- Menu mobile diubah menjadi panel responsif dengan backdrop, animasi, status aksesibilitas, serta dukungan tombol Escape.
- Tampilan Open Graph diselaraskan dengan branding baru.

## Perubahan v0.8

- Delapan artikel pilar panjang: pengantar tes, parenting, learning, profesi, couple, bisnis, tim, dan leadership.
- Setiap artikel memakai alur masalah, alasan, konsep, penerapan, evaluasi, batas penggunaan, dan CTA kontekstual.
- Pusat artikel baru dengan jalur baca berdasarkan kebutuhan dan pilihan editor.
- Transparansi audiens, waktu baca, tanggal pembaruan, pendekatan editorial, serta sumber materi.
- Klaim dari materi sumber diposisikan sebagai bagian dari konsep STIFIn, bukan diagnosis, ramalan, atau jaminan hasil.
- `stifingenetic.com` tidak digunakan sebagai sumber karena saat pemeriksaan domain tersebut menampilkan konten yang tidak terkait STIFIn.
- Dokumen TAFSIR tidak dicampurkan ke artikel umum karena membutuhkan jalur editorial dan penelaahan keagamaan tersendiri.

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
