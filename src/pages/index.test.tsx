import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Index from "./_index.tsx";

describe("<Index />", () => {
    it("renders the portfolio owner's name", () => {
        render(<Index />);

        expect(
            screen.getByRole("heading", { name: /Dawid Małek/i }),
        ).toBeInTheDocument();
    });

    it("renders the introduction", () => {
        render(<Index />);

        expect(
            screen.getByText(/I study programming at a technical school in Poland/i),
        ).toBeInTheDocument();
    });

    it("has working contact link destinations", () => {
        render(<Index />);

        expect(
            screen.getByRole("link", { name: /CONTACT/i }),
        ).toHaveAttribute("href", "mailto:dawid.malek13@gmail.com");

        expect(
            screen.getByRole("link", { name: /GITHUB/i }),
        ).toHaveAttribute("href", "https://github.com/Chromamouse");
    });

    it("displays the competency badges", () => {
        render(<Index />);

        for (const skill of [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Java",
            "JavaScript",
        ]) {
            expect(screen.getByText(skill)).toBeInTheDocument();
        }
    });

    it("renders the two content images", () => {
        render(<Index />);

        expect(
            screen.getByRole("img", { name: /Portrait of Dawid Małek/i }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole("img", { name: /photo of a electricity pole/i }),
        ).toBeInTheDocument();
    });
});