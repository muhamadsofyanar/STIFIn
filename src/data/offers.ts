export type OfferId = 'tes-individu' | 'tes-keluarga' | 'tes-kelompok' | 'wsl-1' | 'promotor';

export type Offer = {
  id: OfferId;
  label: string;
  kicker: string;
  promise: string;
  fit: string;
  includes: string[];
  outcome: string;
  detailHref: string;
  detailLabel: string;
  stage: 'tes' | 'wsl1' | 'promotor';
};

export const offers: Offer[] = [
  {
    id: 'tes-individu',
    label: 'Tes STIFIn Individual',
    kicker: 'Untuk mengenal diri',
    promise: 'Mulai dari satu hasil yang dijelaskan dalam konteks belajar, kerja, relasi, atau arah pengembangan diri.',
    fit: 'Cocok bagi Anda yang belum pernah tes dan ingin memperoleh peta awal sebelum menyusun langkah berikutnya.',
    includes: ['Koordinasi jadwal dan lokasi', 'Pelaksanaan tes secara langsung', 'Hasil dan penjelasan dasar', 'Arah belajar lanjutan yang relevan'],
    outcome: 'Anda pulang dengan bahasa awal untuk memahami kecenderungan diri dan pertanyaan yang lebih terarah untuk didalami.',
    detailHref: '/tes-stifin/',
    detailLabel: 'Pelajari proses tes',
    stage: 'tes',
  },
  {
    id: 'tes-keluarga',
    label: 'Tes Anak & Keluarga',
    kicker: 'Untuk belajar dan komunikasi',
    promise: 'Membantu orang tua atau pasangan memulai percakapan dari perbedaan pola, bukan dari penilaian siapa yang paling benar.',
    fit: 'Cocok untuk orang tua, pasangan, atau keluarga yang ingin memahami cara belajar dan cara berkomunikasi dengan lebih sadar.',
    includes: ['Pemetaan kebutuhan anggota keluarga', 'Koordinasi tes sesuai jumlah peserta', 'Penjelasan hasil dalam konteks keluarga', 'Rekomendasi bacaan dan langkah praktik'],
    outcome: 'Keluarga memperoleh titik awal untuk mencoba pendekatan komunikasi atau belajar yang lebih sesuai dan dapat dievaluasi.',
    detailHref: '/panduan/anak-belajar-dan-parenting/',
    detailLabel: 'Lihat panduan keluarga',
    stage: 'tes',
  },
  {
    id: 'tes-kelompok',
    label: 'Program Kelompok & Lembaga',
    kicker: 'Untuk sekolah, komunitas, dan tim',
    promise: 'Rancangan kegiatan disusun dari tujuan lembaga, jumlah peserta, lokasi, waktu, dan bentuk pembahasan yang dibutuhkan.',
    fit: 'Cocok untuk sekolah, komunitas, organisasi, atau perusahaan yang ingin mengadakan tes atau sesi pengenalan secara terkoordinasi.',
    includes: ['Diskusi kebutuhan bersama PIC', 'Rancangan alur kegiatan', 'Koordinasi peserta, lokasi, dan jadwal', 'Pilihan tindak lanjut setelah kegiatan'],
    outcome: 'PIC menerima alur yang lebih jelas sebelum menyepakati pelaksanaan, tanpa harus menebak format program sendiri.',
    detailHref: '/kerja-sama/',
    detailLabel: 'Pelajari program lembaga',
    stage: 'tes',
  },
  {
    id: 'wsl-1',
    label: 'Pembelajaran WSL 1',
    kicker: 'Untuk mendalami setelah tes',
    promise: 'Membantu peserta bergerak dari sekadar mengetahui hasil menuju pemahaman dasar tentang perbedaan pola dalam konsep STIFIn.',
    fit: 'Cocok bagi yang sudah tes dan ingin memakai bahasa STIFIn secara lebih utuh dalam keluarga, pekerjaan, atau pelayanan.',
    includes: ['Konfirmasi kesiapan peserta', 'Informasi jadwal pembelajaran', 'Fondasi membaca perbedaan pola', 'Arah pengembangan setelah WSL 1'],
    outcome: 'Peserta mempunyai kerangka belajar yang lebih luas sehingga hasil tes tidak berhenti sebagai label.',
    detailHref: '/wsl-1/',
    detailLabel: 'Kenali WSL 1',
    stage: 'wsl1',
  },
  {
    id: 'promotor',
    label: 'Jalur Menjadi Promotor',
    kicker: 'Untuk belajar sambil melayani',
    promise: 'Mengenal pekerjaan nyata promotor, proses pembelajaran, sistem pelayanan, serta cara membangun aktivitas secara bertahap.',
    fit: 'Cocok bagi yang serius ingin membantu lebih banyak orang mengenal STIFIn dan siap mengikuti proses resmi yang berlaku.',
    includes: ['Pemeriksaan posisi dan kesiapan awal', 'Penjelasan peran serta alur belajar', 'Gambaran aktivitas dan pendampingan', 'Arah pendaftaran sesuai ketentuan resmi'],
    outcome: 'Anda memahami komitmen, proses, peluang, dan langkah masuk sebelum membuat keputusan.',
    detailHref: '/jadi-promotor/',
    detailLabel: 'Lihat jalur promotor',
    stage: 'promotor',
  },
];

export const offerById = Object.fromEntries(offers.map((offer) => [offer.id, offer])) as Record<OfferId, Offer>;
