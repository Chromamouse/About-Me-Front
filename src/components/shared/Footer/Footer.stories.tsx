import type { Meta, StoryObj } from "@storybook/react-vite";

import { Footer } from "./Footer";

const meta = {
  title: "Components/Sections/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    copyright: "© 2026 Dawid Małek",
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DifferentYear: Story = {
  args: {
    copyright: "© 2030 Dawid Małek",
  },
};
