import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    label: "Button",
  },
};

export const Base: Story = {
  args: {
    size: "base",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const XLarge: Story = {
  args: {
    size: "xlarge",
    label: "Button",
  },
};

export const CustomizedButton: Story = {
  args: {
    label: "Button",
    textStyle: { color: "white" },
    backgroundColor: "black",
    containerStyle: { borderColor: "grey" },
  },
};
