import type { Meta, StoryObj } from "@storybook/react-vite";

import { SkillsSection } from "./SkillsSection";

const meta = {
    title: "Components/Sections/SkillsSection",
    component: SkillsSection,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        title: "(02) Competencies",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Web Design",
            "Java",
            "Python",
            "Linux",
        ],
    },
} satisfies Meta<typeof SkillsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FewSkills: Story = {
    args: {
        skills: ["React", "TypeScript", "Python"],
    },
};

export const ManySkills: Story = {
    args: {
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Web Design",
            "Java",
            "Python",
            "Linux",
            "C++",
            "Git",
            "Linux Administration",
            "Sound Design",
        ],
    },
};

export const NoSkills: Story = {
    args: {
        skills: [],
    },
};