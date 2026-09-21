export type Pillar = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  keyAnswer: string;
  audience: string;
  promise: string;
  sections: { title: string; paragraphs: string[] }[];
  essentials: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  articleIds: string[];
  sourceNote: string;
  cta: { title: string; text: string; href: string; label: string; stage: 'awareness' | 'tes' | 'wsl1' | 'promotor'; message: string };
};

export const pillars: Pillar[] = [
  {
    slug: 'mengenal-stifin',
    eyebrow: 'Fondasi konsep',
    title: 'Panduan Mengenal STIFIn Tanpa Terjebak Label',
    description: 'Pahami lima Mesin Kecerdasan, sembilan personaliti genetik, fungsi peta diri, dan cara menggunakan hasil secara dewasa.',
    keyAnswer: 'STIFIn memberi bahasa untuk membaca kecenderungan dominan seseorang. Nilainya muncul ketika peta itu dipakai untuk menguji cara belajar, berkomunikasi, bekerja, dan bertumbuh—bukan untuk membatasi kemampuan atau meramalkan nasib.',
    audience: 'orang yang baru mengenal STIFIn, calon peserta tes, keluarga, pendidik, dan pemimpin tim',
    promise: 'Selesai membaca, Anda dapat membedakan peta diri dari label serta mengetahui langkah belajar yang masuk akal.',
    sections: [
      { title: 'Mengapa manusia memerlukan bahasa untuk memahami pola dirinya', paragraphs: [
        'Banyak orang mengenali akibat, tetapi belum mengenali polanya. Mereka tahu suatu pekerjaan cepat melelahkan, sebuah cara belajar terasa berat, atau pembicaraan tertentu mudah memicu konflik. Tanpa bahasa yang cukup jelas, pengalaman itu sering dijelaskan sebagai kekurangan: malas, tidak berbakat, terlalu sensitif, atau sulit diatur.',
        'STIFIn menawarkan peta awal berupa lima Mesin Kecerdasan—Sensing, Thinking, Intuiting, Feeling, dan Insting. Peta ini membantu menyusun hipotesis: pintu mana yang lebih mudah dipakai untuk menerima informasi, mengolah pengalaman, berkomunikasi, dan memberi kontribusi. Hipotesis tersebut tetap perlu dipertemukan dengan perilaku nyata, pengalaman, kompetensi, nilai, dan keadaan hidup.'
      ]},
      { title: 'Apa yang sebenarnya dibaca dalam konsep STIFIn', paragraphs: [
        'Mesin Kecerdasan menjelaskan kecenderungan dominan, sedangkan kemudi introvert atau extrovert melengkapi empat mesin tertentu hingga terbentuk sembilan personaliti genetik. Istilah introvert dan extrovert di sini dipakai dalam kerangka drive STIFIn; ia tidak sama dengan penilaian sehari-hari tentang pendiam atau suka bergaul.',
        'Dominan tidak berarti satu-satunya. Seorang Sensing tetap dapat membuat strategi, Thinking tetap memiliki empati, Intuiting tetap mampu menjalankan prosedur, Feeling tetap dapat bekerja dengan angka, dan Insting tetap dapat membangun spesialisasi. Peta menunjukkan jalan masuk yang mungkin lebih alami, bukan pagar yang menutup jalan lain.'
      ]},
      { title: 'Bagaimana menggunakan peta diri agar benar-benar berguna', paragraphs: [
        'Mulailah dari satu situasi yang dapat diamati. Pilih tantangan belajar, komunikasi, pekerjaan, atau kebiasaan. Gunakan hasil untuk merancang satu perubahan kecil, jalankan dalam waktu tertentu, lalu periksa dampaknya. Cara ini membuat pemahaman bergerak dari kata-kata menuju bukti dalam kehidupan.',
        'Hindari memakai tipe untuk memenangkan perdebatan, membenarkan perilaku yang merugikan, atau mengambil keputusan besar seorang diri. Untuk keputusan pendidikan, profesi, kesehatan, relasi, dan bisnis, gabungkan peta STIFIn dengan data, keahlian yang relevan, pertimbangan risiko, serta dialog dengan pihak yang bertanggung jawab.'
      ]},
    ],
    essentials: [
      { title: 'Peta, bukan kotak', text: 'Gunakan hasil untuk membuka pilihan pendekatan, bukan mengurangi kemungkinan masa depan.' },
      { title: 'Hipotesis, lalu uji', text: 'Periksa kecocokan melalui pengamatan dan perubahan yang dapat dievaluasi.' },
      { title: 'Belajar bertahap', text: 'Tes adalah awal; penjelasan hasil dan WSL 1 membantu membaca hubungan antarkonsep.' },
    ],
    faq: [
      { question: 'Apakah tipe STIFIn menentukan seluruh kepribadian?', answer: 'Tidak. Hasil digunakan untuk membaca kecenderungan dominan dalam kerangka STIFIn. Perilaku seseorang juga dipengaruhi pengalaman, lingkungan, nilai, keterampilan, peran, dan keputusan.' },
      { question: 'Apakah satu tipe lebih baik daripada tipe lain?', answer: 'Tidak. Setiap Mesin Kecerdasan memiliki jalan kekuatan, tantangan, dan kontribusi yang berbeda. Kualitas penerapannya lebih penting daripada nama tipenya.' },
      { question: 'Apa langkah setelah mengenal lima Mesin Kecerdasan?', answer: 'Jika belum tes, pahami proses dan tentukan pertanyaan yang ingin dibahas. Jika sudah tes, ikuti penjelasan hasil, coba satu penerapan, lalu pertimbangkan WSL 1 untuk fondasi yang lebih utuh.' },
    ],
    articleIds: ['lima-mesin-kecerdasan-sebagai-peta-awal', 'memahami-tes-stifin-secara-proporsional', 'rencana-30-hari-setelah-tes'],
    sourceNote: 'Dikembangkan dari Buku STIFIn Konsep PALUGADA dan materi pembelajaran STIFIn; ditulis ulang, diberi konteks, dan ditinjau oleh STIFIn Mulia.',
    cta: { title: 'Ingin mengenali pola diri melalui proses yang jelas?', text: 'Pelajari apa yang dilakukan saat tes, apa yang diterima, dan pertanyaan apa yang sebaiknya Anda bawa.', href: '/tes-stifin/', label: 'Pelajari Tes STIFIn', stage: 'tes', message: 'Assalamu’alaikum, saya membaca panduan mengenal STIFIn dan ingin memahami proses tes. Kota: ... Kebutuhan saya: ...' },
  },
  {
    slug: 'tes-stifin-dan-hasil',
    eyebrow: 'Dari rasa ingin tahu ke penerapan',
    title: 'Panduan Tes STIFIn dan Membaca Hasilnya',
    description: 'Ketahui proses tes, apa yang dibawa pulang, cara menyiapkan pertanyaan, serta langkah setelah hasil dijelaskan.',
    keyAnswer: 'Tes STIFIn sebaiknya dipandang sebagai awal percakapan tentang pola diri. Peserta memperoleh hasil dalam sistem STIFIn, membutuhkan penjelasan yang relevan, lalu memilih satu penerapan yang dapat diamati sebelum menarik kesimpulan besar.',
    audience: 'calon peserta, orang tua, pasangan, profesional, dan peserta yang baru menerima hasil',
    promise: 'Anda dapat datang dengan ekspektasi yang jelas dan pulang dengan langkah yang dapat dijalankan.',
    sections: [
      { title: 'Mengapa tujuan tes perlu ditentukan sebelum memilih jadwal', paragraphs: [
        'Orang dapat mengikuti tes karena alasan yang sangat berbeda: memahami cara belajar anak, memperbaiki komunikasi pasangan, mencari arah profesi, atau mengenali pola kerja. Tujuan yang jelas membuat sesi penjelasan lebih relevan karena promotor mengetahui konteks yang perlu dibahas.',
        'Sebelum mendaftar, tulis satu pertanyaan nyata. Alih-alih hanya bertanya “saya tipe apa?”, gunakan pertanyaan seperti “mengapa saya sulit konsisten belajar?” atau “bagaimana kami dapat membicarakan keputusan tanpa saling menyerang?”. Pertanyaan yang lebih konkret lebih mudah diterjemahkan menjadi tindakan.'
      ]},
      { title: 'Apa yang terjadi dan apa yang seharusnya Anda terima', paragraphs: [
        'Proses layanan meliputi konfirmasi peserta dan jadwal, pemindaian sidik jari sesuai sistem STIFIn, keluarnya hasil, serta penjelasan. Jadwal, lokasi, biaya, dan ketentuan terbaru perlu dikonfirmasi sebelum pelaksanaan karena dapat berbeda menurut keadaan layanan.',
        'Nilai layanan tidak berhenti pada nama personaliti genetik. Anda seharusnya memahami arti hasil dalam bahasa yang dapat dihubungkan dengan kebutuhan, memperoleh ruang bertanya, dan membawa pulang satu atau dua percobaan yang realistis. Mintalah penjelasan ulang jika istilah terasa terlalu abstrak.'
      ]},
      { title: 'Bagaimana mengubah hasil menjadi pembelajaran', paragraphs: [
        'Pilih satu konteks selama dua sampai empat minggu. Ubah satu unsur—misalnya cara membuat jadwal, bentuk instruksi, atau pintu masuk percakapan—kemudian catat responsnya. Jangan mengubah terlalu banyak hal sekaligus karena Anda akan sulit mengetahui perubahan mana yang membantu.',
        'Setelah memiliki pengalaman awal, WSL 1 dapat membantu menghubungkan Mesin Kecerdasan, personaliti genetik, perbedaan antartipe, dan cara penerapan. Urutannya menjadi lebih sehat: mengenal hasil, menguji dalam kehidupan, memperdalam fondasi, lalu memperluas penerapan.'
      ]},
    ],
    essentials: [
      { title: 'Bawa pertanyaan nyata', text: 'Konteks membuat penjelasan lebih dekat dengan kebutuhan Anda.' },
      { title: 'Minta langkah kecil', text: 'Hasil lebih bernilai ketika diterjemahkan menjadi perilaku yang dapat dicoba.' },
      { title: 'Jangan berhenti pada label', text: 'Gunakan penjelasan dan WSL 1 untuk memahami hubungan konsep secara utuh.' },
    ],
    faq: [
      { question: 'Apakah Tes STIFIn merupakan diagnosis psikologis atau medis?', answer: 'Bukan. Situs ini tidak menempatkan Tes STIFIn sebagai diagnosis medis atau psikologis. Kebutuhan klinis harus dibawa kepada tenaga profesional yang sesuai.' },
      { question: 'Apakah saya harus menyiapkan sesuatu sebelum tes?', answer: 'Siapkan data peserta yang diminta penyelenggara dan satu sampai tiga pertanyaan yang ingin dibahas. Konfirmasikan jadwal, lokasi, biaya, dan teknis terbaru melalui tim.' },
      { question: 'Apa yang dilakukan bila hasil terasa belum sesuai?', answer: 'Jangan buru-buru menolak atau memaksakan kecocokan. Mintalah penjelasan konteks, bedakan kecenderungan dari kebiasaan, dan periksa melalui pengalaman nyata.' },
    ],
    articleIds: ['sebelum-tes-stifin-pertanyaan-yang-perlu-dijawab', 'apa-yang-dibawa-pulang-setelah-tes-stifin', 'dari-hasil-tes-menuju-wsl-1'],
    sourceNote: 'Dikembangkan dari alur layanan STIFIn Mulia, Buku STIFIn Konsep PALUGADA, dan materi pembelajaran STIFIn.',
    cta: { title: 'Cari jadwal tes yang dapat Anda konfirmasi langsung', text: 'Sampaikan kota, jumlah peserta, dan kebutuhan utama. Tim akan membantu memeriksa pilihan layanan.', href: '/ikut-tes-stifin/#daftar', label: 'Cari Jadwal Tes', stage: 'tes', message: 'Assalamu’alaikum, saya ingin mencari jadwal Tes STIFIn. Kota: ... Jumlah peserta: ... Kebutuhan utama: ...' },
  },
  {
    slug: 'anak-belajar-dan-parenting',
    eyebrow: 'Anak dan pendidikan',
    title: 'Panduan STIFIn untuk Belajar dan Parenting',
    description: 'Gunakan pemahaman pola anak untuk memperkaya pengamatan, menyesuaikan pintu belajar, dan membangun pengasuhan tanpa memberi cap.',
    keyAnswer: 'Peta anak berguna ketika membantu orang tua dan pendidik mengamati kebutuhan, memilih eksperimen belajar, serta menyeimbangkan kehangatan dengan tuntutan. Ia tidak menggantikan tahap perkembangan, kondisi kesehatan, kompetensi guru, atau suara anak.',
    audience: 'orang tua, wali, guru, tutor, dan pendamping belajar',
    promise: 'Anda memperoleh cara sederhana untuk mengubah pengamatan menjadi eksperimen belajar dan pengasuhan.',
    sections: [
      { title: 'Mengapa label sering menutup informasi yang sebenarnya dibutuhkan', paragraphs: [
        'Ketika anak sulit memulai tugas atau cepat kehilangan perhatian, orang dewasa mudah menyebutnya malas. Label memperpendek percakapan, tetapi tidak menjelaskan apakah instruksi terlalu panjang, tujuan belum dipahami, lingkungan mengganggu, tugas terlalu sulit, atau metode penyampaiannya tidak masuk melalui pintu yang mudah diterima anak.',
        'Materi STIFIn Learning menempatkan belajar sebagai proses bertumbuh. Kejelasan, keterlibatan dalam tugas, kesempatan berpartisipasi, metode, dan suasana belajar sama-sama memengaruhi hasil. Peta STIFIn dapat membantu memilih percobaan awal, tetapi pengamatan tetap menjadi dasar evaluasi.'
      ]},
      { title: 'Apa yang dapat disesuaikan tanpa mengubah tujuan belajar', paragraphs: [
        'Satu materi dapat dibuka lewat contoh konkret dan pengulangan, struktur dan alasan, gambaran besar dan kemungkinan, percakapan dan hubungan, atau pengalaman singkat yang dinamis. Tujuan serta standar tidak harus diturunkan; yang disesuaikan adalah jalan masuk, bentuk latihan, ritme, dan umpan balik.',
        'Dalam pengasuhan, kebutuhan anak bertemu dengan pola orang tua. Materi parenting membahas responsivitas dan tuntutan: anak membutuhkan hubungan yang hangat sekaligus batas yang membantunya bertumbuh. Memahami perbedaan seharusnya membuat orang tua lebih lentur dalam cara menyampaikan, bukan kehilangan nilai dan tanggung jawab.'
      ]},
      { title: 'Bagaimana menjalankan eksperimen dua minggu', paragraphs: [
        'Pilih satu masalah, misalnya sulit memulai belajar. Catat keadaan sebelum belajar, cara instruksi diberikan, lama keterlibatan, dan hasil yang selesai. Ubah satu variabel selama dua minggu—contohnya gunakan contoh konkret lebih dulu atau pecah tugas menjadi urutan yang terlihat—lalu bandingkan dengan catatan awal.',
        'Libatkan anak sesuai usia. Tanyakan bagian mana yang membantu dan mana yang membuatnya tersendat. Jika kesulitan menetap, sangat mengganggu fungsi, atau menyangkut kondisi perkembangan dan kesehatan, cari bantuan profesional yang relevan. Peta belajar tidak dimaksudkan menggantikan asesmen tersebut.'
      ]},
    ],
    essentials: [
      { title: 'Amati sebelum mengoreksi', text: 'Cari pola keadaan, instruksi, respons, dan hasil sebelum memberi kesimpulan.' },
      { title: 'Satu tujuan, beberapa pintu', text: 'Sesuaikan cara masuk tanpa menghilangkan tujuan dan disiplin.' },
      { title: 'Dengarkan anak', text: 'Pengasuhan yang tepat melibatkan hubungan, tahap perkembangan, dan suara anak.' },
    ],
    faq: [
      { question: 'Apakah tipe anak menentukan gaya belajar tunggal?', answer: 'Tidak. Tipe dapat memberi ide pintu masuk, tetapi strategi belajar perlu disesuaikan dengan materi, tujuan, usia, kondisi, dan bukti hasil.' },
      { question: 'Bolehkah hasil dipakai untuk memilih sekolah atau jurusan?', answer: 'Gunakan sebagai salah satu bahan percakapan, bukan penentu tunggal. Pertimbangkan minat, kemampuan, rekam belajar, kesiapan, kondisi keluarga, dan informasi sekolah atau jurusan.' },
      { question: 'Kapan orang tua perlu mencari bantuan profesional?', answer: 'Jika kesulitan menetap, menimbulkan tekanan berat, mengganggu fungsi sehari-hari, atau terkait dugaan kondisi perkembangan, kesehatan, dan psikologis, berkonsultasilah kepada profesional yang sesuai.' },
    ],
    articleIds: ['anak-sulit-belajar-atau-cara-belajarnya-belum-tepat', 'strategi-belajar-lima-pintu', 'parenting-amati-sebelum-mengoreksi', 'mendampingi-anak-tanpa-memberi-label'],
    sourceNote: 'Dikembangkan dari Workbook STIFIn Learning, Workbook STIFIn Parenting, dan artikel penerapan STIFIn Mulia.',
    cta: { title: 'Bawa satu pertanyaan nyata tentang anak Anda', text: 'Ceritakan usia, tantangan belajar atau komunikasi, dan kota. Tim membantu menjelaskan langkah tes yang relevan.', href: '/ikut-tes-stifin/#daftar', label: 'Bahas Kebutuhan Anak', stage: 'tes', message: 'Assalamu’alaikum, saya ingin memahami kebutuhan anak melalui STIFIn. Usia: ... Tantangan yang kami hadapi: ... Kota: ...' },
  },
  {
    slug: 'pasangan-dan-keluarga',
    eyebrow: 'Relasi yang lebih mudah dipahami',
    title: 'Panduan Komunikasi Pasangan dan Keluarga dengan STIFIn',
    description: 'Terjemahkan perbedaan pola menjadi permintaan yang jelas, kesepakatan yang dapat dijalankan, dan bahasa kasih yang lebih mudah diterima.',
    keyAnswer: 'Pemahaman pola tidak menghapus konflik, tetapi dapat membantu keluarga membedakan niat dari cara penyampaian. Hasil yang sehat terlihat pada percakapan yang lebih aman, tanggung jawab yang jelas, dan kesepakatan yang dapat dievaluasi.',
    audience: 'pasangan, calon pasangan dewasa, orang tua, dan anggota keluarga',
    promise: 'Anda dapat menggunakan perbedaan sebagai informasi untuk memperbaiki percakapan, bukan sebagai senjata.',
    sections: [
      { title: 'Mengapa niat baik sering tidak sampai sebagai kebaikan', paragraphs: [
        'Seseorang menunjukkan perhatian dengan membantu pekerjaan; pasangannya justru menunggu waktu untuk didengar. Satu pihak menjelaskan lewat data; pihak lain membutuhkan pengakuan terhadap perasaannya terlebih dahulu. Konflik membesar ketika masing-masing menilai cara sendiri sebagai satu-satunya bukti kepedulian.',
        'Bahasa STIFIn dapat membantu melihat perbedaan pintu komunikasi. Namun nama tipe tidak menyelesaikan pembicaraan. Ia baru berguna ketika diterjemahkan menjadi tindakan: kapan berbicara, seberapa rinci informasi diberikan, apa yang diminta, dan bagaimana kedua pihak memastikan pemahaman.'
      ]},
      { title: 'Apa yang perlu tetap sama dan apa yang boleh disesuaikan', paragraphs: [
        'Nilai hubungan, keselamatan, kejujuran, dan tanggung jawab tidak berubah mengikuti tipe. Yang dapat disesuaikan adalah urutan pembicaraan, contoh yang digunakan, waktu untuk memproses, cara menunjukkan perhatian, dan bentuk pengingat. Keluwesan cara tidak berarti menghapus batas.',
        'Hindari kalimat yang memakai hasil untuk menutup dialog, seperti “memang tipe saya begini”. Ubah menjadi pengakuan dan permintaan: “Saya cenderung perlu waktu menyusun pikiran; bolehkah kita melanjutkan setelah makan malam, lalu membuat keputusan malam ini?” Kalimat itu tetap memegang tanggung jawab.'
      ]},
      { title: 'Bagaimana membuat percakapan yang dapat diperbaiki', paragraphs: [
        'Mulailah dengan satu kejadian, bukan kumpulan kesalahan. Sebutkan dampaknya tanpa menyerang karakter, dengarkan versi pasangan, lalu rumuskan satu permintaan yang dapat diamati. Tentukan kapan kesepakatan akan diperiksa kembali. Struktur sederhana ini mencegah konsep berubah menjadi penilaian sepihak.',
        'Untuk persoalan kekerasan, ancaman, kontrol, kecanduan, atau tekanan psikologis berat, keselamatan dan bantuan profesional harus didahulukan. Pengetahuan tipe bukan alasan untuk menoleransi perilaku tidak aman dan bukan pengganti konseling atau layanan yang dibutuhkan.'
      ]},
    ],
    essentials: [
      { title: 'Jelaskan kejadian', text: 'Bahas perilaku dan dampak, bukan menyerang identitas pasangan.' },
      { title: 'Terjemahkan kebutuhan', text: 'Ubah “pahami saya” menjadi permintaan yang dapat dilakukan.' },
      { title: 'Jaga keselamatan', text: 'Tipe tidak pernah membenarkan kekerasan atau perilaku merugikan.' },
    ],
    faq: [
      { question: 'Apakah ada pasangan tipe yang pasti cocok atau tidak cocok?', answer: 'Tidak ada kecocokan hubungan yang seharusnya diputuskan hanya dari tipe. Nilai, kematangan, komunikasi, tanggung jawab, dan kesediaan bertumbuh sangat menentukan.' },
      { question: 'Bisakah hasil tes mengurangi konflik?', answer: 'Hasil dapat memberi bahasa untuk memahami perbedaan, tetapi pengurangan konflik membutuhkan keterampilan mendengar, permintaan yang jelas, batas sehat, dan kebiasaan memperbaiki hubungan.' },
      { question: 'Kapan konsep tidak cukup digunakan sendiri?', answer: 'Saat ada masalah keselamatan, kekerasan, tekanan berat, atau persoalan hukum dan kesehatan, prioritaskan bantuan profesional serta layanan yang tepat.' },
    ],
    articleIds: ['memahami-pasangan-tanpa-saling-melabeli', 'chemistry-keluarga-bahasa-kasih', 'parenting-amati-sebelum-mengoreksi'],
    sourceNote: 'Dikembangkan dari Workbook STIFIn Couple, materi parenting, dan panduan komunikasi STIFIn Mulia.',
    cta: { title: 'Mulai dari pertanyaan keluarga yang paling penting', text: 'Ceritakan konteks singkat tanpa membuka data sensitif. Tim membantu memilih langkah pengenalan yang relevan.', href: '/ikut-tes-stifin/#daftar', label: 'Mulai Percakapan', stage: 'tes', message: 'Assalamu’alaikum, saya ingin membahas kebutuhan pasangan/keluarga melalui STIFIn. Situasi singkat: ... Kota: ...' },
  },
  {
    slug: 'karier-profesi-dan-finansial',
    eyebrow: 'Arah kerja dan penghidupan',
    title: 'Panduan Karier, Profesi, dan Finansial Berbasis Peta Diri',
    description: 'Hubungkan kecenderungan diri dengan kompetensi, wadah kontribusi, peluang pasar, dan sistem keuangan tanpa janji hasil instan.',
    keyAnswer: 'Peta diri dapat membantu memilih cara bertumbuh dan peran yang ingin diuji. Arah profesi yang sehat tetap dibangun dari kompetensi, nilai, kebutuhan pasar, pengalaman nyata, dan pengelolaan keuangan yang disiplin.',
    audience: 'pelajar, mahasiswa, profesional, pencari kerja, pengusaha, dan keluarga',
    promise: 'Anda memperoleh kerangka untuk menguji arah karier tanpa menjadikan tipe sebagai vonis.',
    sections: [
      { title: 'Mengapa rasa cocok saja belum cukup', paragraphs: [
        'Sebuah profesi bukan hanya nama pekerjaan yang terasa menarik. Ia adalah wadah kontribusi yang menuntut penguasaan, ketekunan, etika, dan kemampuan memberi nilai. Materi profesi menyebut perjalanan ini sebagai perjuangan; kecenderungan alami membantu memilih jalan masuk, tetapi keahlian tetap harus ditempa.',
        'Kesalahan umum terjadi ketika seseorang langsung mencocokkan tipe dengan satu daftar pekerjaan. Padahal satu profesi memiliki banyak fungsi, dan satu kekuatan dapat menemukan wadah pada beragam bidang. Pertanyaan yang lebih berguna adalah: masalah apa yang ingin saya bantu selesaikan, kemampuan apa yang sudah terbukti, dan lingkungan kerja seperti apa yang membuat saya mampu memberi hasil terbaik?'
      ]},
      { title: 'Apa yang perlu dipertemukan dalam keputusan profesi', paragraphs: [
        'Gunakan lima unsur: kecenderungan, kompetensi, nilai hidup, kesempatan, dan tahap kehidupan. Kecenderungan memberi hipotesis cara bekerja. Kompetensi menunjukkan apa yang sudah mampu dilakukan. Nilai menjaga arah. Kesempatan menghubungkan diri dengan kebutuhan nyata. Tahap kehidupan menentukan risiko yang masuk akal.',
        'Sisi finansial tidak berhenti pada mencari pemasukan. Penghasilan perlu diikuti sistem untuk mencatat, membelanjakan, melindungi, dan menumbuhkan sumber daya secara bertanggung jawab. Peta diri dapat membantu merancang kebiasaan yang lebih mudah dijalankan, tetapi angka dan disiplin tetap menjadi bukti.'
      ]},
      { title: 'Bagaimana menguji arah sebelum mengambil keputusan besar', paragraphs: [
        'Lakukan wawancara dengan praktisi, ambil proyek kecil, ikuti kelas pengantar, atau bantu pekerjaan nyata dalam waktu terbatas. Tetapkan apa yang ingin dipelajari dan bukti apa yang akan diperiksa. Eksperimen murah memberi informasi lebih baik daripada berbulan-bulan membayangkan sebuah profesi.',
        'Setelah mencoba, evaluasi tiga hal: kualitas hasil, energi yang dibutuhkan, dan nilai yang diterima orang lain. Jika hasil belum baik tetapi prosesnya bermakna, mungkin kompetensi perlu dibangun. Jika pasar tidak membutuhkan hasilnya, wadah atau penawarannya perlu diubah. Keputusan matang lahir dari pertemuan peta dan bukti.'
      ]},
    ],
    essentials: [
      { title: 'Profesi adalah wadah', text: 'Nama tipe tidak sama dengan nama pekerjaan; cari ruang kontribusi yang bisa dikuasai.' },
      { title: 'Uji sebelum pindah', text: 'Gunakan proyek kecil dan percakapan dengan praktisi untuk mengurangi tebakan.' },
      { title: 'Bangun sistem uang', text: 'Potensi pendapatan memerlukan pencatatan, disiplin, dan keputusan finansial yang sehat.' },
    ],
    faq: [
      { question: 'Apakah STIFIn dapat menentukan profesi terbaik saya?', answer: 'STIFIn dapat menjadi salah satu peta untuk mengeksplorasi kecenderungan, tetapi tidak seharusnya menjadi penentu tunggal. Kompetensi, nilai, peluang, dan bukti pengalaman tetap diperlukan.' },
      { question: 'Apakah mengikuti jalur yang cocok menjamin penghasilan?', answer: 'Tidak. Penghasilan dipengaruhi nilai yang diberikan, kemampuan, permintaan, model kerja atau usaha, kondisi ekonomi, jejaring, dan pengelolaan.' },
      { question: 'Apa eksperimen karier yang paling sederhana?', answer: 'Pilih satu proyek kecil dengan penerima manfaat nyata, tenggat jelas, dan hasil yang dapat dinilai. Setelah selesai, minta umpan balik dan catat bagian yang perlu dilatih.' },
    ],
    articleIds: ['memilih-profesi-tanpa-menjadikan-hasil-tes-vonis', 'profesi-wadah-kontribusi', 'finansial-peta-diri-dan-sistem'],
    sourceNote: 'Dikembangkan dari Workbook STIFIn Profession, Workbook STIFIn Finansial, dan panduan penerapan STIFIn Mulia.',
    cta: { title: 'Perdalam peta sebelum mengambil keputusan besar', text: 'Jika sudah mengenal hasil tes, WSL 1 membantu memahami fondasi dan hubungan antarkonsep dengan lebih tertib.', href: '/ikut-wsl-1/#daftar', label: 'Pelajari Jalur WSL 1', stage: 'wsl1', message: 'Assalamu’alaikum, saya ingin mendalami hasil STIFIn melalui WSL 1 untuk kebutuhan karier/profesi. Kota: ...' },
  },
  {
    slug: 'bisnis-tim-dan-kepemimpinan',
    eyebrow: 'Dari perbedaan menjadi sistem',
    title: 'Panduan STIFIn untuk Bisnis, Tim, dan Kepemimpinan',
    description: 'Bedakan fase Start–Run–Grow, perjelas peran, sesuaikan komunikasi, dan tetap gunakan kinerja sebagai dasar keputusan.',
    keyAnswer: 'Peta STIFIn dapat membantu memahami kecenderungan peran dan pintu komunikasi. Bisnis dan tim tetap membutuhkan kebutuhan pelanggan, pembagian tanggung jawab, indikator kerja, sistem, serta evaluasi yang adil.',
    audience: 'pemilik usaha, manajer, HR, pemimpin komunitas, dan promotor',
    promise: 'Anda dapat menempatkan pemahaman orang sebagai pelengkap sistem, bukan pengganti sistem.',
    sections: [
      { title: 'Mengapa bisnis tersendat ketika kebutuhan setiap fase tertukar', paragraphs: [
        'Pada fase Start, usaha perlu menemukan masalah pelanggan dan membuktikan bahwa orang bersedia menerima penawarannya. Pada fase Run, tantangannya adalah konsistensi mutu, arus kerja, dan kesehatan angka. Pada fase Grow, bisnis membutuhkan pemimpin, regenerasi, pengendalian, serta sistem yang dapat berjalan melampaui satu orang.',
        'Kecenderungan pemilik dapat membuat satu fase terasa alami dan fase lain sering ditunda. Peta diri membantu mengenali bias tersebut. Solusinya tidak selalu mengubah kepribadian; bisa berupa membangun prosedur, mempelajari keterampilan, atau bermitra dengan orang yang melengkapi fungsi.'
      ]},
      { title: 'Apa yang harus jelas sebelum menyesuaikan gaya memimpin', paragraphs: [
        'Setiap anggota perlu mengetahui hasil yang dituju, tanggung jawabnya, tenggat, wewenang, dan definisi selesai. Setelah fondasi itu jelas, pemimpin dapat menyesuaikan cara memberi konteks, instruksi, ruang eksplorasi, dukungan relasional, atau ritme tindak lanjut.',
        'Dalam HR, informasi kecenderungan dapat memperkaya percakapan pengembangan. Ia tidak boleh menjadi alasan diskriminasi atau menggantikan bukti kompetensi dan kinerja. Penempatan yang baik bersifat hipotesis: beri tugas, sediakan dukungan, ukur hasil, lalu perbaiki keputusan.'
      ]},
      { title: 'Bagaimana membuat eksperimen tim yang adil', paragraphs: [
        'Pilih satu masalah kerja, misalnya rapat lambat menghasilkan keputusan. Tetapkan indikator awal, ubah satu unsur komunikasi atau pembagian peran, lalu ukur selama beberapa siklus. Mintalah umpan balik dari anggota dan periksa apakah mutu hasil meningkat, bukan hanya apakah proses terasa nyaman.',
        'Untuk pemasaran, terjemahkan manfaat melalui beberapa pintu: contoh konkret, alasan logis, gambaran masa depan, cerita manusia, dan ajakan singkat. Fakta, harga, dan ketentuan harus tetap sama. Penyesuaian pesan bertujuan memudahkan pemahaman, bukan memanipulasi keputusan.'
      ]},
    ],
    essentials: [
      { title: 'Kenali fase', text: 'Start, Run, dan Grow membutuhkan fokus serta ukuran yang berbeda.' },
      { title: 'Standar tetap jelas', text: 'Sesuaikan komunikasi, tetapi jangan mengaburkan hasil dan tanggung jawab.' },
      { title: 'Ukur dampak', text: 'Kenyamanan bukan satu-satunya bukti; lihat mutu, waktu, pelanggan, dan angka.' },
    ],
    faq: [
      { question: 'Apakah tipe dapat dipakai untuk membagi jabatan?', answer: 'Tipe dapat memberi hipotesis kecenderungan, bukan keputusan otomatis. Jabatan harus mempertimbangkan kompetensi, pengalaman, minat, integritas, dan kinerja.' },
      { question: 'Bagaimana menjaga keadilan saat menyesuaikan cara memimpin?', answer: 'Pertahankan tujuan dan standar yang dapat dilihat semua orang. Penyesuaian diberikan pada cara komunikasi dan dukungan agar setiap orang mampu mencapai standar tersebut.' },
      { question: 'Di fase mana bisnis saya berada?', answer: 'Jika penawaran belum terbukti, fokusnya Start. Jika permintaan ada tetapi mutu dan operasi belum konsisten, fokusnya Run. Jika sistem sudah berjalan dan perlu diperluas melalui orang lain, fokusnya Grow.' },
    ],
    articleIds: ['bisnis-start-run-grow', 'membangun-tim-dengan-peran-yang-jelas', 'leadership-lima-cara-menggerakkan', 'marketing-lima-pintu-komunikasi'],
    sourceNote: 'Dikembangkan dari Workbook STIFIn Business, Leadership, Marketing, Human Resources, dan artikel penerapan STIFIn Mulia.',
    cta: { title: 'Ingin membawa pembelajaran STIFIn ke tim atau komunitas?', text: 'Ceritakan jumlah peserta, tujuan, dan tantangan utama agar pembicaraan dimulai dari kebutuhan nyata.', href: '/kerja-sama/', label: 'Bahas Kerja Sama', stage: 'awareness', message: 'Assalamu’alaikum, saya ingin membahas penerapan STIFIn untuk tim/komunitas. Organisasi: ... Jumlah peserta: ... Kebutuhan: ...' },
  },
  {
    slug: 'wsl-1-dan-promotor',
    eyebrow: 'Belajar, melayani, bertumbuh',
    title: 'Panduan WSL 1 dan Perjalanan Menjadi Promotor STIFIn',
    description: 'Pahami mengapa WSL 1 penting, pekerjaan nyata promotor, kesiapan yang dibutuhkan, dan cara memulai layanan secara bertahap.',
    keyAnswer: 'WSL 1 memperkuat fondasi agar hasil tidak berhenti sebagai label. Jalur promotor melanjutkannya menjadi kemampuan mengedukasi dan melayani; pertumbuhannya bergantung pada belajar, kepercayaan, aktivitas, tindak lanjut, dan sistem—bukan janji penghasilan otomatis.',
    audience: 'peserta tes, calon peserta WSL 1, calon promotor, dan promotor baru',
    promise: 'Anda dapat membedakan minat sesaat dari kesiapan menjalani proses belajar dan pelayanan.',
    sections: [
      { title: 'Mengapa tes saja sering belum cukup', paragraphs: [
        'Setelah menerima hasil, orang mudah mengingat nama tipenya tetapi belum memahami hubungan antara Mesin Kecerdasan, drive, perbedaan pola, dan penerapan. Akibatnya, hasil berubah menjadi kalimat pendek yang diulang tanpa kemampuan menjelaskan konteks.',
        'WSL 1 menyediakan fondasi pembelajaran yang lebih tertib. Tujuannya bukan menambah istilah, melainkan memperbaiki cara membaca peta dan berinteraksi dengan perbedaan. Pengalaman setelah tes membuat peserta datang membawa pertanyaan; pembelajaran membantu menyusun jawabannya.'
      ]},
      { title: 'Apa pekerjaan nyata seorang promotor', paragraphs: [
        'Promotor bukan sekadar membagikan tautan. Ia membuka percakapan, memahami kebutuhan calon peserta, menjelaskan proses tanpa klaim berlebihan, mengoordinasikan layanan, mendampingi pertanyaan setelah hasil, mengundang pembelajaran lanjutan, dan menjaga data peserta secara bertanggung jawab.',
        'Manfaat perjalanan ini dapat dibaca lebih luas daripada margin transaksi: peningkatan kemampuan, lahirnya sistem layanan, reputasi, hubungan, serta rasa bermakna karena membantu orang. Semua manfaat tersebut membutuhkan aktivitas dan kualitas pelayanan; tidak ada hasil yang seharusnya dijanjikan tanpa dasar.'
      ]},
      { title: 'Bagaimana memulai tanpa menunggu jaringan besar', paragraphs: [
        'Pilih satu kelompok yang kebutuhannya Anda pahami—misalnya orang tua murid, guru, keluarga muda, atau pemilik usaha. Dengarkan masalah mereka, buat kegiatan kecil, dan jelaskan langkah tes secara konkret. Sepuluh peserta pertama lebih mungkin datang dari kepercayaan dalam lingkaran yang relevan daripada promosi umum kepada semua orang.',
        'Bangun ritme mingguan: belajar materi, membuka percakapan, membuat konten edukatif, menindaklanjuti peserta, dan mencatat hasil. Tinjau angka aktivitas sekaligus mutu pelayanan. Ketika pertanyaan semakin kompleks, kembali belajar dan gunakan pendampingan jaringan agar penjelasan tetap tertib.'
      ]},
    ],
    essentials: [
      { title: 'WSL 1 memperkuat fondasi', text: 'Belajar membantu hasil tes menjadi bahasa yang dapat digunakan dengan benar.' },
      { title: 'Promotor adalah pelayan', text: 'Kepercayaan tumbuh dari edukasi, kejelasan proses, dan tindak lanjut.' },
      { title: 'Pertumbuhan perlu ritme', text: 'Aktivitas yang dicatat lebih berguna daripada semangat yang tidak terjadwal.' },
    ],
    faq: [
      { question: 'Apakah harus sudah tes sebelum mengikuti WSL 1?', answer: 'Konfirmasikan ketentuan peserta terbaru kepada tim. Secara pembelajaran, mengenal hasil pribadi membantu peserta membawa pengalaman konkret ke kelas.' },
      { question: 'Apakah menjadi promotor menjamin penghasilan?', answer: 'Tidak. Hasil dipengaruhi aktivitas, keterampilan, jaringan, kebutuhan pasar, kualitas pelayanan, biaya, ketentuan resmi, dan banyak faktor lain.' },
      { question: 'Siapa yang cocok mempertimbangkan jalur promotor?', answer: 'Orang yang bersedia belajar, senang membantu, mampu menjaga kepercayaan, menyediakan waktu untuk pelayanan, serta siap menjalankan aktivitas dan evaluasi secara konsisten.' },
    ],
    articleIds: ['dari-hasil-tes-menuju-wsl-1', 'cek-kesiapan-menjadi-promotor-stifin', 'cara-mendapatkan-10-peserta-tes-pertama', 'follow-up-setelah-tes-menuju-wsl-1'],
    sourceNote: 'Dikembangkan dari Buku STIFIn Konsep PALUGADA, alur WSL 1, dan pengalaman layanan jaringan STIFIn Mulia.',
    cta: { title: 'Pilih langkah yang sesuai posisi Anda hari ini', text: 'Jika sudah tes, perdalam melalui WSL 1. Jika sudah belajar dan ingin melayani, cek kesiapan jalur promotor.', href: '/langkah-selanjutnya/', label: 'Temukan Langkah Saya', stage: 'wsl1', message: 'Assalamu’alaikum, saya ingin mengetahui langkah berikutnya antara WSL 1 dan jalur promotor. Saya sudah/belum tes: ... Kota: ...' },
  },
  {
    slug: 'tafsir-surah-al-qamar',
    eyebrow: 'Ruang keilmuan tersendiri',
    title: 'Panduan Membaca dan Menadabburi Surah Al-Qamar',
    description: 'Ikuti alur Surah Al-Qamar dari tanda, kisah umat terdahulu, pengulangan undangan mengambil pelajaran, hingga penutup bagi orang bertakwa.',
    keyAnswer: 'Surah Al-Qamar menggerakkan pembaca dari informasi menuju sikap: melihat tanda, belajar dari sejarah, menyadari tanggung jawab, dan mengarahkan hidup kepada ketakwaan. Kajian ini berdiri sendiri dan tidak digunakan untuk membuktikan konsep STIFIn.',
    audience: 'pembaca Al-Qur’an, peserta kajian, keluarga, dan pembaca yang ingin mulai tadabbur terstruktur',
    promise: 'Anda memperoleh peta bacaan yang tertib dan pertanyaan refleksi yang menjaga tadabbur tetap dekat dengan teks.',
    sections: [
      { title: 'Mengapa surah ini tidak cukup dibaca sebagai kumpulan kisah', paragraphs: [
        'Surah Al-Qamar membuka dengan kedekatan hari kiamat dan sebuah tanda, lalu memperlihatkan sikap orang yang berpaling. Rangkaian kisah Nabi Nuh, kaum ‘Ad, Tsamud, kaum Luth, dan keluarga Fir‘aun bukan sekadar catatan masa lalu. Setiap bagian mengajak pembaca melihat pola penolakan serta akibatnya.',
        'Di antara rangkaian tersebut, undangan bahwa Al-Qur’an telah dimudahkan untuk pelajaran diulang empat kali. Pengulangan bertindak seperti jeda: setelah mendengar nasib suatu kaum, pembaca ditanya secara moral—adakah yang mau mengambil pelajaran?'
      ]},
      { title: 'Apa alur besar yang perlu dijaga saat membaca', paragraphs: [
        'Pembukaan menempatkan pembaca di hadapan tanda dan hari kebangkitan. Kisah-kisah berikutnya memperlihatkan penolakan dengan bentuk yang berbeda: mendustakan utusan, merasa kuat, melampaui batas, atau mengabaikan peringatan. Bagian akhir menegaskan ukuran, catatan amal, serta perbedaan tujuan orang berdosa dan orang bertakwa.',
        'Penutup tentang maq‘ad sidq menghadirkan tujuan positif setelah rentetan peringatan: kedekatan yang mulia di sisi Tuhan Yang Mahakuasa. Dengan demikian, rasa takut tidak berdiri sendiri; ia diarahkan menuju kesadaran, perubahan, harapan, dan ketakwaan.'
      ]},
      { title: 'Bagaimana melakukan tadabbur dengan tertib', paragraphs: [
        'Mulailah dari bacaan ayat dan terjemah yang dapat dipercaya, perhatikan hubungan antarayat, lalu gunakan tafsir ulama untuk memahami konteks dan pilihan makna. Catat pengulangan, tokoh, tindakan, akibat, dan peralihan tema. Bedakan penjelasan tafsir dari renungan pribadi agar pembaca tahu tingkat kepastiannya.',
        'Akhiri dengan satu pertanyaan sikap dan satu tindakan yang sesuai. Jangan memaksa ayat menjadi kode untuk membenarkan gagasan yang sudah dimiliki. Ukuran tadabbur bukan keunikan tafsiran, melainkan ketertiban memahami serta dampaknya pada iman, akhlak, dan tanggung jawab.'
      ]},
    ],
    essentials: [
      { title: 'Ikuti alur ayat', text: 'Baca hubungan tanda, kisah, pengulangan, pertanggungjawaban, dan penutup.' },
      { title: 'Bedakan tafsir dan refleksi', text: 'Jelaskan mana keterangan sumber dan mana pelajaran yang direnungkan pembaca.' },
      { title: 'Cari dampak sikap', text: 'Tadabbur mengarah pada ingatan, ketundukan, dan perbaikan tindakan.' },
    ],
    faq: [
      { question: 'Apakah Ruang Tafsir Al-Qamar dipakai untuk membuktikan STIFIn?', answer: 'Tidak. Kajian Surah Al-Qamar berdiri sebagai ruang keilmuan tersendiri dan tidak digunakan untuk mengklaim bahwa ayat Al-Qur’an membuktikan konsep STIFIn.' },
      { question: 'Mengapa ayat tentang Al-Qur’an yang dimudahkan diulang?', answer: 'Dalam alur surah, pengulangan menjadi penegasan dan undangan mengambil pelajaran setelah kisah umat terdahulu.' },
      { question: 'Bagaimana membedakan tadabbur dan tafsir?', answer: 'Tafsir menjelaskan makna dengan perangkat ilmu dan sumber. Tadabbur merenungkan petunjuk serta dampaknya pada diri, dengan tetap mengikuti makna ayat dan tidak membuat klaim tanpa dasar.' },
    ],
    articleIds: ['peta-besar-surah-al-qamar', 'cara-tadabbur-surah-al-qamar', 'al-qamar-quran-dimudahkan-untuk-pelajaran', 'al-qamar-maqad-sidq'],
    sourceNote: 'Dikembangkan dari naskah Tafsir Mendalam QS Al-Qamar yang tersedia bagi STIFIn Mulia; diringkas dan disusun ulang sebagai peta baca, bukan fatwa.',
    cta: { title: 'Lanjutkan ayat demi ayat dengan peta yang tertib', text: 'Buka rangkaian artikel Al-Qamar dan catat satu pelajaran yang ingin dijaga dalam tindakan.', href: '/artikel/?tema=Tafsir%20Al-Qamar', label: 'Buka Ruang Tafsir', stage: 'awareness', message: 'Assalamu’alaikum, saya membaca panduan Surah Al-Qamar dan ingin bertanya tentang: ...' },
  },
];

