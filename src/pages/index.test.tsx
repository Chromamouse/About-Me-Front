import { render, screen } from "@testing-library/react";
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

    expect(screen.getByRole("link", { name: /CONTACT/i })).toHaveAttribute(
      "href",
      "mailto:dawid.malek13@gmail.com",
    );

    expect(screen.getByRole("link", { name: /GITHUB/i })).toHaveAttribute(
      "href",
      "https://github.com/Chromamouse",
    );
  });

  it("renders the two content images", () => {
    render(<Index />);

    expect(
      screen.getByRole("img", { name: /Portrait of Dawid Małek/i }),
    ).toBeInTheDocument();
  });
});
