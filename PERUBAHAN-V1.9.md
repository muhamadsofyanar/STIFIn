# Perubahan STIFIn Mulia Website v1.9

## Arah versi

V1.9 berfokus pada **Knowledge, Trust & Discovery**. Website publik membantu pengunjung menemukan jawaban, memahami konsep, dan membangun keyakinan. Pengelolaan lead, campaign, follow-up, dan aktivitas operasional tetap berada di `app.stifinmulia.com`.

## Fitur baru

1. Halaman `/mulai/` dengan enam jalur berdasarkan kebutuhan: diri, anak, keluarga, karier, tim, dan promotor.
2. Komponen eksplorasi interaktif di beranda yang menghubungkan situasi pengunjung dengan tiga bacaan relevan serta satu langkah lanjut.
3. Halaman `/istilah-stifin/` berisi dua belas istilah dasar dengan pencarian langsung dan schema `DefinedTermSet`.
4. Pusat Pengetahuan memiliki pencarian kata, filter tema, jumlah hasil, empty state, dan tautan tema berbasis query.
5. Setiap artikel memiliki daftar isi otomatis, progress membaca, tombol berbagi, salin tautan, dan breadcrumb schema.
6. Halaman Tentang memiliki enam alasan nyata memilih STIFIn Mulia.
7. Footer menautkan portal `app.stifinmulia.com` dan struktur navigasi belajar diperjelas.
8. Website schema memiliki `SearchAction` menuju pencarian artikel.

## Prinsip konten

- Mulai dari pertanyaan pengunjung, bukan dari istilah internal.
- Hasil tes diposisikan sebagai peta awal dan bahan dialog, bukan label yang membatasi.
- Ruang Tafsir tetap berdiri sebagai ruang pembelajaran tersendiri.
- Sumber pengembangan tetap berupa atribusi teks dan tidak menjadi jalur keluar menuju website lain.
- Statistik jaringan hanya mengikuti data API yang berhasil disinkronkan.

## Lingkungan

Tidak ada environment variable baru. Pertahankan konfigurasi Coolify yang sudah digunakan oleh v1.8.

## Validasi

- Astro check: 0 error, 0 warning, 0 hint.
- Build statis: 56 halaman.
- Artikel aktif: 35.
- Pemeriksaan 1.640 tautan internal: 0 tautan hilang.
- Sinkronisasi API otomatis tetap berjalan ketika `STIFIN_BRANCH_CODES` tersedia pada environment build.
