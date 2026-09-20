# Panduan StarSender + n8n untuk STIFIn Mulia

Dokumen ini adalah petunjuk operasional untuk funnel utama:

**Iklan → landing page → form → StarSender → jadwal tes → selesai tes → WSL 1 → promotor aktif.**

Nomor pusat: **0813-3336-2649**  
Device StarSender: **mulia (Multidevice)**  
Webhook lead website: **https://n8n.rizqhub.id/webhook/stifin-lead**  
Webhook pesan masuk yang pernah digunakan: **https://n8n.rizqhub.id/webhook/starsender**

> Jangan menaruh Account API Key atau Device API Key di website, GitHub, isi workflow, tangkapan layar, atau chat. Keduanya hanya dimasukkan ke menu Credentials n8n atau kolom aman yang disediakan StarSender.

## 1. Peran setiap sistem

| Sistem | Tugas |
| --- | --- |
| Meta/Facebook Ads | Mendatangkan calon peserta yang tepat. |
| `/ikut-tes-stifin/` | Menjelaskan manfaat dan menangkap lead. |
| n8n | Memvalidasi data dan mengirimnya ke StarSender. |
| StarSender Campaign | Menentukan tahapan setiap lead dan menjalankan tindak lanjut. |
| WhatsApp pusat | Percakapan manusia, penjadwalan, dan konfirmasi. |
| Tim STIFIn Mulia | Memindahkan lead ke tahap berikutnya berdasarkan kejadian nyata. |

Campaign StarSender **bukan campaign iklan**. Campaign StarSender dipakai sebagai tahapan CRM WhatsApp.

## 2. Campaign yang dibuat lebih dahulu

Buka **StarSender → Campaign → Tambah Campaign**. Buat empat campaign di bawah secara berurutan.

### Campaign 01 — Lead Tes STIFIn

| Kolom StarSender | Isi |
| --- | --- |
| Nama campaign | `01 - LEAD TES STIFIN` |
| Device/perangkat | `mulia` |
| Nomor pengirim | `081333362649` atau nomor yang tampil pada device mulia |
| Syntax registrasi | `TES#Nama#Kota#Kebutuhan#Jumlah` |
| Welcome message | Aktif |

Isi welcome message:

```text
Assalamu'alaikum, Kak.

Terima kasih sudah mengisi form Tes STIFIn di website STIFIn Mulia. Data Kakak sudah kami terima.

Tim kami akan membantu mengecek pilihan jadwal, lokasi, biaya yang berlaku, dan proses tes di kota Kakak.

Tesnya direncanakan untuk diri sendiri, anak, pasangan, keluarga, atau kelompok?

Balas pesan ini agar tim kami dapat membantu lebih lanjut.
```

Campaign ini adalah tujuan otomatis semua form baru dari website.

### Campaign 02 — Jadwal Tes

| Kolom StarSender | Isi |
| --- | --- |
| Nama campaign | `02 - JADWAL TES` |
| Device/perangkat | `mulia` |
| Nomor pengirim | `081333362649` |
| Syntax registrasi | `JADWAL#Nama#Kota#Tanggal` |
| Welcome message | Tidak perlu diaktifkan |

Pindahkan kontak ke campaign ini hanya setelah kota, perkiraan waktu, biaya, dan tindak lanjut sudah dibahas oleh CS.

### Campaign 03 — Selesai Tes

| Kolom StarSender | Isi |
| --- | --- |
| Nama campaign | `03 - SELESAI TES` |
| Device/perangkat | `mulia` |
| Nomor pengirim | `081333362649` |
| Syntax registrasi | `SELESAI#Nama#Kota` |
| Welcome message | Tidak perlu diaktifkan |

Pindahkan setelah tes dan penjelasan hasil benar-benar selesai. Jangan memindahkan hanya karena calon peserta sudah membayar.

### Campaign 04 — WSL 1 dan Calon Promotor

