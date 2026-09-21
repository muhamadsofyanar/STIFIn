export const proofJourneys = [
  { id: 'diri', label: 'Mengenal diri', question: 'Apakah pengalaman STIFIn relevan untuk memahami diri?', testimonialIds: ['melly-goeslaw', 'asri-welas'], pillarSlug: 'mengenal-stifin', cta: '/ikut-tes-stifin/?tujuan=diri#daftar', ctaLabel: 'Bahas kebutuhan diri saya' },
  { id: 'anak', label: 'Anak & belajar', question: 'Bagaimana STIFIn dipandang dalam pendidikan dan pengasuhan?', testimonialIds: ['seto-mulyadi', 'arief-rachman', 'kris-pujiatni'], pillarSlug: 'anak-belajar-dan-parenting', cta: '/ikut-tes-stifin/?tujuan=anak#daftar', ctaLabel: 'Bahas kebutuhan anak' },
  { id: 'keluarga', label: 'Keluarga', question: 'Apakah pemahaman perbedaan dapat membantu komunikasi keluarga?', testimonialIds: ['ibnu-ririn', 'asri-welas'], pillarSlug: 'pasangan-dan-keluarga', cta: '/ikut-tes-stifin/?tujuan=keluarga#daftar', ctaLabel: 'Mulai percakapan keluarga' },
  { id: 'karier', label: 'Karier & profesi', question: 'Bagaimana peta diri digunakan sebagai bahan menyusun arah profesi?', testimonialIds: ['melly-goeslaw', 'arifia-maulida', 'subiakto'], pillarSlug: 'karier-profesi-dan-finansial', cta: '/ikut-tes-stifin/?tujuan=karier#daftar', ctaLabel: 'Petakan pertanyaan karier' },
  { id: 'tim', label: 'Tim & bisnis', question: 'Apa relevansi STIFIn untuk kerja sama dan dunia profesional?', testimonialIds: ['subiakto', 'kumaidi'], pillarSlug: 'bisnis-tim-dan-kepemimpinan', cta: '/kerja-sama/', ctaLabel: 'Bahas kebutuhan tim' },
  { id: 'promotor', label: 'Promotor', question: 'Apa fondasi kepercayaan sebelum membawa STIFIn kepada orang lain?', testimonialIds: ['subiakto', 'arief-rachman', 'kumaidi'], pillarSlug: 'wsl-1-dan-promotor', cta: '/gabung-promotor/#daftar', ctaLabel: 'Cek kesiapan promotor' },
] as const;

export const evidenceLayers = [
  { level: '01', title: 'Identitas pengelola', text: 'Nama, peran jaringan, foto, kontak, dan halaman penulis ditampilkan agar pembaca mengetahui siapa yang bertanggung jawab.' },
  { level: '02', title: 'Proses yang dapat diperiksa', text: 'Alur tes, apa yang diterima, biaya, WSL 1, jalur promotor, dan tindak lanjut dijelaskan sebelum orang mengambil keputusan.' },
  { level: '03', title: 'Bukti pengalaman jaringan', text: 'Testimoni bernama dan rangkuman respons peserta diberi sumber serta dibedakan dari pengalaman langsung STIFIn Mulia.' },
  { level: '04', title: 'Dokumentasi kegiatan', text: 'Foto pelaksanaan tes, pembelajaran, pendampingan, dan jaringan digunakan sebagai bukti aktivitas—bukan gambar dekoratif.' },
  { level: '05', title: 'Data jaringan terbarui', text: 'Kota, jumlah promotor aktif, dan cabang berasal dari cabang yang berhasil tersinkron saat build tanpa memublikasikan data pribadi.' },
  { level: '06', title: 'Standar editorial', text: 'Konten menyebut sumber pengembangan, peninjau, tanggal, batas penggunaan, dan memisahkan Ruang Tafsir dari klaim konsep STIFIn.' },
] as const;
