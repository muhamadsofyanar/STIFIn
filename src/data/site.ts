export const site = {
  name: 'STIFIn Mulia',
  domain: 'stifinmulia.com',
  tagline: 'Kenali potensi. Tentukan langkah.',
  description:
    'Tempat belajar, mengikuti tes, menjadi promotor, dan membangun kerja sama berbasis konsep STIFIn.',
  owner: 'Muhamad Sofyan AR',
  role: 'Branch Manager STIFIn Genetic Indonesia Cabang Pekalongan',
  location: 'Bandung Raya dan Sumedang',
  whatsapp: '6281333362649',
  email: 'halo@stifinmulia.com',
  instagram: '#',
  youtube: '#',
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
