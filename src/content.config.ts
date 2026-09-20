import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyAnswer: z.string(),
    category: z.enum(['Mengenal STIFIn', 'Keluarga dan Parenting', 'Belajar dan Pendidikan', 'Karier dan Profesi', 'Bisnis dan Kepemimpinan', 'Finansial dan Rezeki', 'Tafsir Al-Qamar']),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    readingTime: z.number().int().positive(),
    audience: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
