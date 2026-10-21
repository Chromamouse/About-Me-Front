import { axiosClient } from './axios-client';
import {
    articlesSchema,
    type Article,
} from '../schemas/article.schema';

export async function getArticles(
    signal?: AbortSignal,
): Promise<Article[]> {
    const response = await axiosClient.get<unknown>(
        '/api/v1/articles',
        { signal },
    );

    const articles = articlesSchema.parse(response.data);

    return [...articles].sort(
        (a, b) =>
            Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
    );
}