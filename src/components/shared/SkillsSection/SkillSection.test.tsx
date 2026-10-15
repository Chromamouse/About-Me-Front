import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SkillsSection } from "./SkillsSection";

describe("SkillsSection", () => {
  describe("when all props are provided", () => {
    it("should render the section title", () => {
      render(
        <SkillsSection
          title="(02) Competencies"
          skills={["React", "TypeScript", "Python"]}
        />,
      );

      expect(screen.getByText("(02) Competencies")).toBeInTheDocument();
    });

    it("should render all skills", () => {
      render(
        <SkillsSection
          title="(02) Competencies"
          skills={["React", "TypeScript", "Python"]}
        />,
      );

      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Python")).toBeInTheDocument();
    });
  });

  describe("when the skills array is empty", () => {
    it("should render the title without skills", () => {
      render(<SkillsSection title="(02) Competencies" skills={[]} />);

      expect(screen.getByText("(02) Competencies")).toBeInTheDocument();
    });
  });
});
