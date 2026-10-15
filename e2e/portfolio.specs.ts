import { expect, test } from "@playwright/test";

test.describe("Portfolio homepage", () => {
  test.beforeEach(async ({ page }) => {
    // Open the website before each test.
    await page.goto("/");
  });

  test("shows the portfolio owner's name", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Dawid Małek/i }),
    ).toBeVisible();
  });

  test("shows the introduction", async ({ page }) => {
    await expect(
      page.getByText(/I study programming at a technical school in Poland/i),
    ).toBeVisible();
  });

  test("has the correct contact links", async ({ page }) => {
    await expect(page.getByRole("link", { name: /CONTACT/i })).toHaveAttribute(
      "href",
      "mailto:dawid.malek13@gmail.com",
    );

    await expect(page.getByRole("link", { name: /GITHUB/i })).toHaveAttribute(
      "href",
      "https://github.com/Chromamouse",
    );
  });

  test("displays the competency badges", async ({ page }) => {
    for (const skill of [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "JavaScript",
    ]) {
      await expect(page.getByText(skill, { exact: true })).toBeVisible();
    }
  });

  test("loads both images", async ({ page }) => {
    const images = page.getByRole("img");

    await expect(images).toHaveCount(2);

    for (const image of await images.all()) {
      await expect(image).toBeVisible();

      await expect
        .poll(() => image.evaluate((img: HTMLImageElement) => img.naturalWidth))
        .toBeGreaterThan(0);
    }
  });
});

test.describe("Responsive layout", () => {
  test("does not overflow horizontally on mobile", async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 812,
    });

    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /Dawid Małek/i }),
    ).toBeVisible();

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });

  test("shows the main content on desktop", async ({ page }) => {
    await page.setViewportSize({
      width: 1440,
      height: 900,
    });

    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /Dawid Małek/i }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /Competencies/i }),
    ).toBeVisible();
  });
});
