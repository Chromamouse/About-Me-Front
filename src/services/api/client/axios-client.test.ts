import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { mockCreate } = vi.hoisted(() => ({
  mockCreate: vi.fn(),
}));

vi.mock("axios", () => ({
  default: {
    create: mockCreate,
  },
}));

describe("axios-client", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("throws when VITE_API_BASE_URL is missing", async () => {
    vi.stubEnv("VITE_API_BASE_URL", "");

    await expect(import("./axios-client")).rejects.toThrow(
      "VITE_API_BASE_URL is not configured",
    );

    expect(mockCreate).not.toHaveBeenCalled();
  });

  it("creates an Axios client with the expected configuration", async () => {
    const client = { get: vi.fn() };

    vi.stubEnv("VITE_API_BASE_URL", "https://api.example.com");
    mockCreate.mockReturnValue(client);

    const { axiosClient } = await import("./axios-client");

    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: "https://api.example.com",
      timeout: 10_000,
      headers: {
        Accept: "application/json",
      },
    });

    expect(axiosClient).toBe(client);
  });
});