| Kolom StarSender | Isi |
| --- | --- |
| Nama campaign | `04 - WSL1 DAN CALON PROMOTOR` |
| Device/perangkat | `mulia` |
| Nomor pengirim | `081333362649` |
| Syntax registrasi | `WSL1#Nama#Kota#Minat` |
| Welcome message | Tidak perlu diaktifkan |

Pindahkan peserta ke sini setelah ia selesai tes dan menyatakan ingin mendalami STIFIn, mengikuti WSL 1, atau mengetahui jalur promotor.

## 3. Cara mengetahui Campaign ID

Workflow n8n membutuhkan ID numerik campaign pertama.

1. Simpan `01 - LEAD TES STIFIN`.
2. Buka kembali campaign tersebut melalui tombol aksi/edit.
3. Periksa angka ID yang ditampilkan StarSender atau angka pada alamat halaman setelah `id=`/bagian terakhir URL.
4. Catat sebagai `CAMPAIGN_ID_LEAD`.
5. Jika ID tidak terlihat di dashboard, jalankan permintaan daftar campaign melalui fitur API/HTTP n8n menggunakan Account API Key, lalu ambil ID campaign bernama `01 - LEAD TES STIFIN`.

Jangan menebak ID. ID harus berasal dari campaign yang sudah tersimpan.

## 4. Account API Key dan Device API Key

StarSender menggunakan dua jenis kunci dengan fungsi berbeda.

| Kunci | Digunakan untuk | Penyimpanan |
| --- | --- | --- |
| Account API Key | Campaign, anggota campaign, dan kontak | Credentials n8n |
| Device API Key | Mengirim pesan langsung dan operasi perangkat | Credentials n8n, hanya jika nanti diperlukan |

Workflow versi ini menggunakan **Account API Key**. Welcome message dikirim oleh campaign, sehingga Device API Key tidak perlu ditanam dalam workflow.

Cara membuat credential di n8n:

1. Masuk ke n8n.
2. Buka **Credentials → Add credential**.
3. Cari **Header Auth** atau **HTTP Header Auth**.
4. Name: `StarSender Account API`.
5. Header Name: `Authorization`.
6. Header Value: tempel **Account API Key** dari menu Profile StarSender.
7. Simpan.

Jangan menambahkan kata `Bearer` kecuali dashboard/dokumentasi akun Anda secara khusus memintanya.

## 5. Impor workflow n8n

File yang digunakan:

```text
automation/STIFIn-01-Website-Lead-ke-StarSender.json
```

Langkahnya:

1. Buka n8n.
2. Pilih **Workflows → Import from File**.
3. Pilih file JSON di atas.
4. Buka node **CONFIG — Isi Campaign ID**.
5. Ganti nilai `0` pada `campaign_id_lead` dengan ID `01 - LEAD TES STIFIN`.
6. Buka node **StarSender — Tambah ke Campaign**.
7. Pada Authentication, pilih credential `StarSender Account API`.
8. Simpan workflow.

Node API mengirimkan:

```json
{
  "campaign_id": 123,
  "number": "628133336264",
  "syntax": "TES#Nama#Kota#Kebutuhan#Jumlah",
  "welcome_message": true
}
```

Angka `123` hanya contoh. Workflow memakai ID yang Anda isi pada node konfigurasi.

## 6. Uji workflow sebelum diaktifkan

1. Di node Webhook, klik **Listen for Test Event**.
2. Salin Test URL yang berakhiran `/webhook-test/stifin-lead`.
3. Kirim contoh berikut melalui terminal atau Postman:

```bash
curl -X POST "URL-TEST-N8N" \
  -H "Content-Type: application/json" \
  -d '{
    "lead_id":"uji-001",
    "name":"Uji STIFIn Mulia",
    "phone":"081333362649",
    "city":"Bandung",
    "need":"Diri sendiri",
    "participant_count":"1",
    "consent":"true",
    "consent_at":"2026-09-20T10:00:00.000Z",
    "source_page":"/ikut-tes-stifin/",
    "landing_variant":"uji",
    "utm_source":"internal-test",
    "utm_medium":"test",
    "utm_campaign":"starsender-setup"
  }'
```

