import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
    describe("when required props are provided", () => {
        it("should render the link label", () => {
            render(
                <LinkButton label="CONTACT ↗" href="mailto:test@example.com" />,
            );

            expect(
                screen.getByRole("link", { name: "CONTACT ↗" }),
            ).toBeInTheDocument();
        });

        it("should have the correct href", () => {
            render(
                <LinkButton label="CONTACT ↗" href="mailto:test@example.com" />,
            );

            expect(
                screen.getByRole("link", { name: "CONTACT ↗" }),
            ).toHaveAttribute("href", "mailto:test@example.com");
        });
    });

    describe("when the external prop is provided", () => {
        it("should render the external link", () => {
            render(
                <LinkButton
                    label="GITHUB ↗"
                    href="https://github.com/Chromamouse"
                    external
                />,
            );

            expect(
                screen.getByRole("link", { name: "GITHUB ↗" }),
            ).toHaveAttribute("href", "https://github.com/Chromamouse");
        });
    });
});