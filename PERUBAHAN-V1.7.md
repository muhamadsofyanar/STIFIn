# Perubahan STIFIn Mulia Website v1.7

## Tujuan versi

Versi 1.7 menjaga kepercayaan dari testimoni jaringan STIFIn tanpa membuat calon peserta berpindah ke website lain. Alur utama tetap berada di STIFIn Mulia: membaca pengalaman, memahami manfaat, lalu berkonsultasi atau mengisi formulir Tes STIFIn.

## Perbaikan utama

- Semua tautan keluar menuju situs sumber STIFIn di halaman testimoni, blok bukti sosial, dan catatan sumber artikel telah dinonaktifkan.
- Keterangan sumber tetap ditampilkan sebagai teks agar asal testimoni dan materi tetap transparan.
- Crop foto diatur per narasumber agar wajah tidak terpotong atau berada pada posisi yang keliru.
- Kolase foto pada hero mobile memakai ukuran lebar dan tinggi yang terkunci sehingga tidak lagi berubah menjadi oval panjang.
- Kartu testimoni memakai foto persegi proporsional, bukan panel foto tinggi yang memotong wajah.
- Ditambahkan navigasi kategori untuk Figur Publik, Psikolog & Pendidikan, serta Ahli & Profesional.
- Ditambahkan CTA internal pada bagian transparansi sumber, penutup halaman, dan sticky CTA mobile.
- Bahasa halaman disederhanakan dari sudut pandang calon peserta: membaca pengalaman, menemukan relevansi, lalu menanyakan jadwal.
- Semua gambar testimoni memiliki pengaturan pemuatan dan decoding yang lebih efisien.

## Yang tetap dipertahankan

- Sembilan testimoni bernama dan profesi narasumber.
- Penjelasan bahwa mereka merupakan pengguna atau narasumber jaringan STIFIn, bukan klien langsung STIFIn Mulia.
- Foto lokal WebP agar halaman tidak bergantung pada server gambar pihak lain.
- WhatsApp pusat dan formulir internal sebagai jalur tindak lanjut.

## Environment

Tidak ada environment variable baru untuk v1.7. Gunakan konfigurasi Coolify yang sudah aktif. Redeploy diperlukan agar hasil build v1.7 diterbitkan.

## Halaman yang perlu diperiksa setelah deploy

1. `/testimoni/` pada lebar layar ponsel dan desktop.
2. Beranda, `/tes-stifin/`, `/wsl-1/`, dan `/jadi-promotor/` untuk blok testimoni ringkas.
3. `/ikut-tes-stifin/` untuk memastikan CTA dari halaman testimoni masuk ke formulir.
4. Tiga artikel terbaru untuk memastikan keterangan sumber tampil sebagai teks, bukan tautan keluar.