4. Pastikan node Normalize berwarna hijau.
5. Pastikan respons StarSender menyatakan anggota campaign berhasil dimasukkan.
6. Periksa nomor uji pada campaign `01 - LEAD TES STIFIN`.
7. Pastikan welcome message diterima.
8. Hapus kontak uji bila tidak ingin bercampur dengan lead asli.

Jika API menolak syntax, samakan huruf, tanda `#`, dan urutan field dengan syntax yang tersimpan pada campaign.

## 7. Aktifkan URL produksi

Setelah tes berhasil:

1. Ubah workflow menjadi **Active**.
2. Production URL menjadi:

```text
https://n8n.rizqhub.id/webhook/stifin-lead
```

3. Di Coolify, tambahkan sebagai **Build Variable**:

```text
PUBLIC_STIFIN_LEAD_WEBHOOK_URL=https://n8n.rizqhub.id/webhook/stifin-lead
```

4. Isi Meta Pixel jika sudah tersedia:

```text
PUBLIC_META_PIXEL_ID=ID_PIXEL_META_ANDA
```

5. Redeploy website.
6. Isi form asli sekali dari `/ikut-tes-stifin/`.
7. Pastikan lead muncul di Execution n8n, Campaign StarSender, dan WhatsApp.

Webhook produksi tidak akan berjalan jika workflow masih Inactive.

## 8. Field dari website

| Field | Contoh | Kegunaan |
| --- | --- | --- |
| `lead_id` | UUID | Identitas unik dan pencegah duplikasi. |
| `name` | Aisyah | Sapaan dan identitas calon peserta. |
| `phone` | 62813… | Nomor WA dalam format internasional. |
| `city` | Bandung | Penjadwalan dan pembagian wilayah. |
| `need` | Anak | Konteks percakapan. |
| `participant_count` | 2 | Perkiraan kebutuhan layanan. |
| `consent` | true | Bukti calon peserta menyetujui kontak WA. |
| `consent_at` | ISO date | Waktu persetujuan diberikan. |
| `source_page` | `/ikut-tes-stifin/` | Halaman penghasil lead. |
| `landing_variant` | utama | Varian landing page. |
| `utm_source` | facebook | Sumber trafik. |
| `utm_medium` | paid_social | Jenis trafik. |
| `utm_campaign` | tes-bandung | Nama campaign iklan. |
| `utm_content` | video-parenting-01 | Materi iklan. |
| `utm_term` | orang-tua | Segmentasi/keyword. |
| `fbclid` | … | ID klik Meta. |
| `gclid` | … | ID klik Google. |

## 9. Follow-up otomatis Campaign 01

Gunakan **Follow Up Otomatis** hanya untuk kontak yang mengisi form dan menyetujui dihubungi.

### Pesan 0 — langsung

Gunakan welcome message Campaign 01. Jangan membuat follow-up kedua pada menit yang sama.

### Pesan 1 — 1 hari setelah masuk

```text
Assalamu'alaikum, Kak.

Kami ingin memastikan permintaan Tes STIFIn Kakak sudah tertangani. Agar jadwal yang diberikan lebih sesuai, tes ini direncanakan untuk siapa dan berada di kota mana?

Kakak dapat membalas langsung pesan ini. Tim STIFIn Mulia akan membantu secara personal.
```

### Pesan 2 — 3 hari setelah masuk

```text
Tes STIFIn tidak berhenti pada mengetahui nama tipe. Setelah tes, hasil perlu dijelaskan agar dapat dihubungkan dengan kebutuhan nyata seperti belajar, komunikasi keluarga, profesi, bisnis, atau relasi.

Jika Kakak masih mempertimbangkan, balas INFO. Kami akan menjelaskan proses, jadwal, lokasi, dan biaya terlebih dahulu tanpa kewajiban langsung membayar.
```

