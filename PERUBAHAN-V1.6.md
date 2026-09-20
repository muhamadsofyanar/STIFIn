# STIFIn Mulia v1.6 — Authority & Trust

## Yang ditambahkan

- Halaman baru `/testimoni/` berisi sembilan testimoni bernama.
- Kategori Figur Publik, Psikolog & Pendidikan, serta Ahli & Profesional.
- Foto narasumber pada setiap kartu testimoni.
- Tautan pemeriksaan menuju sumber resmi STIFIn.
- Menu Testimoni pada navigasi desktop, mobile, dan footer.
- Blok testimoni kontekstual pada beranda, halaman Tes, WSL 1, Promotor, dan tiga landing page funnel.

## Narasumber

1. Melly Goeslaw — penulis lagu dan penyanyi.
2. Seto Mulyadi — psikolog dan pemerhati anak.
3. Asri Welas — pemeran dan model.
4. Ibnu Jamil & Ririn Ekawati — aktor, aktris, dan presenter.
5. Subiakto Priosoedarsono — pakar branding.
6. Prof. Dr. Arief Rachman, M.Pd. — praktisi pendidikan.
7. Kris Pujiatni — psikolog dan dosen psikologi UMS.
8. Arifia Maulida — Miss Indonesia Favorit 2020.
9. Prof. Dr. Kumaidi, M.A. — ahli psikometrik dan dosen UMS.

## Prinsip publikasi

Testimoni ditulis sebagai ringkasan dari publikasi resmi, bukan seolah-olah para narasumber menggunakan layanan STIFIn Mulia secara langsung. Semua kartu menyertakan tautan sumber. Pengalaman individu tidak ditampilkan sebagai jaminan bahwa setiap peserta akan memperoleh hasil yang sama.

Foto bersumber dari galeri testimoni publik pada `https://stifin.com/` dan disimpan secara lokal agar halaman cepat serta tidak bergantung pada hotlink.

## Environment

Tidak ada environment variable baru. Pertahankan konfigurasi v1.5 untuk API jaringan, n8n, StarSender, dan Meta Pixel.

## Pemeriksaan setelah deploy

1. Buka `/testimoni/` pada desktop dan ponsel.
2. Pastikan sembilan foto tampil tajam dan tidak terpotong pada wajah.
3. Klik beberapa tautan **Sumber resmi**.
4. Buka menu mobile dan pastikan item **Testimoni** dapat dipilih.
5. Periksa blok testimoni pada `/`, `/tes-stifin/`, `/ikut-tes-stifin/`, `/wsl-1/`, `/ikut-wsl-1/`, `/jadi-promotor/`, dan `/gabung-promotor/`.
6. Uji kembali ketiga formulir funnel untuk memastikan integrasi n8n/StarSender tetap berjalan.
