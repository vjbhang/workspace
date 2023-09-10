import type { Meta, StoryObj } from "@storybook/react";

import { ReactSelect } from "./ReactSelect";

const meta = {
  title: "atom/ReactSelect",
  component: ReactSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ReactSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ],
  },
};
