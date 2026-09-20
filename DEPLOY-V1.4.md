# Checklist Deploy STIFIn Mulia v1.4

## Yang berubah

Versi 1.4 menambahkan tiga jalur lead yang memakai satu webhook:

| Tahap | Halaman form | Campaign StarSender |
| --- | --- | --- |
| Tes STIFIn | `/ikut-tes-stifin/` | `01 - LEAD TES STIFIN` |
| WSL 1 | `/ikut-wsl-1/` | `04 - MINAT WSL 1` |
| Promotor | `/gabung-promotor/` | `05 - CALON PROMOTOR` |

Workflow n8n membaca field `funnel_stage` lalu memasukkan kontak ke campaign yang sesuai. Sesudah form dikirim, pengunjung tetap diarahkan ke halaman terima kasih dan WhatsApp pusat `081333362649` dengan ringkasan kebutuhannya.

## Apakah environment cabang perlu diganti?

Tidak. Pertahankan `STIFIN_API_BASE` dan `STIFIN_BRANCH_CODES` yang sekarang sudah berisi `JML-CAB-01` sampai `JML-CAB-85` serta delapan kode non-JML berikut:

```text
BNJ-CAB-01,TGS-CAB-03,JKT-CAB-01,SGI-CAB-50,SMG-CAB-05,BTM-CAB-01,BKS-CAB-03,SGP-CAB-02
```

Jangan menambahkan `JML-CAB-86` ke atas sebelum API benar-benar mengembalikan data valid. Jangan mengganti daftar dengan `all`: endpoint yang tersedia membutuhkan kode cabang dan belum terbukti mendukung parameter `all`.

Konfigurasi sinkronisasi yang dipertahankan:

```env
STIFIN_API_BASE=https://apro.stifin.id/api
STIFIN_SYNC_CONCURRENCY=6
STIFIN_SYNC_TIMEOUT_MS=15000
STIFIN_SYNC_RETRIES=2
STIFIN_MIN_SUCCESS_RATE=0.95
STIFIN_MAX_DROP_RATE=0.35
```

Semua variabel sinkronisasi harus aktif sebagai **Build Variable** di Coolify. Daftar lengkap `STIFIN_BRANCH_CODES` tetap tersedia di `DEPLOY-V1.3.md` dalam paket ini.

## Environment baru/yang harus diperiksa

Pastikan nilai berikut aktif sebagai **Build Variable**:

```env
PUBLIC_STIFIN_LEAD_WEBHOOK_URL=https://n8n.rizqhub.id/webhook/stifin-lead
PUBLIC_META_PIXEL_ID=
```

`PUBLIC_META_PIXEL_ID` boleh kosong. Isi hanya setelah Meta Pixel resmi tersedia. Website tetap dapat membuka WhatsApp apabila webhook belum tersedia, tetapi lead tidak akan tercatat otomatis di StarSender.

## Persiapan StarSender

1. Buat campaign `01 - LEAD TES STIFIN`.
2. Buat campaign `04 - MINAT WSL 1`.
3. Buat campaign `05 - CALON PROMOTOR`.
4. Salin ID asli dari masing-masing campaign; jangan menebaknya dari nomor nama campaign.
5. Gunakan device WhatsApp pusat STIFIn Mulia.

Isi syntax dan welcome message sesuai `automation/PANDUAN-V1.4-GROWTH-FUNNEL.md`.

## Mengganti workflow n8n

1. Nonaktifkan workflow v1.3 `STIFIn 01 - Website Lead ke StarSender` agar tidak ada dua webhook dengan path sama.
2. Impor `automation/STIFIn-02-Multi-Funnel-ke-StarSender.json`.
3. Buka node `CONFIG - Isi 3 Campaign ID`.
4. Isi `campaign_id_test`, `campaign_id_wsl1`, dan `campaign_id_promotor` dengan ID StarSender sebenarnya.
5. Pada node request StarSender, pilih credential Account API yang sudah tersimpan di n8n.
6. Uji ketiga contoh payload dalam panduan.
7. Setelah semuanya masuk ke campaign yang benar, aktifkan workflow produksi.

API key StarSender hanya disimpan pada Credentials n8n. Jangan menyimpannya di GitHub, Coolify public variable, source code, screenshot, atau chat.

## Urutan redeploy

1. Siapkan tiga campaign StarSender.
2. Impor dan uji workflow n8n v1.4.
3. Nonaktifkan workflow lama yang memakai webhook `stifin-lead`.
4. Aktifkan workflow v1.4.
5. Pastikan URL production webhook sudah ada di Coolify.
6. Unggah isi folder proyek ke root repository.
7. Redeploy menggunakan Dockerfile dan port `80`.
8. Periksa log sinkronisasi API; build harus berhenti bila kegagalan melewati batas aman.
9. Uji form Tes, WSL 1, dan Promotor dari perangkat seluler.
10. Pastikan setiap lead masuk ke campaign tepat dan tombol WhatsApp membawa ringkasan data.

## Pemeriksaan setelah tayang

- Menu seluler terbuka penuh dan seluruh tautan dapat diketuk.
- `/ikut-tes-stifin/` masuk ke campaign 01.
- `/ikut-wsl-1/` masuk ke campaign 04.
- `/gabung-promotor/` masuk ke campaign 05.
- Halaman terima kasih membuka WhatsApp `081333362649`.
- Parameter `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid`, dan `gclid` ikut tercatat.
- `/jaringan-promotor/` tidak menampilkan provinsi `-`, `NULL`, atau `undefined`.
- Jumlah wilayah tidak turun secara tidak wajar dibanding deploy sebelumnya.

## Testimoni dan bukti sosial

Reaksi singkat pada website berasal dari rangkuman pengalaman peserta dalam buku *Konsep PALUGADA* terbitan STIFIn Institute. Website menyatakannya sebagai pengalaman jaringan pusat, bukan testimoni langsung pelanggan STIFIn Mulia.

Jangan menambahkan nama, foto, kota, profesi, atau cerita peserta tanpa sumber dan izin publikasi. Testimoni langsung STIFIn Mulia dapat ditambahkan kemudian setelah persetujuan penggunaan nama, kutipan, foto, dan kanal publikasi terdokumentasi.
