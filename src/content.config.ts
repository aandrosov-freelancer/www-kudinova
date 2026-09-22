import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const poems = defineCollection({
  loader: glob({ base: './src/content/poems', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { poems };