### Pesan 3 — 5 hari setelah masuk

```text
Kak, apakah masih ingin kami bantu mencarikan jadwal Tes STIFIn?

Balas:
1 — Ingin cek jadwal
2 — Ingin tanya dahulu
3 — Belum sekarang

Kami akan menyesuaikan tindak lanjut dengan pilihan Kakak.
```

### Pesan 4 — 7 hari setelah masuk

```text
Kami izin menutup rangkaian pengingat otomatis agar tidak mengganggu.

Jika nanti sudah siap, cukup kirim kata TES ke WhatsApp ini. Tim STIFIn Mulia akan membantu melanjutkan.

Jika tidak ingin menerima pesan lanjutan, balas BERHENTI.
```

Pengaturan yang disarankan:

- Waktu kirim: 09.00–18.00 WIB.
- Jangan kirim beberapa follow-up pada hari yang sama.
- Saat lead membalas, CS segera mengambil alih percakapan.
- Jika StarSender menyediakan opsi berhenti otomatis saat dibalas, aktifkan.
- Jika opsi tersebut tidak tersedia, pindahkan kontak dari Campaign 01 segera setelah ditangani.
- Kontak yang membalas `BERHENTI` tidak boleh dimasukkan kembali ke rangkaian promosi.

## 10. SOP memindahkan kontak

| Kejadian nyata | Tindakan |
| --- | --- |
| Form baru berhasil masuk | Tetap di `01 - LEAD TES STIFIN`. |
| Sudah berdiskusi dan jadwal sedang/selesai ditetapkan | Pindah ke `02 - JADWAL TES`. |
| Tes dan penjelasan hasil sudah selesai | Pindah ke `03 - SELESAI TES`. |
| Peserta meminta informasi WSL 1/jalur promotor | Pindah ke `04 - WSL1 DAN CALON PROMOTOR`. |
| Meminta berhenti | Hentikan follow-up dan tandai sebagai jangan dihubungi. |
| Nomor tidak aktif/salah | Koreksi dari sumber atau arsipkan. |

Pemindahan dapat dilakukan dari dashboard StarSender. Otomasi penuh dapat ditambahkan setelah alur manual terbukti benar.

## 11. Pesan setelah selesai tes menuju WSL 1

Jangan mengirim undangan WSL 1 kepada orang yang belum menyelesaikan tes dan penjelasan hasil.

```text
Assalamu'alaikum, Kak {{nama}}.

Setelah menerima penjelasan hasil STIFIn, Kakak dapat menggunakannya untuk kebutuhan pribadi dan keluarga.

Jika ingin memahami konsepnya lebih dalam, ada jalur pembelajaran WSL 1. Di sana peserta mulai mempelajari dasar konsep dan cara melihat penerapannya secara lebih terstruktur.

WSL 1 juga dapat menjadi langkah awal bagi yang ingin mengetahui proses menjadi promotor STIFIn. Belum harus memutuskan sekarang.

Balas WSL1 jika ingin kami jelaskan alurnya.
```

Hindari janji pendapatan. Informasi biaya, voucher, margin, sertifikasi, wilayah, dan program promotor harus mengikuti kebijakan resmi terbaru.

## 12. Penamaan iklan agar terbaca di StarSender

Gunakan tautan iklan seperti:

```text
https://stifinmulia.com/ikut-tes-stifin/?utm_source=facebook&utm_medium=paid_social&utm_campaign=tes-bandung&utm_content=video-parenting-01
```

Aturan nama:

- `utm_source`: `facebook`, `instagram`, `youtube`, atau `google`.
- `utm_medium`: `paid_social`, `organic`, `referral`, atau `wa`.
- `utm_campaign`: tujuan + wilayah, misalnya `tes-bandung`.
- `utm_content`: format + tema + nomor, misalnya `video-parenting-01`.

