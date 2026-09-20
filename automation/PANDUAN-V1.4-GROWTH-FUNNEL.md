# Panduan Growth Funnel STIFIn Mulia v1.4

## Tujuan

Versi 1.4 menghubungkan tiga pintu masuk website ke tahapan StarSender yang berbeda:

1. `/ikut-tes-stifin/` untuk calon peserta Tes STIFIn;
2. `/ikut-wsl-1/` untuk peserta yang ingin mendalami hasil melalui WSL 1;
3. `/gabung-promotor/` untuk calon Promotor STIFIn.

Semua form menggunakan webhook yang sama, tetapi field `funnel_stage` menentukan campaign tujuan. Jangan menjalankan workflow v1.3 dan v1.4 secara bersamaan karena keduanya memakai path webhook `stifin-lead`.

## Campaign yang harus dibuat di StarSender

Gunakan device `mulia` dan nomor `081333362649`.

### 01 - LEAD TES STIFIN

| Kolom | Isi |
| --- | --- |
| Nama campaign | `01 - LEAD TES STIFIN` |
| Syntax registrasi | `TES#Nama#Kota#Kebutuhan#Jumlah` |
| Welcome message | Aktif |

Welcome message:

```text
Assalamu'alaikum, Kak.

Terima kasih sudah mengisi form Tes STIFIn di website STIFIn Mulia. Data Kakak sudah kami terima.

Tim akan membantu mengecek pilihan jadwal, lokasi, biaya, dan proses tes di kota Kakak.

Tesnya direncanakan untuk siapa? Balas pesan ini agar tim dapat membantu secara personal.
```

### 04 - MINAT WSL 1

| Kolom | Isi |
| --- | --- |
| Nama campaign | `04 - MINAT WSL 1` |
| Syntax registrasi | `WSL1#Nama#Kota#Hasil#Tujuan` |
| Welcome message | Aktif |

Welcome message:

```text
Assalamu'alaikum, Kak.

Terima kasih sudah menyampaikan minat mengikuti WSL 1 melalui website STIFIn Mulia.

Tim akan mengecek status Tes STIFIn, tujuan belajar, jadwal kelas, dan informasi biaya yang tersedia.

Sambil menunggu, boleh ceritakan satu hal yang paling ingin Kakak pahami dari hasil tes?
```

### 05 - CALON PROMOTOR

| Kolom | Isi |
| --- | --- |
| Nama campaign | `05 - CALON PROMOTOR` |
| Syntax registrasi | `PROMOTOR#Nama#Kota#Profesi#StatusTes#StatusWSL` |
| Welcome message | Aktif |

Welcome message:

```text
Assalamu'alaikum, Kak.

Terima kasih sudah mengisi form calon Promotor STIFIn di website STIFIn Mulia.

Tim akan mempelajari profesi, kota, jaringan, status Tes STIFIn, dan status WSL 1 Kakak sebelum memberi arahan awal.

Konsultasi ini belum mewajibkan Kakak langsung bergabung. Tim akan menjelaskan jalur belajar, fasilitas, investasi, dan pendampingannya terlebih dahulu.
```

Campaign `02 - JADWAL TES` dan `03 - SELESAI TES` tetap dipertahankan untuk perpindahan manual berdasarkan kejadian nyata.

## Mengambil Campaign ID

1. Simpan ketiga campaign entry: 01, 04, dan 05.
2. Buka halaman edit masing-masing campaign.
3. Ambil ID numerik dari dashboard atau URL.
4. Jangan menebak ID dan jangan menggunakan nomor urutan campaign sebagai ID API.

Catat sebagai:

```text
campaign_id_test     = ID campaign 01
campaign_id_wsl1     = ID campaign 04
campaign_id_promotor = ID campaign 05
```

## Mengganti workflow n8n

1. Nonaktifkan workflow `STIFIn 01 - Website Lead ke StarSender`.
2. Impor file:

```text
automation/STIFIn-02-Multi-Funnel-ke-StarSender.json
```

3. Buka node `CONFIG - Isi 3 Campaign ID`.
4. Isi ketiga Campaign ID dengan angka asli dari StarSender.
5. Buka node `StarSender - Masukkan Sesuai Funnel`.
6. Pilih credential `StarSender Account API`.
7. Simpan dan uji sebelum workflow diaktifkan.

Account API Key tetap disimpan di Credentials n8n. Jangan menaruh API key di website, GitHub, file workflow, screenshot, atau chat.

## Uji tiga funnel

Gunakan Test URL dari node Webhook. Ganti `URL-TEST-N8N` dengan URL yang diberikan n8n.

### Tes STIFIn

```bash
curl -X POST "URL-TEST-N8N" -H "Content-Type: application/json" -d '{
  "funnel_stage":"tes",
  "name":"Uji Funnel Tes",
  "phone":"081333362649",
  "city":"Bandung",
  "need":"Diri sendiri",
  "participant_count":"1",
  "consent":"true"
}'
```

### WSL 1

```bash
curl -X POST "URL-TEST-N8N" -H "Content-Type: application/json" -d '{
  "funnel_stage":"wsl1",
  "name":"Uji Funnel WSL",
  "phone":"081333362649",
  "city":"Bandung",
  "stifin_result":"Thinking",
  "learning_goal":"Memahami diri",
  "consent":"true"
}'
```

### Promotor

```bash
curl -X POST "URL-TEST-N8N" -H "Content-Type: application/json" -d '{
  "funnel_stage":"promotor",
  "name":"Uji Funnel Promotor",
  "phone":"081333362649",
  "city":"Bandung",
  "profession":"Guru",
  "stifin_status":"Sudah tes dan memahami hasil",
  "wsl_status":"Sudah mengikuti WSL 1",
  "consent":"true"
}'
```

Pastikan setiap nomor uji masuk ke campaign yang sesuai dan menerima welcome message yang benar. Hapus kontak uji setelah pemeriksaan selesai.

## Environment Coolify

Website tetap memakai satu URL webhook:

```env
PUBLIC_STIFIN_LEAD_WEBHOOK_URL=https://n8n.rizqhub.id/webhook/stifin-lead
```

Aktifkan sebagai Build Variable lalu Redeploy setelah workflow produksi aktif. Meta Pixel tetap opsional:

```env
PUBLIC_META_PIXEL_ID=
```

## Cara membaca funnel

| Tahap | Penanda | Tujuan operasional |
| --- | --- | --- |
| Lead Tes | `funnel_stage=tes` | Menjadi jadwal dan tes selesai |
| Minat WSL 1 | `funnel_stage=wsl1` | Menjadi peserta WSL 1 |
| Calon Promotor | `funnel_stage=promotor` | Menjadi konsultasi dan promotor aktif |

Ukuran keberhasilan utama bukan jumlah chat. Catat jumlah lead yang benar-benar bergerak ke tahap berikutnya: tes selesai, WSL 1 selesai, dan promotor aktif.

## Aturan testimoni dan bukti sosial

Reaksi seperti “gua banget” dan “kok bisa pas” pada landing page berasal dari rangkuman respons peserta dalam buku <em>Konsep PALUGADA</em> terbitan STIFIn Institute. Website menyatakannya sebagai pengalaman jaringan pusat, bukan testimoni pelanggan langsung STIFIn Mulia.

Jangan membuat nama, foto, jabatan, kota, atau cerita peserta yang tidak tercantum pada sumber atau belum memberikan izin publikasi. Ketika STIFIn Mulia memperoleh testimoni langsung, simpan persetujuan penggunaan nama, foto, kutipan, dan kanal publikasinya.
