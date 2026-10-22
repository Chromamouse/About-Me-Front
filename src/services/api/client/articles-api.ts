import { type Article, articlesSchema } from "../schemas/article.schema";
import { axiosClient } from "./axios-client";

export async function getArticles(signal?: AbortSignal): Promise<Article[]> {
  const response = await axiosClient.get<unknown>("/api/v1/articles", {
    signal,
  });

  const articles = articlesSchema.parse(response.data);

  return [...articles].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
  );
}
