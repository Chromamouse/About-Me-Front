import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getArticles } from "../../../services/api/client/articles-api";
import type { Article } from "../../../services/api/schemas/article.schema";
import { BlogSection } from "./BlogSection";

vi.mock("../../../services/api/client/articles-api", () => ({
  getArticles: vi.fn(),
}));

const newerArticle: Article = {
  id: "22222222-2222-4222-8222-222222222222",
  title: "My latest article",
  text: "Latest article content",
  publishedAt: "2025-02-01T10:00:00Z",
};

const mockGetArticles = vi.mocked(getArticles);

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;

  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}

describe("BlogSection", () => {
  beforeEach(() => {
    mockGetArticles.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("shows an error and a retry button when the request fails", async () => {
    // Given: the API request fails
    mockGetArticles.mockRejectedValue(new Error("Network error"));

    // When: the visitor opens the blog section
    render(<BlogSection />);

    // Then: an error and a retry button appear
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "We couldn’t load the articles. Please try again.",
    );

    expect(screen.getByRole("button", { name: "Try again" })).toBeVisible();
  });

  it("shows no articles if response validation fails", async () => {
    // Given: the API service rejects invalid data after Zod validation
    mockGetArticles.mockRejectedValue(new Error("Invalid article response"));

    // When: the visitor opens the blog section
    render(<BlogSection />);

    // Then: the error appears and no article is displayed
    expect(await screen.findByRole("alert")).toBeVisible();

    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
  });

  it("aborts the request when the component unmounts", async () => {
    // Given: the API request is still pending
    const deferred = createDeferred<Article[]>();
    let requestSignal: AbortSignal | undefined;

    mockGetArticles.mockImplementation((signal) => {
      requestSignal = signal;
      return deferred.promise;
    });

    const { unmount } = render(<BlogSection />);

    await waitFor(() => {
      expect(mockGetArticles).toHaveBeenCalled();
    });

    // When: the visitor leaves the page
    unmount();

    // Then: the request is aborted
    expect(requestSignal?.aborted).toBe(true);

    // A late result must not cause an unhandled rejection.
    deferred.resolve([newerArticle]);
    await deferred.promise;
  });
});
