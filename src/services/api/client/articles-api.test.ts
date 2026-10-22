import { beforeEach, describe, expect, it, vi } from "vitest";

const { mockGet } = vi.hoisted(() => ({
    mockGet: vi.fn(),
}));

vi.mock("./axios-client", () => ({
    axiosClient: {
        get: mockGet,
    },
}));

import { getArticles } from "./articles-api";

describe("getArticles", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    const articles = [
        {
            id: "550e8400-e29b-41d4-a716-446655440001",
            title: "Older article",
            text: "Older article content",
            publishedAt: "2024-01-01T10:00:00.000Z",
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440002",
            title: "Newer article",
            text: "Newer article content",
            publishedAt: "2025-01-01T10:00:00.000Z",
        },
    ];

    it("fetches articles and sorts them newest first", async () => {
        mockGet.mockResolvedValue({ data: articles });

        const result = await getArticles();

        expect(mockGet).toHaveBeenCalledWith("/api/v1/articles", {
            signal: undefined,
        });
        expect(result.map((article) => article.id)).toEqual([
            "550e8400-e29b-41d4-a716-446655440002",
            "550e8400-e29b-41d4-a716-446655440001",
        ]);

        // The original array remains unchanged.
        expect(articles[0].title).toBe("Older article");
    });

    it("passes an AbortSignal to Axios", async () => {
        const controller = new AbortController();
        mockGet.mockResolvedValue({ data: [] });

        await getArticles(controller.signal);

        expect(mockGet).toHaveBeenCalledWith("/api/v1/articles", {
            signal: controller.signal,
        });
    });

    it("propagates request errors", async () => {
        mockGet.mockRejectedValue(new Error("Network error"));

        await expect(getArticles()).rejects.toThrow("Network error");
    });

    it("rejects invalid article data", async () => {
        mockGet.mockResolvedValue({
            data: [
                {
                    id: "not-a-uuid",
                    title: "Invalid article",
                    text: "Invalid content",
                    publishedAt: "not-a-date",
                },
            ],
        });

        await expect(getArticles()).rejects.toThrow();
    });
});
