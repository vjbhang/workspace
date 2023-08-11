import type { Meta, StoryObj } from "@storybook/react";

import { BrandedSelectButton } from "./BrandedSelectButton";

const meta = {
  title: "atom/BrandedSelectButton",
  component: BrandedSelectButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BrandedSelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: false,
    options: ["Small", "Medium", "Base", "Large", "X-Large"],
  },
};

export const Active: Story = {
  args: {
    active: true,
    options: ["Small", "Medium", "Base", "Large", "X-Large"],
  },
};
