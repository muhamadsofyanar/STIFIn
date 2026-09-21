# STIFIn Mulia v2.0 — Journey Engine

Versi 2.0 menambahkan jalur personal untuk membantu pengunjung bergerak dari kebutuhan nyata menuju bacaan, Tes STIFIn, WSL 1, atau jalur promotor.

## Yang baru

- Halaman `/perjalanan/` berisi empat pertanyaan singkat dengan enam jalur kebutuhan: diri, anak, keluarga, karier, tim/bisnis, dan promotor.
- Hasil personal memuat alasan rekomendasi, tiga artikel pilihan, tingkat kesiapan, dan tindakan berikutnya.
- Hasil dapat dibagikan melalui URL tanpa menyimpan data pribadi di alamat halaman.
- Formulir lead membawa konteks jawaban, UTM, `fbclid`, `gclid`, persetujuan, dan status pengiriman ke webhook.
- Jika webhook belum aktif atau gagal, pengunjung tetap diarahkan ke WhatsApp sehingga peluang tidak hilang.
- Halaman `/terima-kasih-perjalanan/` menyusun pesan WhatsApp otomatis dari jawaban pengunjung.
- Navigasi, footer, beranda, serta `llms.txt` sudah mengarahkan pengunjung dan mesin pencari AI ke Journey Engine.
- Payload Journey Engine kompatibel dengan funnel Tes dan Promotor yang sudah ada; field tambahan dapat dipakai untuk segmentasi n8n dan StarSender.

## Field lead baru

`journey_id`, `journey_label`, `journey_tag`, `lead_temperature`, `audience`, `readiness`, `timeframe`, `answers_summary`, `landing_variant`.

## Privasi dan batas penggunaan

- Rekomendasi dapat dilihat tanpa memasukkan nomor WhatsApp.
- Data dikirim hanya setelah formulir dan persetujuan diisi.
- Rekomendasi merupakan panduan edukasi, bukan diagnosis medis atau psikologis dan bukan penentu tunggal keputusan hidup.

