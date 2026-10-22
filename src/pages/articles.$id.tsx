import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getArticleById } from "../services/api/client/articles-api";
import type { Article } from "../services/api/schemas/article.schema";
import { articleSchema } from "../services/api/schemas/article.schema";

type ArticlePageState =
    | { status: "loading" }
    | { status: "success"; article: Article }
    | { status: "not-found" }
    | { status: "error" };

export default function ArticlePage() {
    const { id } = useParams();
    const [retryCount, setRetryCount] = useState(0);
    const [state, setState] = useState<ArticlePageState>({
        status: "loading",
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!id || !articleSchema.shape.id.safeParse(id).success) {
            setState({ status: "not-found" });
            return;
        }

        const controller = new AbortController();
        let active = true;

        setState({ status: "loading" });

        async function loadArticle() {
            try {
                const article = await getArticleById(id, controller.signal);

                if (active) {
                    setState({ status: "success", article });
                }
            } catch (error: unknown) {
                if (!active) return;

                if (
                    axios.isAxiosError(error) &&
                    error.response?.status === 404
                ) {
                    setState({ status: "not-found" });
                    return;
                }

                setState({ status: "error" });
            }
        }

        void loadArticle();

        return () => {
            active = false;
            controller.abort();
        };
    }, [id, retryCount]);

    if (state.status === "loading") {
        return (
            <main className="mx-auto max-w-3xl px-6 py-12">
                <p role="status">Loading article...</p>
            </main>
        );
    }

    if (state.status === "not-found") {
        return (
            <main className="mx-auto max-w-3xl px-6 py-12">
                <h1 className="text-2xl font-bold">Article not found</h1>
                <p>This article does not exist or the address is invalid.</p>
                <Link to="/">Back to About Me</Link>
            </main>
        );
    }

    if (state.status === "error") {
        return (
            <main className="mx-auto max-w-3xl px-6 py-12">
                <p role="alert">
                    We couldn’t load this article. Please try again.
                </p>
                <button
                    type="button"
                    onClick={() => setRetryCount((count) => count + 1)}
                >
                    Try again
                </button>
                <p>
                    <Link to="/">Back to About Me</Link>
                </p>
            </main>
        );
    }

    const { article } = state;
    const paragraphs = article.text.split(/\r?\n(?:[ \t]*\r?\n)+/);

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <Link to="/">← Back to About Me</Link>

            <article className="mt-8">
                <h1 className="text-3xl font-bold">{article.title}</h1>

                <time
                    className="mt-2 block text-sm text-gray-500"
                    dateTime={article.publishedAt}
                >
                    {new Date(article.publishedAt).toLocaleDateString()}
                </time>

                <div className="mt-6 space-y-4">
                    {paragraphs.map((paragraph, index) => (
                        <p key={`${index}-${paragraph}`}>{paragraph}</p>
                    ))}
                </div>
            </article>
        </main>
    );
}
