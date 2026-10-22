import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getArticles } from "../../../services/api/client/articles-api";
import type { Article } from "../../../services/api/schemas/article.schema";
import { BlogSection } from "./BlogSection";

vi.mock("../../../services/api/client/articles-api", () => ({
  getArticles: vi.fn(),
}));

const olderArticle: Article = {
  id: "11111111-1111-4111-8111-111111111111",
  title: "My first article",
  text: "First article content",
  publishedAt: "2025-01-01T10:00:00Z",
};

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

function renderBlogSection() {
  return render(
    <MemoryRouter>
      <BlogSection />
    </MemoryRouter>,
  );
}

describe("BlogSection", () => {
  beforeEach(() => {
    mockGetArticles.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("shows a loading indicator while the request is pending", () => {
    // Given: the API request has not finished
    const deferred = createDeferred<Article[]>();
    mockGetArticles.mockReturnValue(deferred.promise);

    // When: the visitor opens the blog section
    renderBlogSection();

    // Then: a loading indicator is visible
    expect(screen.getByRole("status")).toHaveTextContent("Loading articles…");
  });

  it("shows articles, publication dates, and links in API order", async () => {
    // Given: the API returns valid articles, newest first
    mockGetArticles.mockResolvedValue([newerArticle, olderArticle]);

    // When: the visitor opens the blog section
    renderBlogSection();

    // Then: both article links are displayed
    const latestArticleLink = await screen.findByRole("link", {
      name: "My latest article",
    });

    const firstArticleLink = screen.getByRole("link", {
      name: "My first article",
    });

    expect(latestArticleLink).toBeVisible();
    expect(latestArticleLink).toHaveAttribute(
      "href",
      `/articles/${newerArticle.id}`,
    );

    expect(firstArticleLink).toBeVisible();
    expect(firstArticleLink).toHaveAttribute(
      "href",
      `/articles/${olderArticle.id}`,
    );

    // Both publication dates are represented by time elements
    expect(
      document.querySelector(`time[datetime="${newerArticle.publishedAt}"]`),
    ).toBeInTheDocument();

    expect(
      document.querySelector(`time[datetime="${olderArticle.publishedAt}"]`),
    ).toBeInTheDocument();

    // Articles retain the order returned by the API
    const titles = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);

    expect(titles).toEqual(["My latest article", "My first article"]);
  });

  it("shows an empty message when there are no articles", async () => {
    // Given: the API returns an empty array
    mockGetArticles.mockResolvedValue([]);

    // When: the visitor opens the blog section
    renderBlogSection();

    // Then: the empty-state message appears
    expect(await screen.findByText("No articles yet.")).toBeVisible();
  });

  it("shows an error and a retry button when the request fails", async () => {
    // Given: the API request fails
    mockGetArticles.mockRejectedValue(new Error("Network error"));

    // When: the visitor opens the blog section
    renderBlogSection();

    // Then: an error and a retry button appear
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "We couldn’t load the articles. Please try again.",
    );

    expect(screen.getByRole("button", { name: "Try again" })).toBeVisible();
  });

  it("retries the request when the visitor clicks Try again", async () => {
    // Given: the first request fails and the next succeeds
    mockGetArticles
      .mockRejectedValueOnce(new Error("Network error"))
      .mockResolvedValueOnce([newerArticle]);

    const user = userEvent.setup();

    renderBlogSection();

    expect(await screen.findByRole("alert")).toBeVisible();

    // When: the visitor retries
    await user.click(screen.getByRole("button", { name: "Try again" }));

    // Then: the article appears with the correct link
    const articleLink = await screen.findByRole("link", {
      name: "My latest article",
    });

    expect(articleLink).toBeVisible();
    expect(articleLink).toHaveAttribute("href", `/articles/${newerArticle.id}`);

    expect(mockGetArticles).toHaveBeenCalledTimes(2);
  });

  it("shows an error and no articles if response validation fails", async () => {
    // Given: the API service rejects invalid data after Zod validation
    mockGetArticles.mockRejectedValue(new Error("Invalid article response"));

    // When: the visitor opens the blog section
    renderBlogSection();

    // Then: the error appears and no article is displayed
    expect(await screen.findByRole("alert")).toBeVisible();

    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: "My latest article" }),
    ).not.toBeInTheDocument();
  });

  it("aborts the request when the component unmounts", async () => {
    // Given: the API request is still pending
    const deferred = createDeferred<Article[]>();
    let requestSignal: AbortSignal | undefined;

    mockGetArticles.mockImplementation((signal) => {
      requestSignal = signal;
      return deferred.promise;
    });

    const { unmount } = renderBlogSection();

    await waitFor(() => {
      expect(mockGetArticles).toHaveBeenCalledTimes(1);
    });

    // When: the visitor leaves the page
    unmount();

    // Then: the request is aborted
    expect(requestSignal?.aborted).toBe(true);

    // A late result must not update state after unmount
    deferred.resolve([newerArticle]);
    await deferred.promise;
  });
});
