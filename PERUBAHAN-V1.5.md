# STIFIn Mulia v1.5 — Proof System dan Brand Lockup

## Hasil utama

Versi ini memperkuat perjalanan calon peserta dari rasa penasaran menuju form Tes STIFIn, WSL 1, dan konsultasi promotor. Bukti tidak lagi muncul pada satu landing page saja, tetapi disesuaikan dengan tujuan setiap halaman.

### Lokasi bukti dan testimoni sumber

- Beranda: empat reaksi peserta jaringan, dokumentasi kegiatan, serta penerapan Learning, Parenting, dan Profession.
- `/tes-stifin/` dan `/ikut-tes-stifin/`: reaksi peserta serta catatan historis 352 tes ulang yang dilaporkan dalam buku *Konsep PALUGADA*.
- `/wsl-1/` dan `/ikut-wsl-1/`: manfaat pembelajaran dari workbook Learning, Parenting, dan Profession.
- `/jadi-promotor/` dan `/gabung-promotor/`: enam ruang layanan tematik—Learning, Parenting, Profession, Business, Marketing, dan Human Resources.

Semua kutipan sumber pusat/jaringan diberi keterangan bahwa itu bukan testimoni langsung peserta STIFIn Mulia. Angka historis juga tidak diposisikan sebagai audit independen atau jaminan hasil individu.

## Penempatan logo

- Logo lingkaran digunakan sebagai simbol ringkas pada header utama dan header landing page.
- Logo lingkaran dan wordmark STIFIn Mulia disandingkan pada footer sebagai brand lockup.
- Aset dioptimalkan ke WebP agar tampilan tetap tajam dengan ukuran file kecil.

## Perubahan konversi

CTA utama pada beranda kini menuju `/ikut-tes-stifin/#daftar`. Pengunjung mengisi nama, WhatsApp, kota, kebutuhan, dan jumlah peserta sebelum diteruskan ke alur tindak lanjut. Ini membuat trafik iklan maupun organik dapat masuk ke funnel yang sama dan lebih mudah diukur.

## Environment

Tidak ada environment baru pada v1.5. Pertahankan seluruh nilai v1.4, termasuk:

```text
PUBLIC_STIFIN_LEAD_WEBHOOK_URL=https://n8n.rizqhub.id/webhook/stifin-lead
PUBLIC_META_PIXEL_ID=ID-PIXEL-META-ANDA
```

Konfigurasi `STIFIN_API_BASE` dan `STIFIN_BRANCH_CODES` juga tidak perlu diubah untuk pembaruan ini.

## Sebelum deploy

1. Impor dan aktifkan workflow multi-funnel v1.4 pada n8n.
2. Pastikan ID campaign Tes, WSL 1, dan Promotor diisi pada workflow.
3. Pastikan webhook dapat menerima request dari `https://stifinmulia.com`.
4. Redeploy dengan Dockerfile dan port `80`.
5. Uji satu form pada setiap funnel dan cek kontak masuk ke campaign StarSender yang sesuai.