export const priorityTerms = [
  { term: 'STIFIn', slug: 'stifin', group: 'Fondasi', why: 'Istilah ini menjadi payung seluruh pembelajaran sehingga perlu dibedakan dari tes, hasil, dan penerapannya.', use: 'Gunakan untuk menyebut konsep dan ekosistem pembelajaran secara utuh, lalu sebut bagian yang sedang dibahas.', avoid: 'Jangan menganggap satu definisi singkat mewakili seluruh materi atau menggunakannya sebagai klaim ilmiah tanpa sumber.', pillarSlug: 'mengenal-stifin', articleIds: ['lima-mesin-kecerdasan-sebagai-peta-awal'], related: ['Mesin Kecerdasan', 'Personaliti Genetik', 'Tes STIFIn'] },
  { term: 'Tes STIFIn', slug: 'tes-stifin', group: 'Proses tes', why: 'Calon peserta perlu mengetahui apa yang dilakukan, diterima, dan dilanjutkan setelah tes.', use: 'Datang dengan pertanyaan nyata, ikuti proses, minta penjelasan, lalu pilih satu penerapan untuk diuji.', avoid: 'Jangan menyebutnya diagnosis medis, diagnosis psikologis, ramalan, atau satu-satunya dasar keputusan besar.', pillarSlug: 'tes-stifin-dan-hasil', articleIds: ['sebelum-tes-stifin-pertanyaan-yang-perlu-dijawab', 'apa-yang-dibawa-pulang-setelah-tes-stifin'], related: ['Pemindaian sidik jari', 'Penjelasan hasil', 'WSL 1'] },
  { term: 'Mesin Kecerdasan', slug: 'mesin-kecerdasan', group: 'Fondasi', why: 'Istilah ini menjelaskan lima kelompok kecenderungan utama yang menjadi pintu masuk konsep STIFIn.', use: 'Gunakan sebagai peta awal untuk memilih pendekatan, lalu periksa kecocokannya dalam situasi nyata.', avoid: 'Jangan menyimpulkan bahwa seseorang hanya mampu melakukan hal-hal yang diasosiasikan dengan mesinnya.', pillarSlug: 'mengenal-stifin', articleIds: ['lima-mesin-kecerdasan-sebagai-peta-awal'], related: ['Sensing', 'Thinking', 'Intuiting', 'Feeling', 'Insting'] },
  { term: 'Personaliti Genetik', slug: 'personaliti-genetik', group: 'Fondasi', why: 'Hasil ini menggabungkan Mesin Kecerdasan dan drive pada empat mesin tertentu sehingga lebih spesifik daripada lima mesin saja.', use: 'Gunakan untuk memperdalam pertanyaan tentang pola, komunikasi, dan pengembangan kebiasaan.', avoid: 'Jangan menyamakan kata genetik dengan kepastian nasib atau mengabaikan pengaruh pengalaman dan pilihan.', pillarSlug: 'mengenal-stifin', articleIds: ['memahami-tes-stifin-secara-proporsional'], related: ['Mesin Kecerdasan', 'Kemudi atau drive', 'Genetik'] },
  { term: 'Sensing', slug: 'sensing', group: 'Lima mesin', why: 'Sensing membantu membahas pintu konkret, pengalaman, fakta, pengulangan, dan hal yang dapat ditangkap indera.', use: 'Uji pendekatan melalui contoh nyata, urutan yang terlihat, latihan, dan bukti pengalaman.', avoid: 'Jangan menganggap Sensing tidak mampu berpikir abstrak atau hanya cocok pada satu jenis pekerjaan.', pillarSlug: 'mengenal-stifin', articleIds: ['strategi-belajar-lima-pintu'], related: ['Mesin Kecerdasan', 'Sensing introvert (Si)', 'Sensing extrovert (Se)'] },
  { term: 'Thinking', slug: 'thinking', group: 'Lima mesin', why: 'Thinking membantu membahas pintu logika, struktur, analisis, ukuran, dan konsistensi sistem.', use: 'Sediakan alasan, kerangka, kriteria, data, dan definisi selesai yang jelas.', avoid: 'Jangan memakai istilah Thinking untuk menyebut orang tidak berperasaan atau selalu paling benar.', pillarSlug: 'mengenal-stifin', articleIds: ['membangun-tim-dengan-peran-yang-jelas'], related: ['Mesin Kecerdasan', 'Thinking introvert (Ti)', 'Thinking extrovert (Te)'] },
  { term: 'Intuiting', slug: 'intuiting', group: 'Lima mesin', why: 'Intuiting membantu membahas pintu pola, kemungkinan, kreativitas, konsep, dan orientasi masa depan.', use: 'Mulai dari gambaran besar, hubungan gagasan, kemungkinan, dan ruang untuk menghasilkan alternatif.', avoid: 'Jangan menganggap setiap gagasan pasti layak atau detail dan disiplin tidak diperlukan.', pillarSlug: 'mengenal-stifin', articleIds: ['strategi-belajar-lima-pintu'], related: ['Mesin Kecerdasan', 'Intuiting introvert (Ii)', 'Intuiting extrovert (Ie)'] },
  { term: 'Feeling', slug: 'feeling', group: 'Lima mesin', why: 'Feeling membantu membahas pintu relasi, rasa, nilai, penerimaan, dan kemampuan menggerakkan orang.', use: 'Bangun hubungan, jelaskan dampak pada manusia, libatkan percakapan, dan berikan pengakuan yang tulus.', avoid: 'Jangan merendahkan Feeling sebagai sekadar emosional atau mengabaikan kebutuhan akan fakta dan batas.', pillarSlug: 'mengenal-stifin', articleIds: ['chemistry-keluarga-bahasa-kasih'], related: ['Mesin Kecerdasan', 'Feeling introvert (Fi)', 'Feeling extrovert (Fe)'] },
  { term: 'Insting', slug: 'insting', group: 'Lima mesin', why: 'Insting membantu membahas respons cepat, naluri, keseimbangan, spontanitas, dan kemampuan beradaptasi.', use: 'Gunakan pengalaman ringkas, keterlibatan langsung, variasi yang cukup, dan ruang merespons keadaan.', avoid: 'Jangan menyamakan naluri dengan keputusan yang tidak perlu dipertanggungjawabkan.', pillarSlug: 'mengenal-stifin', articleIds: ['strategi-belajar-lima-pintu'], related: ['Mesin Kecerdasan', 'Insting (In)', 'Kalibrasi'] },
  { term: 'Kemudi atau drive', slug: 'kemudi-atau-drive', group: 'Fondasi', why: 'Drive menjelaskan arah introvert atau extrovert yang melengkapi Sensing, Thinking, Intuiting, dan Feeling.', use: 'Pelajari bersama Mesin Kecerdasan dan contoh personaliti genetik agar maknanya tidak terlepas dari kerangka.', avoid: 'Jangan menyamakannya begitu saja dengan suka menyendiri atau suka bergaul.', pillarSlug: 'mengenal-stifin', articleIds: ['memahami-tes-stifin-secara-proporsional'], related: ['Introvert (i)', 'Extrovert (e)', 'Personaliti Genetik'] },
  { term: 'Penjelasan hasil', slug: 'penjelasan-hasil', group: 'Proses tes', why: 'Tanpa penjelasan, peserta mudah membawa pulang nama tipe tetapi tidak mengetahui cara menggunakan hasil.', use: 'Bawa pertanyaan, minta contoh yang relevan, dan sepakati satu penerapan kecil yang dapat diuji.', avoid: 'Jangan menerima penjelasan yang menjanjikan kepastian hidup atau memberi label yang merendahkan.', pillarSlug: 'tes-stifin-dan-hasil', articleIds: ['apa-yang-dibawa-pulang-setelah-tes-stifin'], related: ['Tes STIFIn', 'WSL 1', 'Personaliti Genetik'] },
  { term: 'WSL 1', slug: 'wsl-1', group: 'Pembelajaran', why: 'WSL 1 membantu peserta bergerak dari mengetahui hasil menuju memahami fondasi dan perbedaan secara lebih utuh.', use: 'Ikuti setelah memiliki pertanyaan dari pengalaman, catat konsep penting, dan terapkan secara bertahap.', avoid: 'Jangan memperlakukan kelulusan atau keikutsertaan sebagai izin untuk memberi klaim di luar materi dan kewenangan.', pillarSlug: 'wsl-1-dan-promotor', articleIds: ['dari-hasil-tes-menuju-wsl-1'], related: ['Tes STIFIn', 'Penjelasan hasil', 'Promotor STIFIn'] },
  { term: 'Promotor STIFIn', slug: 'promotor-stifin', group: 'Jaringan', why: 'Istilah ini memuat tanggung jawab belajar, edukasi, koordinasi layanan, tindak lanjut, dan penjagaan kepercayaan.', use: 'Bangun pengetahuan, pilih komunitas yang dipahami, jelaskan proses dengan tertib, dan catat tindak lanjut.', avoid: 'Jangan menjanjikan hasil tes, penghasilan, atau manfaat yang tidak dapat dibuktikan.', pillarSlug: 'wsl-1-dan-promotor', articleIds: ['cek-kesiapan-menjadi-promotor-stifin', 'cara-mendapatkan-10-peserta-tes-pertama'], related: ['WSL 1', 'Cabang STIFIn', 'Kode promotor'] },
  { term: 'STIFIn Learning', slug: 'stifin-learning', group: 'Penerapan', why: 'Penerapan ini membantu mengubah perbedaan pola menjadi variasi pintu belajar yang dapat diuji.', use: 'Tetapkan tujuan, pilih satu strategi, ukur pemahaman dan konsistensi, lalu perbaiki pendekatan.', avoid: 'Jangan menetapkan satu gaya belajar sebagai aturan tetap untuk semua materi dan keadaan.', pillarSlug: 'anak-belajar-dan-parenting', articleIds: ['memilih-strategi-belajar-yang-bisa-dievaluasi', 'strategi-belajar-lima-pintu'], related: ['Mesin Kecerdasan', 'STIFIn Parenting', 'Penjelasan hasil'] },
  { term: 'STIFIn Parenting', slug: 'stifin-parenting', group: 'Penerapan', why: 'Penerapan ini membantu orang tua mengamati kebutuhan anak dan menyesuaikan cara tanpa kehilangan nilai serta batas.', use: 'Pilih satu situasi, amati pola, uji satu perubahan, dan libatkan suara anak sesuai usianya.', avoid: 'Jangan memakai tipe untuk memberi cap, membandingkan anak, atau mengabaikan tahap perkembangan.', pillarSlug: 'anak-belajar-dan-parenting', articleIds: ['parenting-amati-sebelum-mengoreksi', 'mendampingi-anak-tanpa-memberi-label'], related: ['STIFIn Learning', 'Personaliti Genetik', 'STIFIn Couple'] },
  { term: 'STIFIn Couple', slug: 'stifin-couple', group: 'Penerapan', why: 'Penerapan ini membantu pasangan menerjemahkan perbedaan komunikasi menjadi permintaan dan kesepakatan.', use: 'Bahas satu kejadian, jelaskan dampak, dengarkan kebutuhan, dan buat kesepakatan yang dapat diperiksa.', avoid: 'Jangan memakai tipe untuk membenarkan perilaku tidak aman atau memenangkan konflik.', pillarSlug: 'pasangan-dan-keluarga', articleIds: ['memahami-pasangan-tanpa-saling-melabeli'], related: ['Chemistry', 'STIFIn Parenting', 'Feeling'] },
  { term: 'STIFIn Profession', slug: 'stifin-profession', group: 'Penerapan', why: 'Penerapan ini membantu mengeksplorasi arah profesi tanpa memisahkan kecenderungan dari kompetensi dan peluang.', use: 'Gabungkan peta, kemampuan, nilai, kesempatan, dan eksperimen kerja yang nyata.', avoid: 'Jangan memilih atau menolak profesi hanya berdasarkan tipe.', pillarSlug: 'karier-profesi-dan-finansial', articleIds: ['memilih-profesi-tanpa-menjadikan-hasil-tes-vonis', 'profesi-wadah-kontribusi'], related: ['STIFIn Finansial', 'Personaliti Genetik', 'Chemistry'] },
  { term: 'Start–Run–Grow', slug: 'start-run-grow', group: 'Penerapan', why: 'Kerangka ini mencegah pemilik usaha mengerjakan kebutuhan ekspansi ketika penawaran atau operasi dasarnya belum sehat.', use: 'Tentukan fase dominan, pilih ukuran yang sesuai, dan fokuskan perbaikan pada hambatan fase tersebut.', avoid: 'Jangan melihat fase sebagai gelar permanen; satu lini usaha dapat berada pada fase berbeda dari lini lain.', pillarSlug: 'bisnis-tim-dan-kepemimpinan', articleIds: ['bisnis-start-run-grow'], related: ['STIFIn Business', 'STIFIn Leadership', 'STIFIn Marketing'] },
  { term: 'Chemistry', slug: 'chemistry', group: 'Penerapan', why: 'Chemistry memberi bahasa untuk membahas jalur nilai dan keberhasilan yang sering diringkas sebagai gaji, laba, rating, cinta, dan bahagia.', use: 'Gunakan sebagai bahan refleksi tentang cara memberi nilai, lalu hubungkan dengan perilaku, sistem, dan konteks nyata.', avoid: 'Jangan menjadikannya janji penghasilan, kepastian pasangan, atau ukuran tunggal keberhasilan.', pillarSlug: 'karier-profesi-dan-finansial', articleIds: ['gaji-laba-rating-cinta-bahagia', 'chemistry-keluarga-bahasa-kasih'], related: ['Gaji', 'Laba', 'Rating', 'Cinta', 'Bahagia'] },
];

export const pillarBySlug = Object.fromEntries(pillars.map((pillar) => [pillar.slug, pillar]));
export const termBySlug = Object.fromEntries(priorityTerms.map((term) => [term.slug, term]));

export const categoryPillar: Record<string, string> = {
  'Mengenal STIFIn': 'mengenal-stifin',
  'Keluarga dan Parenting': 'pasangan-dan-keluarga',
  'Belajar dan Pendidikan': 'anak-belajar-dan-parenting',
  'Karier dan Profesi': 'karier-profesi-dan-finansial',
  'Bisnis dan Kepemimpinan': 'bisnis-tim-dan-kepemimpinan',
  'Finansial dan Rezeki': 'karier-profesi-dan-finansial',
  'Tafsir Al-Qamar': 'tafsir-surah-al-qamar',
};
