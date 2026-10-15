import type { Meta, StoryObj } from "@storybook/react-vite";

import { LinkButton } from "./LinkButton";

const meta = {
    title: "Components/Shared/LinkButton",
    component: LinkButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        label: "CONTACT ↗",
        href: "mailto:example@example.com",
    },
    argTypes: {
        label: {
            control: "text",
        },
        href: {
            control: "text",
        },
        external: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contact: Story = {};

export const GitHub: Story = {
    args: {
        label: "GITHUB ↗",
        href: "https://github.com/Chromamouse",
        external: true,
    },
};

export const LongLabel: Story = {
    args: {
        label: "VIEW MY PROJECTS ↗",
        href: "https://example.com",
        external: true,
    },
};

export const WithoutExternalBehavior: Story = {
    args: {
        label: "INTERNAL LINK",
        href: "/about",
        external: false,
    },
};