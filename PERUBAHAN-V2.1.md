# STIFIn Mulia v2.1 — Conversion & Trust Center

Versi 2.1 membantu pengunjung mengambil keputusan dengan informasi yang lebih lengkap tanpa mewajibkan integrasi n8n.

## Yang baru

- Halaman `/apakah-tes-stifin-cocok-untuk-saya/` sebagai pusat keputusan calon peserta.
- Penjelasan kapan Tes STIFIn dapat relevan dan kapan pengunjung sebaiknya berhenti sejenak.
- Lima jalur berdasarkan kesiapan: belajar, konsultasi, tes, WSL 1, dan promotor.
- Tabel perbandingan fungsi Tes STIFIn, penjelasan hasil, WSL 1, dan jalur promotor.
- Dua belas jawaban untuk keberatan umum calon peserta.
- Structured data `FAQPage` agar jawaban lebih mudah dipahami mesin pencari dan sistem AI.
- Tautan menuju pusat keputusan dari beranda, halaman Tes STIFIn, kartu calon peserta, footer, dan `llms.txt`.
- Journey Engine mengirim ringkasan langsung ke WhatsApp tanpa webhook dan tanpa n8n.

## Environment

Tidak ada environment baru. `PUBLIC_STIFIN_LEAD_WEBHOOK_URL` boleh dikosongkan. Konfigurasi API jaringan promotor tetap sama seperti versi sebelumnya.

## Prinsip penulisan

Halaman tidak menjanjikan diagnosis, kepastian masa depan, kecocokan profesi otomatis, penyelesaian masalah keluarga, atau jaminan penghasilan promotor. Pengunjung diarahkan untuk memahami konteks, menilai kesiapan, dan mengonfirmasi informasi terbaru melalui WhatsApp pusat.

