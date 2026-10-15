import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SkillTag } from "./SkillTag";

describe("SkillTag", () => {
    describe("when a skill is provided", () => {
        it("should render the skill name", () => {
            render(<SkillTag label="React" />);

            expect(screen.getByText("React")).toBeInTheDocument();
        });

        it("should render different skill names", () => {
            render(<SkillTag label="TypeScript" />);

            expect(screen.getByText("TypeScript")).toBeInTheDocument();
        });
    });
});