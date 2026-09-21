# STIFIn Mulia v2.2 — Progression Engine

Versi 2.2 memastikan calon peserta tidak berhenti setelah membaca. Website sekarang membawa konteks pengunjung dari tahap Tes STIFIn menuju WSL 1 dan Promotor, tanpa n8n, webhook, atau environment baru.

## Perubahan utama

### 1. Halaman Langkah Berikutnya

Halaman baru `/langkah-selanjutnya/` membantu pengunjung memilih jalur berdasarkan posisi mereka:

- belum Tes STIFIn;
- sudah tes dan ingin memahami hasil melalui WSL 1;
- sudah belajar dan ingin menjajaki promotor;
- masih belum yakin dan perlu Journey Engine.

### 2. Penunjuk tahap pada landing page

Landing Tes, WSL 1, dan Promotor sekarang menampilkan jalur tiga tahap. Pengunjung dapat memahami posisi saat ini, tahap yang sudah dilalui, dan tujuan setelahnya.

### 3. Form langsung ke WhatsApp

Form Tes, WSL 1, dan Promotor tidak memakai webhook. Setelah divalidasi, website membuka WhatsApp pusat dengan ringkasan terstruktur yang memuat:

- ID prospek;
- nama dan nomor WhatsApp;
- kota atau kabupaten;
- kebutuhan dan tahap funnel;
- informasi kualifikasi sesuai jalur;
- sumber, kampanye, dan halaman asal.

### 4. Atribusi kampanye tersimpan

Parameter `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid`, dan `gclid` disimpan di peramban sebagai atribusi awal dan terbaru. Konteks tetap tersedia ketika pengunjung berpindah halaman sebelum mengisi form.

### 5. Event konversi siap dibaca

Website mengirim event ke `dataLayer` bila tersedia:

- `funnel_stage_view`;
- `progression_tes`;
- `progression_wsl1`;
- `progression_promotor`;
- `lead_tes_submit`, `lead_wsl1_submit`, atau `lead_promotor_submit`;
- `whatsapp_open`;
- `whatsapp_click`;
- event Journey Engine yang sudah tersedia.

Event berjalan tanpa environment. Agar terlihat dalam alat analitik, pemilik website tetap perlu memasang alat analitik yang membaca `dataLayer`. Meta Pixel tetap opsional.

### 6. CTA artikel mengikuti konteks

Kategori artikel kini mengarahkan pembaca ke Tes, WSL 1, atau Promotor sesuai maksud baca. Pembaca tetap dapat bertanya melalui WhatsApp atau membuka form yang relevan.

## Environment

Tidak ada environment baru. `PUBLIC_STIFIN_LEAD_WEBHOOK_URL` tidak lagi digunakan oleh website. Pertahankan konfigurasi API jaringan promotor yang sudah berjalan. `PUBLIC_META_PIXEL_ID` hanya diperlukan bila Meta Pixel ingin diaktifkan.
