export const decisionPaths = [
  {
    id: 'belajar', number: '01', label: 'Saya masih ingin memahami dasarnya',
    title: 'Mulai dengan belajar, tanpa harus langsung tes.',
    text: 'Cocok bila Anda baru mengenal STIFIn, masih menyusun pertanyaan, atau ingin memastikan konsep ini relevan dengan situasi Anda.',
    signs: ['Belum tahu apa yang diperoleh dari tes', 'Masih membandingkan beberapa pendekatan', 'Ingin membaca dengan tenang sebelum bertanya'],
    href: '/artikel/', action: 'Buka pusat pengetahuan',
  },
  {
    id: 'konsultasi', number: '02', label: 'Saya punya kebutuhan yang ingin dibahas',
    title: 'Mulai dengan percakapan singkat bersama tim.',
    text: 'Cocok bila persoalan Anda sudah cukup jelas, tetapi belum tahu apakah langkah terbaiknya tes, membaca, atau program lain.',
    signs: ['Ada pertanyaan tentang anak, keluarga, karier, atau tim', 'Perlu memastikan proses dan biaya', 'Ingin mengecek layanan di kota Anda'],
    href: '/perjalanan/', action: 'Temukan langkah saya',
  },
  {
    id: 'tes', number: '03', label: 'Saya siap mengenali hasil saya',
    title: 'Lanjutkan ke Tes STIFIn dan penjelasan hasil.',
    text: 'Cocok bila Anda siap hadir untuk pemindaian sidik jari, menerima hasil, lalu menghubungkannya dengan satu kebutuhan yang nyata.',
    signs: ['Ingin mengetahui Mesin Kecerdasan dan personaliti genetik', 'Siap membawa pertanyaan yang ingin dibahas', 'Tidak mengharapkan diagnosis atau jaminan hasil hidup'],
    href: '/ikut-tes-stifin/#daftar', action: 'Cari jadwal tes',
  },
  {
    id: 'wsl', number: '04', label: 'Saya sudah tes dan ingin memahami lebih dalam',
    title: 'Bangun fondasi konsep melalui WSL 1.',
    text: 'Cocok bagi peserta tes yang tidak ingin berhenti pada nama hasil dan ingin membaca perbedaan secara lebih utuh.',
    signs: ['Sudah memiliki hasil Tes STIFIn', 'Ingin menerapkan konsep dalam kehidupan', 'Mempertimbangkan jalur promotor pada tahap berikutnya'],
    href: '/ikut-wsl-1/', action: 'Pelajari WSL 1',
  },
  {
    id: 'promotor', number: '05', label: 'Saya ingin belajar sekaligus melayani',
    title: 'Jajaki jalur promotor secara realistis.',
    text: 'Cocok bila Anda siap belajar, melayani peserta, melakukan tindak lanjut, dan membangun aktivitas secara konsisten.',
    signs: ['Tertarik pada kegiatan edukasi dan pelayanan', 'Mencari ruang pertumbuhan penghasilan yang dikerjakan', 'Siap mengikuti proses dan ketentuan jaringan'],
    href: '/gabung-promotor/#daftar', action: 'Cek kesiapan promotor',
  },
] as const;

export const decisionFaqs = [
  { question: 'Apakah saya harus memahami istilah STIFIn sebelum mengikuti tes?', answer: 'Tidak. Anda cukup membawa satu kebutuhan atau pertanyaan nyata. Istilah dasar dan arti hasil dapat dipelajari dalam penjelasan setelah tes serta bacaan lanjutan.' },
  { question: 'Apa yang saya peroleh setelah Tes STIFIn?', answer: 'Anda memperoleh hasil Mesin Kecerdasan dan personaliti genetik dalam kerangka STIFIn, disertai penjelasan dasar. Manfaat berikutnya datang dari cara hasil tersebut dibahas, diuji, dan diterapkan pada situasi nyata.' },
  { question: 'Apakah hasil tes menentukan profesi, pasangan, atau masa depan?', answer: 'Tidak. Hasil dipakai sebagai peta awal, bukan vonis. Keputusan penting tetap perlu mempertimbangkan kemampuan, pengalaman, nilai hidup, kondisi keluarga, peluang, dan bukti nyata.' },
  { question: 'Apakah Tes STIFIn merupakan diagnosis medis atau psikologis?', answer: 'Bukan. Tes STIFIn tidak menggantikan pemeriksaan medis, asesmen psikologis, diagnosis, terapi, atau nasihat profesional lain yang dibutuhkan.' },
  { question: 'Apakah tes ini cocok untuk anak?', answer: 'Dapat dipertimbangkan sebagai bahan dialog tentang belajar dan komunikasi. Orang tua tetap perlu mengamati perkembangan anak, lingkungan, kesehatan, kebiasaan, serta kebutuhan pendidikannya secara menyeluruh.' },
  { question: 'Apakah pasangan atau seluruh keluarga harus ikut tes?', answer: 'Tidak harus. Satu orang dapat mulai belajar dari hasilnya sendiri. Namun, bila beberapa anggota keluarga mengikuti tes, pembahasan perbedaan dapat dilakukan dengan konteks yang lebih lengkap.' },
  { question: 'Apakah saya wajib mengikuti WSL 1 setelah tes?', answer: 'Tidak wajib. WSL 1 merupakan pilihan bagi peserta yang ingin memahami fondasi konsep secara lebih utuh dan tidak berhenti pada penjelasan hasil pribadi.' },
  { question: 'Apa bedanya penjelasan hasil dan WSL 1?', answer: 'Penjelasan hasil berfokus pada hasil pribadi dan pertanyaan awal peserta. WSL 1 membahas bahasa dasar serta hubungan dalam konsep STIFIn secara lebih luas dan terstruktur.' },
  { question: 'Bisakah tes dilakukan sepenuhnya secara daring?', answer: 'Pemindaian sidik jari memerlukan proses langsung dengan perangkat dan petugas yang tersedia. Konsultasi awal serta pengecekan jadwal dapat dimulai melalui WhatsApp.' },
  { question: 'Berapa biaya Tes STIFIn?', answer: 'Biaya, jadwal, lokasi, serta ketentuan dapat berubah. Tim STIFIn Mulia akan mengonfirmasi informasi yang berlaku sebelum Anda memutuskan atau melakukan pembayaran.' },
  { question: 'Bagaimana jika belum ada layanan di kota saya?', answer: 'Sampaikan kota atau kabupaten Anda. Tim akan mengecek jaringan yang tersedia, kemungkinan lokasi terdekat, atau pilihan jadwal yang memungkinkan tanpa menjanjikan ketersediaan sebelum pemeriksaan.' },
  { question: 'Apakah menjadi promotor menjamin penghasilan tertentu?', answer: 'Tidak. Promotor memiliki ruang memperoleh margin dan mengembangkan aktivitas, tetapi hasil bergantung pada kemampuan belajar, melayani, membangun kepercayaan, melakukan pemasaran, serta konsistensi tindak lanjut.' },
] as const;

