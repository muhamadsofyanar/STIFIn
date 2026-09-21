# Panduan Journey Engine v2.0 ke n8n dan StarSender

Journey Engine memakai webhook yang sama dengan tiga funnel lama. Anda tidak perlu mengganti environment jika nilai berikut sudah aktif sebagai **Build Variable** di Coolify:

```env
PUBLIC_STIFIN_LEAD_WEBHOOK_URL=https://n8n.rizqhub.id/webhook/stifin-lead
```

## Cara pengunjung masuk ke campaign

| Jawaban utama | `funnel_stage` | Campaign StarSender |
| --- | --- | --- |
| Diri, anak, keluarga, karier, atau tim/bisnis | `tes` | `01 - LEAD TES STIFIN` |
| Menjadi promotor | `promotor` | `05 - CALON PROMOTOR` |

Website tetap memakai syntax yang sudah dikenal workflow:

- Tes: `TES#Nama#Kota#Kebutuhan#Jumlah`
- Promotor: `PROMOTOR#Nama#Kota#Profesi#StatusTes#StatusWSL`

Pada jalur promotor, kolom yang belum ditanyakan di Journey Engine dikirim sebagai `Belum diisi` atau `Belum dikonfirmasi`. Tim dapat melengkapinya dalam percakapan WhatsApp.

## Data segmentasi tambahan

Payload v2.0 menambahkan:

| Field | Contoh | Kegunaan |
| --- | --- | --- |
| `journey_id` | `anak` | Jalur kebutuhan utama |
| `journey_label` | `Anak dan belajar` | Nama yang mudah dibaca tim |
| `journey_tag` | `journey-anak` | Tag segmentasi |
| `lead_temperature` | `Siap ditindaklanjuti` | Prioritas respons |
| `audience` | `anak` | Orang yang ingin dibantu |
| `readiness` | `jadwal` | Bentuk langkah yang diminta |
| `timeframe` | `7-hari` | Waktu mulai yang diinginkan |
| `answers_summary` | ringkasan empat jawaban | Konteks cepat untuk CS |
| `landing_variant` | `personalized-journey-v2` | Pembeda sumber form |

Workflow yang ada tetap kompatibel karena `funnel_stage`, `name`, `phone`, `city`, `need`, dan `consent` tidak berubah. Field tambahan terlihat pada input/execution n8n dan dapat dipakai pada pengembangan CRM berikutnya.

## Uji sebelum deploy

Gunakan Test URL n8n:

```bash
curl -X POST "URL-TEST-N8N" \
  -H "Content-Type: application/json" \
  -d '{
    "funnel_stage":"tes",
    "name":"Uji Journey",
    "phone":"081333362649",
    "city":"Bandung",
    "need":"Anak dan belajar",
    "participant_count":"1",
    "journey_id":"anak",
    "journey_tag":"journey-anak",
    "lead_temperature":"Siap berkonsultasi",
    "audience":"anak",
    "readiness":"konsultasi",
    "timeframe":"7-hari",
    "consent":true
  }'
```

Pastikan:

1. execution n8n berhasil;
2. nomor masuk ke campaign `01 - LEAD TES STIFIN`;
3. welcome message terkirim;
4. halaman `/terima-kasih-perjalanan/` membuka pesan WhatsApp berisi kebutuhan, kesiapan, dan waktu mulai;
5. jalur promotor masuk ke campaign `05 - CALON PROMOTOR`.

## Prioritas respons tim

| Nilai `lead_temperature` | SLA yang disarankan |
| --- | --- |
| `Siap ditindaklanjuti` | Hubungi secepatnya pada jam layanan |
| `Siap berkonsultasi` | Hubungi pada hari yang sama |
| `Mulai dengan belajar` | Kirim bacaan relevan dan follow-up ringan |

Jangan menganggap suhu lead sebagai kepastian membeli. Gunakan sebagai urutan pelayanan agar kebutuhan yang mendesak tidak terlambat ditanggapi.