Jangan mengganti pola penamaan di tengah campaign karena laporan akan terpecah.

## 13. Pemeriksaan harian dan mingguan

### Harian

1. Periksa Execution n8n yang gagal.
2. Periksa lead baru Campaign 01.
3. Balas percakapan manusia terlebih dahulu.
4. Pindahkan lead yang sudah memiliki jadwal.
5. Tandai permintaan berhenti.

### Mingguan

Catat jumlah:

- form masuk;
- nomor berhasil menerima welcome message;
- lead membalas;
- jadwal dibuat;
- pembayaran/konfirmasi terjadi;
- tes selesai;
- peserta tertarik WSL 1;
- peserta masuk jalur promotor;
- promotor mulai aktif melakukan tes.

Tujuan optimasi bukan jumlah chat, melainkan peningkatan rasio **lead → tes selesai → WSL 1 → promotor aktif**.

## 14. Troubleshooting

### Form masuk tetapi tidak muncul di n8n

- Pastikan workflow Active.
- Pastikan Coolify memakai `/webhook/stifin-lead`, bukan `/webhook-test/stifin-lead`.
- Pastikan website sudah diredeploy setelah Build Variable diubah.
- Buka Developer Tools browser dan periksa kegagalan CORS/network.

### n8n menerima data tetapi StarSender menolak

- Pastikan Account API Key dipilih pada node HTTP Request.
- Pastikan Campaign ID benar dan bertipe angka.
- Pastikan syntax sama persis dengan campaign.
- Pastikan nomor menjadi `62…`, bukan `08…` dan tidak memakai spasi/tanda baca.

### Lead masuk tetapi welcome message tidak terkirim

- Pastikan `welcome_message` aktif di campaign.
- Pastikan body API mengirim `welcome_message: true`.
- Pastikan device `mulia` tersambung.
- Pastikan nomor tujuan merupakan nomor WhatsApp aktif.

### Lead ganda

- Bandingkan `lead_id` dan nomor.
- Jangan klik submit berulang ketika koneksi lambat.
- Pada tahap lanjutan, tambahkan data store/deduplication di n8n berdasarkan nomor + 24 jam.

## 15. Sumber teknis resmi

- Membuat campaign: https://docs.starsender.online/docs/campaign-api/buat-campaign/
- Tambah anggota campaign: https://docs.starsender.online/docs/campaign-api/tambah-anggota-campaign/
- Pindah anggota campaign: https://docs.starsender.online/docs/campaign-api/pindah-anggota-campaign/
- Kirim pesan: https://docs.starsender.online/docs/message-api/kirim-pesan/
- Cek nomor: https://docs.starsender.online/docs/message-api/cek-nomor/
- Webhook: https://docs.starsender.online/docs/webhook/
- Integrasi n8n: https://docs.starsender.online/docs/n8n/koneksi-n8n/

## 16. Checklist go-live

- [ ] Device `mulia` connected.
- [ ] Empat campaign sudah dibuat.
- [ ] Welcome message Campaign 01 aktif.
- [ ] Campaign ID dicatat.
- [ ] Credential Account API tersimpan di n8n.
- [ ] Workflow JSON sudah diimpor.
- [ ] Campaign ID pada node CONFIG bukan `0`.
- [ ] Node API memakai credential yang benar.
- [ ] Test execution berhasil.
- [ ] Nomor uji menerima welcome message.
- [ ] Workflow n8n Active.
- [ ] Build Variable Coolify sudah diisi.
- [ ] Website sudah diredeploy.
- [ ] Form produksi diuji satu kali.
- [ ] Follow-up otomatis Campaign 01 sudah dijadwalkan.
- [ ] SOP berhenti dan pemindahan campaign dipahami CS.
