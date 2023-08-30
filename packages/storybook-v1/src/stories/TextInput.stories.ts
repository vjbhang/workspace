import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "./TextInput";

const meta = {
  title: "atom/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithPlaceholder = {
  args: {
    placeholder: "아이디 입력하세요",
  },
};

export const Error = {
  args: {
    error: true,
  },
};
