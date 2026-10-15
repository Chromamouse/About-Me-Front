import type { Meta, StoryObj } from "@storybook/react-vite";

import { SkillTag } from "./SkillTag.tsx";

const meta = {
    title: "Components/Shared/SkillTag",
    component: SkillTag,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        label: "React",
    },
} satisfies Meta<typeof SkillTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TypeScript: Story = {
    args: {
        label: "TypeScript",
    },
};

export const Python: Story = {
    args: {
        label: "Python",
    },
};

export const LongLabel: Story = {
    args: {
        label: "Sound Design and Music Production",
    },
};

export const EmptyLabel: Story = {
    args: {
        label: "",
    },
};