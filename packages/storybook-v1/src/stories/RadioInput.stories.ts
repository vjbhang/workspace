import type { Meta, StoryObj } from "@storybook/react";

import { RadioInput } from "./RadioInput";

const meta = {
  title: "atom/RadioInput",
  component: RadioInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "radio",
    options: ["모두", "여자", "남자"],
  },
};
