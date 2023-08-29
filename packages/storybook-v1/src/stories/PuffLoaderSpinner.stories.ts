import type { Meta, StoryObj } from "@storybook/react";

import { PuffLoaderSpinner } from "./PuffLoaderSpinner";

const meta = {
  title: "atom/PuffLoaderSpinner",
  component: PuffLoaderSpinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PuffLoaderSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: true,
  },
};

export const Loaded: Story = {
  args: {
    isLoading: false,
  },
};
