export const site = {
  name: 'STIFIn Mulia',
  domain: 'stifinmulia.com',
  tagline: 'Kenali potensi. Tentukan langkah.',
  description:
    'Tempat belajar, mengikuti tes, menjadi promotor, dan membangun kerja sama berbasis konsep STIFIn.',
  owner: 'Muhamad Sofyan AR',
  role: 'Branch Manager STIFIn Genetic Indonesia Cabang Pekalongan',
  network: 'Tergabung dalam jaringan STIFIn Genetic Indonesia',
  location: 'Bandung Raya dan Sumedang',
  whatsapp: '6281333362649',
  phoneDisplay: '0813-3336-2649',
  email: 'halo@stifinmulia.com',
  instagram: 'https://www.instagram.com/stifin.mulia',
  youtube: 'https://www.youtube.com/@STIFInMulia',
  facebook: 'https://www.facebook.com/stifinmulia',
  telegram: 'https://t.me/stifinmulia',
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
