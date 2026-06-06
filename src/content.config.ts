import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const noticias = defineCollection({
  loader: glob({ base: "./src/content/noticias", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { noticias };
