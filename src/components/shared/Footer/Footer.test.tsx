import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
    describe("when the copyright prop is provided", () => {
        it("should render the copyright text", () => {
            render(<Footer copyright="© 2026 Dawid Małek" />);

            expect(
                screen.getByText("© 2026 Dawid Małek"),
            ).toBeInTheDocument();
        });
    });
});