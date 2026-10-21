
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Components/Sections/BlogSection",
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const VisualPreview: Story = {
    render: () => (
        <section
            aria-labelledby="blog-heading"
            className="min-w-0 py-8 px-6"
        >
            <h2 id="blog-heading" className="text-2xl font-bold">
                My articles
            </h2>

            <ul className="mt-4 space-y-4">
                <li className="min-w-0 border-b pb-4">
                    <h3 className="break-words [overflow-wrap:anywhere]">
                        Getting Started with React
                    </h3>
                    <time dateTime="2026-10-01">
                        October 1, 2026
                    </time>
                </li>

                <li className="min-w-0 border-b pb-4">
                    <h3 className="break-words [overflow-wrap:anywhere]">
                        Building Accessible Interfaces
                    </h3>
                    <time dateTime="2026-09-15">
                        September 15, 2026
                    </time>
                </li>

                <li className="min-w-0 border-b pb-4">
                    <h3 className="break-words [overflow-wrap:anywhere]">
                        My Journey as a Developer
                    </h3>
                    <time dateTime="2026-08-20">
                        August 20, 2026
                    </time>
                </li>
            </ul>
        </section>
    ),
};

export const NoArticles: Story = {
    render: () => (
        <section
            aria-labelledby="blog-heading"
            className="min-w-0 py-8 px-6"
        >
            <h2 id="blog-heading" className="text-2xl font-bold">
                My articles
            </h2>
            <p className="mt-4">
                No articles yet.
            </p>
        </section>
    ),
};
