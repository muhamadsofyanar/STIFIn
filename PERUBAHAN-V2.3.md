# STIFIn Mulia v2.3 — Knowledge Authority & AI Discovery Engine

Versi ini mengubah kumpulan artikel menjadi arsitektur pengetahuan yang saling terhubung. Tujuannya bukan menghasilkan URL sebanyak mungkin, tetapi membuat setiap pertanyaan besar memiliki jawaban utama, penjelasan mendalam, istilah yang terdefinisi, bacaan pendukung, serta langkah lanjut yang sesuai.

## Yang baru

- Halaman `/panduan/` sebagai peta pengetahuan utama.
- Delapan panduan pilar: fondasi STIFIn, tes dan hasil, anak–belajar–parenting, pasangan dan keluarga, karier–profesi–finansial, bisnis–tim–kepemimpinan, WSL 1–promotor, dan Surah Al-Qamar.
- Halaman mandiri untuk 19 istilah prioritas melalui `/istilah/[slug]/`.
- Setiap istilah menjelaskan definisi, alasan penting, cara menggunakan, kekeliruan yang perlu dihindari, hubungan konsep, artikel penerapan, dan CTA.
- Halaman kamus tetap memuat seluruh istilah serta menandai istilah yang mempunyai penjelasan lengkap.
- Artikel kini menampilkan panduan induk dan structured data `about` serta `mentions`.
- Panduan pilar memakai `WebPage`, `FAQPage`, dan `BreadcrumbList` schema.
- Halaman istilah memakai `DefinedTerm` dan terhubung ke `DefinedTermSet` kamus utama.
- `llms.txt` diperluas dengan panduan dan istilah prioritas agar struktur website lebih mudah dipahami mesin pencari serta sistem AI.
- Ruang Tafsir Al-Qamar dinyatakan secara eksplisit sebagai kajian tersendiri dan tidak dipakai untuk mengklaim pembuktian konsep STIFIn.

## Prinsip konten

Materi sumber digunakan untuk memahami gagasan, bukan disalin sebagai publikasi ulang. Setiap halaman ditulis kembali untuk pembaca, diberi konteks, menghindari janji hasil, dan menghubungkan konsep dengan tindakan yang dapat diamati. Keputusan medis, psikologis, pendidikan, profesi, relasi, dan bisnis tetap memerlukan data serta keahlian yang relevan.

## Environment dan deploy

Versi 2.3 tidak membutuhkan environment baru. Gunakan konfigurasi API jaringan yang sama dengan versi sebelumnya. Setelah mengganti isi repository, lakukan redeploy melalui Dockerfile dan port `80`.
