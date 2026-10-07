import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),

    category: z.enum([
      'Engenharia de Software',
      'Inteligência Artificial',
      'Desenvolvimento Web',
      'Produto & Discovery',
      'Carreira & Mercado',
    ]),

    tags: z.array(z.string()).default([]),

    series: z.string().optional(),
    seriesOrder: z.number().int().positive().optional(),

    cover: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};