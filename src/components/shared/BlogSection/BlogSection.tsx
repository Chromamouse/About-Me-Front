import { useEffect, useState } from "react";
import { getArticles } from "../../../services/api/client/articles-api";
import type { Article } from "../../../services/api/schemas/article.schema";

type ArticlesState =
  | { status: "loading" }
  | { status: "success"; articles: Article[] }
  | { status: "error" };

export function BlogSection() {
  const [state, setState] = useState<ArticlesState>({
    status: "loading",
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setState({ status: "loading" });

    async function loadArticles() {
      try {
        const articles = await getArticles(controller.signal);

        if (!controller.signal.aborted) {
          setState({ status: "success", articles });
        }
      } catch {
        if (!controller.signal.aborted) {
          setState({ status: "error" });
        }
      }
    }

    void loadArticles();

    return () => {
      controller.abort();
    };
  }, [attempt]);

  return (
    <section aria-labelledby="blog-heading" className="min-w-0 py-8">
      <h2 id="blog-heading" className="text-2xl font-bold">
        My articles
      </h2>

      {state.status === "loading" && (
        <p role="status" className="mt-4">
          Loading articles…
        </p>
      )}

      {state.status === "error" && (
        <div className="mt-4" role="alert">
          <p>We couldn’t load the articles. Please try again.</p>
          <button
            type="button"
            onClick={() => setAttempt((value) => value + 1)}
            className="mt-2 underline"
          >
            Try again
          </button>
        </div>
      )}

      {state.status === "success" && state.articles.length === 0 && (
        <p className="mt-4">No articles yet.</p>
      )}

      {state.status === "success" && state.articles.length > 0 && (
        <ul className="mt-4 space-y-4">
          {state.articles.map((article) => (
            <li key={article.id} className="min-w-0 border-b pb-4">
              <h3 className="break-words [overflow-wrap:anywhere]">
                {article.title}
              </h3>

              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString()}
              </time>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
