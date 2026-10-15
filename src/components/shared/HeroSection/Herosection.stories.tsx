import type { Meta, StoryObj } from "@storybook/react-vite";

import { HeroSection } from "./HeroSection";

const meta = {
  title: "Components/Sections/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    intro: "Hello, I'm",
    name: "Dawid Małek",
    description:
      "I study programming at a technical school in Poland. I enjoy creating video games and console applications, and I also have a passion for music and sound design.",
    imageSrc: "/src/assets/images/profile.jpg",
    imageAlt: "Portrait of Dawid Małek",
  },
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShortDescription: Story = {
  args: {
    description: "Developer, game creator, and music enthusiast.",
  },
};

export const LongName: Story = {
  args: {
    name: "Alexander Example",
  },
};

export const DifferentIntro: Story = {
  args: {
    intro: "Welcome to my portfolio",
  },
};
