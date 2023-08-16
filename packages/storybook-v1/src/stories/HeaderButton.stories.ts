import type { Meta, StoryObj } from "@storybook/react";

import { HeaderButton } from "./HeaderButton";

const meta = {
  title: "atom/HeaderButton",
  component: HeaderButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    label: "Label",
    selected: true,
  },
};

export const Inactive: Story = {
  args: {
    label: "Label",
    selected: false,
  },
};

export const ActiveCustomColor: Story = {
  args: {
    label: "Label",
    selected: true,
    selectedStyle: { backgroundColor: "violet" },
  },
};
