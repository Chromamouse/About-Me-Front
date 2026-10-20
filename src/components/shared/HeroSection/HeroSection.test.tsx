import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  const props = {
    intro: "Hello, I'm",
    name: "Dawid Małek",
    description: "I enjoy creating video games and applications.",
    imageSrc: "/profile.jpg",
    imageAlt: "Portrait of Dawid Małek",
  };

  describe("when all props are provided", () => {
    it("should render the introduction", () => {
      render(<HeroSection {...props} />);

      expect(screen.getByText(props.intro)).toBeInTheDocument();
    });

    it("should render the name", () => {
      render(<HeroSection {...props} />);

      expect(screen.getByText(props.name)).toBeInTheDocument();
    });

    it("should render the description", () => {
      render(<HeroSection {...props} />);

      expect(screen.getByText(props.description)).toBeInTheDocument();
    });

    it("should render the profile image", () => {
      render(<HeroSection {...props} />);

      const image = screen.getByRole("img", {
        name: props.imageAlt,
      });

      expect(image).toHaveAttribute("src", props.imageSrc);
      expect(image).toHaveAttribute("alt", props.imageAlt);
    });
  });
});
