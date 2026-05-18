import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(['IA', 'Shopify', 'Ganar Dinero', 'Herramientas']),
    tags: z.array(z.string()),
    readingTime: z.string(),
    author: z.string().default('IngresosConIA'),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
