import type { Meta, StoryObj } from "@storybook/react-vite";

import { AboutSection } from "./AboutSection";

const meta = {
    title: "Components/Sections/AboutSection",
    component: AboutSection,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        title: "(01) A bit more about me",
        description:
            'I developed my own video game called "Second Gravity", and worked with the Raspberry Pi as a hobby project. I am currently learning sound design, synthesis, and music production. In the future, I hope to combine my hobbies and program VST plugins or help write operating systems for instruments.',
        imageSrc: "/src/assets/images/static1.jpg",
        imageAlt: "A photo of an electricity pole",
    },
} satisfies Meta<typeof AboutSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShortDescription: Story = {
    args: {
        description: "I enjoy programming, making games, and producing music.",
    },
};

export const DifferentTitle: Story = {
    args: {
        title: "(01) About me",
    },
};