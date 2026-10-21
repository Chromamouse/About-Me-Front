import { z } from 'zod';

export const articleSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    text: z.string(),
    publishedAt: z.string().datetime({ offset: true }),
});

export const articlesSchema = z.array(articleSchema);

export type Article = z.infer<typeof articleSchema>;