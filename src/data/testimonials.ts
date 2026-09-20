export type TestimonialCategory = 'Figur Publik' | 'Psikolog & Pendidikan' | 'Ahli & Profesional';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: TestimonialCategory;
  image: string;
  summary: string;
  relevance: string;
  source: string;
  sourceLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'melly-goeslaw',
    name: 'Melly Goeslaw',
    role: 'Penulis lagu dan penyanyi',
    category: 'Figur Publik',
    image: '/images/testimoni/melly-goeslaw.webp',
    summary: 'Setelah mengikuti Tes STIFIn, Melly menceritakan bahwa ia menjadi lebih mengenal diri, pola belajar, kelebihan, kekurangan, serta gambaran bidang yang sesuai dengan karakternya.',
    relevance: 'Pengenalan diri, belajar, dan arah profesi',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
  {
    id: 'seto-mulyadi',
    name: 'Seto Mulyadi',
    role: 'Psikolog dan pemerhati anak',
    category: 'Psikolog & Pendidikan',
    image: '/images/testimoni/seto-mulyadi.webp',
    summary: 'Kak Seto menekankan bahwa setiap anak berbeda. Menurut testimoninya, STIFIn membantu keluarganya memetakan potensi genetik anak dan memahami pendekatan pola asuh yang lebih tepat.',
    relevance: 'Parenting dan potensi anak',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
  {
    id: 'asri-welas',
    name: 'Asri Welas',
    role: 'Pemeran dan model',
    category: 'Figur Publik',
    image: '/images/testimoni/asri-welas.webp',
    summary: 'Asri menceritakan bahwa ia dan keluarganya mengikuti Tes STIFIn sehingga dapat mengenali karakter dan potensi genetik masing-masing dengan lebih dalam.',
    relevance: 'Diri, pasangan, dan keluarga',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
  {
    id: 'ibnu-ririn',
    name: 'Ibnu Jamil & Ririn Ekawati',
    role: 'Aktor, aktris, dan presenter',
    category: 'Figur Publik',
    image: '/images/testimoni/ibnu-jamil-ririn-ekawati.webp',
    summary: 'Dalam testimoni resminya, mereka menjelaskan bahwa Tes STIFIn membantu membaca perbedaan anak, memetakan pendekatan, dan membangun komunikasi keluarga secara bertahap.',
    relevance: 'Komunikasi keluarga dan pengasuhan',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
  {
    id: 'subiakto',
    name: 'Subiakto Priosoedarsono',
    role: 'Pakar branding',
    category: 'Ahli & Profesional',
    image: '/images/testimoni/subiakto-priosoedarsono.webp',
    summary: 'Subiakto menghubungkan pemahaman konsep STIFIn dengan kemampuan mengenali diri dan orang lain, sehingga kerja sama di keluarga maupun dunia kerja dapat dibangun dengan lebih baik.',
    relevance: 'Branding, kerja sama, dan dunia profesional',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
  {
    id: 'arief-rachman',
    name: 'Prof. Dr. Arief Rachman, M.Pd.',
    role: 'Praktisi pendidikan',
    category: 'Psikolog & Pendidikan',
    image: '/images/testimoni/arief-rachman.webp',
    summary: 'Dalam testimoni yang dipublikasikan STIFIn, Prof. Arief merekomendasikan Tes STIFIn khususnya untuk membantu orang tua mengenali karakter anak dan menyesuaikan cara berkomunikasi.',
    relevance: 'Pendidikan dan komunikasi dengan anak',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
  {
    id: 'kris-pujiatni',
    name: 'Kris Pujiatni',
    role: 'Psikolog dan dosen psikologi UMS',
    category: 'Psikolog & Pendidikan',
    image: '/images/testimoni/kris-pujiatni.webp',
    summary: 'Kris menyoroti pentingnya mengenali kecenderungan dan potensi anak agar setiap anak memperoleh pendekatan yang sesuai, bukan dipaksa mengikuti satu ukuran yang sama.',
    relevance: 'Potensi anak dan pendekatan pendidikan',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
  {
    id: 'arifia-maulida',
    name: 'Arifia Maulida',
    role: 'Miss Indonesia Favorit 2020',
    category: 'Figur Publik',
    image: '/images/testimoni/arifia-maulida.webp',
    summary: 'Arifia menyebut penjelasan hasilnya terasa cocok, detail, dan praktis. Ia melihat Tes STIFIn sebagai bahan membantu orang tua mengarahkan pendidikan dan profesi anak.',
    relevance: 'Belajar, pendidikan, dan profesi',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
  {
    id: 'kumaidi',
    name: 'Prof. Dr. Kumaidi, M.A.',
    role: 'Ahli psikometrik dan dosen UMS',
    category: 'Ahli & Profesional',
    image: '/images/testimoni/kumaidi.webp',
    summary: 'Prof. Kumaidi mengapresiasi upaya memahami potensi unik setiap anak agar orang tua dan pendidik dapat memberi pengarahan serta lingkungan pendidikan yang lebih sesuai.',
    relevance: 'Psikometri, pendidikan, dan perlindungan anak',
    source: 'https://stifin.com/',
    sourceLabel: 'Testimoni resmi STIFIn',
  },
];

export const testimonialById = Object.fromEntries(testimonials.map((item) => [item.id, item]));
