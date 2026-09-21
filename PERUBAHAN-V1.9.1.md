# STIFIn Mulia v1.9.1 — Desktop, Data Jaringan, dan AI Discovery

## Yang diperbaiki

- Navigasi desktop memakai label ringkas satu baris; menu mobile tetap memakai label lengkap.
- Breakpoint menu dinaikkan agar tablet dan laptop sempit tidak memaksa navigasi bertumpuk.
- Footer memakai komponen logo resmi situs sehingga wordmark tidak lagi terpotong.
- Bahasa halaman jaringan dan halaman kota dibuat lebih alami dari sudut pandang calon peserta.
- Kota/kabupaten, kapitalisasi, negara, serta provinsi dari API dinormalisasi saat build.
- Pencarian wilayah dilengkapi penyaring provinsi dan informasi cakupan sinkronisasi.
- Halaman kota dapat menampilkan nama, kode, dan cabang promotor dari API tanpa membuka data sensitif.
- Ringkasan promotor dihitung sebagai kode promotor unik lintas wilayah.
- Log build memberi peringatan bila cakupan masih di bawah tolok ukur promotor/cabang yang ditentukan.
- Daftar kode cabang panjang dapat dibaca dari secret file melalui `STIFIN_BRANCH_CODES_FILE`.

## Pengetahuan dan kepercayaan

- Kamus diperluas dari 12 menjadi 53 istilah, termasuk sembilan personaliti genetik, istilah konsep, penerapan tematik, dan jaringan.
- Ditambahkan halaman Standar Editorial dan profil peninjau Muhamad Sofyan AR.
- Artikel menampilkan penyusun, peninjau, tanggal pembaruan, jawaban singkat, dan catatan proses editorial.

## SEO, AEO, dan discovery berbasis AI

- Structured data artikel dilengkapi peninjau, gambar, bahasa, kategori, dan hubungan ke situs.
- Ditambahkan `llms.txt` dinamis yang merangkum halaman inti dan seluruh artikel.
- Ditambahkan RSS feed artikel di `/feed.xml`.
- Robots policy secara eksplisit mengizinkan crawler pencarian umum, OAI-SearchBot, ChatGPT-User, dan PerplexityBot.
- Semua peningkatan bersifat fondasi keterbacaan dan kepercayaan; tidak ada klaim jaminan peringkat Google atau jawaban AI.

## Environment opsional untuk audit cakupan

```env
STIFIN_EXPECTED_PROMOTERS=4476
STIFIN_EXPECTED_BRANCHES=185
```

Kedua nilai tersebut tidak menambah data dan tidak menggantikan `STIFIN_BRANCH_CODES`. Nilainya hanya membandingkan hasil sinkronisasi dengan tolok ukur yang Anda tentukan lalu menulis selisihnya pada log build.
