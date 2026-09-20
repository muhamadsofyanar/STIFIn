export type TestimonialCategory = 'Figur Publik' | 'Psikolog & Pendidikan' | 'Ahli & Profesional';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: TestimonialCategory;
  image: string;
  objectPosition: string;
  summary: string;
  relevance: string;
  sourceLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'melly-goeslaw',
    name: 'Melly Goeslaw',
    role: 'Penulis lagu dan penyanyi',
    category: 'Figur Publik',
    image: '/images/testimoni/melly-goeslaw.webp',
    objectPosition: 'center 24%',
    summary: 'Setelah mengikuti Tes STIFIn, Melly menceritakan bahwa ia menjadi lebih mengenal diri, pola belajar, kelebihan, kekurangan, serta gambaran bidang yang sesuai dengan karakternya.',
    relevance: 'Pengenalan diri, belajar, dan arah profesi',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
  {
    id: 'seto-mulyadi',
    name: 'Seto Mulyadi',
    role: 'Psikolog dan pemerhati anak',
    category: 'Psikolog & Pendidikan',
    image: '/images/testimoni/seto-mulyadi.webp',
    objectPosition: 'center 20%',
    summary: 'Kak Seto menekankan bahwa setiap anak berbeda. Menurut testimoninya, STIFIn membantu keluarganya memetakan potensi genetik anak dan memahami pendekatan pola asuh yang lebih tepat.',
    relevance: 'Parenting dan potensi anak',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
  {
    id: 'asri-welas',
    name: 'Asri Welas',
    role: 'Pemeran dan model',
    category: 'Figur Publik',
    image: '/images/testimoni/asri-welas.webp',
    objectPosition: 'center 22%',
    summary: 'Asri menceritakan bahwa ia dan keluarganya mengikuti Tes STIFIn sehingga dapat mengenali karakter dan potensi genetik masing-masing dengan lebih dalam.',
    relevance: 'Diri, pasangan, dan keluarga',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
  {
    id: 'ibnu-ririn',
    name: 'Ibnu Jamil & Ririn Ekawati',
    role: 'Aktor, aktris, dan presenter',
    category: 'Figur Publik',
    image: '/images/testimoni/ibnu-jamil-ririn-ekawati.webp',
    objectPosition: 'center center',
    summary: 'Dalam testimoni resminya, mereka menjelaskan bahwa Tes STIFIn membantu membaca perbedaan anak, memetakan pendekatan, dan membangun komunikasi keluarga secara bertahap.',
    relevance: 'Komunikasi keluarga dan pengasuhan',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
  {
    id: 'subiakto',
    name: 'Subiakto Priosoedarsono',
    role: 'Pakar branding',
    category: 'Ahli & Profesional',
    image: '/images/testimoni/subiakto-priosoedarsono.webp',
    objectPosition: 'center 22%',
    summary: 'Subiakto menghubungkan pemahaman konsep STIFIn dengan kemampuan mengenali diri dan orang lain, sehingga kerja sama di keluarga maupun dunia kerja dapat dibangun dengan lebih baik.',
    relevance: 'Branding, kerja sama, dan dunia profesional',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
  {
    id: 'arief-rachman',
    name: 'Prof. Dr. Arief Rachman, M.Pd.',
    role: 'Praktisi pendidikan',
    category: 'Psikolog & Pendidikan',
    image: '/images/testimoni/arief-rachman.webp',
    objectPosition: 'center 22%',
    summary: 'Dalam testimoni yang dipublikasikan STIFIn, Prof. Arief merekomendasikan Tes STIFIn khususnya untuk membantu orang tua mengenali karakter anak dan menyesuaikan cara berkomunikasi.',
    relevance: 'Pendidikan dan komunikasi dengan anak',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
  {
    id: 'kris-pujiatni',
    name: 'Kris Pujiatni',
    role: 'Psikolog dan dosen psikologi UMS',
    category: 'Psikolog & Pendidikan',
    image: '/images/testimoni/kris-pujiatni.webp',
    objectPosition: 'center 20%',
    summary: 'Kris menyoroti pentingnya mengenali kecenderungan dan potensi anak agar setiap anak memperoleh pendekatan yang sesuai, bukan dipaksa mengikuti satu ukuran yang sama.',
    relevance: 'Potensi anak dan pendekatan pendidikan',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
  {
    id: 'arifia-maulida',
    name: 'Arifia Maulida',
    role: 'Miss Indonesia Favorit 2020',
    category: 'Figur Publik',
    image: '/images/testimoni/arifia-maulida.webp',
    objectPosition: 'center 18%',
    summary: 'Arifia menyebut penjelasan hasilnya terasa cocok, detail, dan praktis. Ia melihat Tes STIFIn sebagai bahan membantu orang tua mengarahkan pendidikan dan profesi anak.',
    relevance: 'Belajar, pendidikan, dan profesi',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
  {
    id: 'kumaidi',
    name: 'Prof. Dr. Kumaidi, M.A.',
    role: 'Ahli psikometrik dan dosen UMS',
    category: 'Ahli & Profesional',
    image: '/images/testimoni/kumaidi.webp',
    objectPosition: 'center 20%',
    summary: 'Prof. Kumaidi mengapresiasi upaya memahami potensi unik setiap anak agar orang tua dan pendidik dapat memberi pengarahan serta lingkungan pendidikan yang lebih sesuai.',
    relevance: 'Psikometri, pendidikan, dan perlindungan anak',
    sourceLabel: 'Publikasi testimoni STIFIn pusat',
  },
];

export const testimonialById = Object.fromEntries(testimonials.map((item) => [item.id, item]));
