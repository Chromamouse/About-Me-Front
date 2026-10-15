import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutSection } from "./AboutSection";

describe("AboutSection", () => {
  const props = {
    title: "(01) A bit more about me",
    description: "I enjoy programming and music production.",
    imageSrc: "/test-image.jpg",
    imageAlt: "A photo of an electricity pole",
  };

  describe("when all props are provided", () => {
    it("should render the title", () => {
      render(<AboutSection {...props} />);

      expect(screen.getByText(props.title)).toBeInTheDocument();
    });

    it("should render the description", () => {
      render(<AboutSection {...props} />);

      expect(screen.getByText(props.description)).toBeInTheDocument();
    });

    it("should render the image with the correct attributes", () => {
      render(<AboutSection {...props} />);

      const image = screen.getByRole("img", {
        name: props.imageAlt,
      });

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", props.imageSrc);
      expect(image).toHaveAttribute("alt", props.imageAlt);
    });
  });
});
