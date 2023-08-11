import type { Meta, StoryObj } from "@storybook/react";

import { Multiselect } from "./Multiselect";

const meta = {
  title: "atom/Multiselect",
  component: Multiselect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Multiselect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["Small", "Medium", "Base", "Large", "X-Large"],
  },
};
