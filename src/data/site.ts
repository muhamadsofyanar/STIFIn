export const site = {
  name: 'STIFIn Mulia',
  domain: 'stifinmulia.com',
  tagline: 'Kenali potensi. Tumbuh dengan arah.',
  description:
    'Ekosistem edukasi, tes, pembinaan, dan kemitraan pengembangan manusia berbasis konsep STIFIn.',
  owner: 'Muhamad Sofyan AR',
  role: 'Branch Manager STIFIn Genetic Indonesia Cabang Pekalongan',
  location: 'Bandung Raya dan Sumedang',
  whatsapp: '6280000000000',
  email: 'halo@stifinmulia.com',
  instagram: '#',
  youtube: '#',
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
