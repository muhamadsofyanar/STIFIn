# STIFIn Mulia v2.5 — Offer & Booking Engine

Versi 2.5 menutup jarak antara “sudah tertarik” dan “siap meminta tindak lanjut”. Website kini tidak hanya memberi pengetahuan dan bukti, tetapi membantu pengunjung memahami pilihan layanan, memperoleh rekomendasi awal, serta mengirim permintaan yang lebih lengkap ke WhatsApp.

## Yang baru

- Halaman pusat pilihan di `/pilih-layanan/`.
- Lima pilihan yang dapat dibandingkan: Tes STIFIn Individual, Tes Anak & Keluarga, Program Kelompok & Lembaga, WSL 1, dan Jalur Menjadi Promotor.
- Penjelasan setiap layanan meliputi kecocokan, proses yang disiapkan, keluaran yang diharapkan, dan bacaan detail.
- Asisten pemilihan menggunakan tiga pertanyaan: posisi saat ini, fokus kebutuhan, dan langkah yang diinginkan.
- Rekomendasi dapat dilihat tanpa memberikan nomor WhatsApp.
- Form tindak lanjut membawa nama, nomor WhatsApp, kota, jumlah peserta, waktu yang diharapkan, dan kebutuhan utama.
- Pesan WhatsApp meminta tim mengonfirmasi jadwal, lokasi, biaya resmi, dan langkah berikutnya.
- Penjelasan empat tahap setelah formulir dikirim agar pengunjung memahami proses tindak lanjut.
- Delapan jawaban keberatan mengenai biaya, kewajiban mendaftar, tes langsung, peserta yang sudah tes, ketersediaan wilayah, batas hasil, dan proses setelah mengirim form.
- Structured data `Service`, `ItemList`, dan `FAQPage` untuk membantu mesin pencari serta asisten AI memahami penawaran.
- Navigasi utama, beranda, footer, dan `llms.txt` diarahkan ke pusat pilihan layanan.

## Prinsip penawaran

- Website tidak menampilkan harga yang belum dikonfirmasi.
- Website tidak menjanjikan jadwal atau promotor tersedia di setiap wilayah.
- Percakapan awal tidak membuat pengunjung wajib mendaftar.
- Hasil Tes STIFIn ditempatkan sebagai peta pengenalan diri, bukan vonis keputusan hidup.
- Jalur promotor dijelaskan sebagai proses belajar dan pelayanan, bukan janji pendapatan.

## Environment

Versi 2.5 tidak membutuhkan environment baru. Gunakan konfigurasi API jaringan, WhatsApp, dan pengukuran opsional yang sama seperti versi sebelumnya.
