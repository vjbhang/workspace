import type { Meta, StoryObj } from "@storybook/react";

import WaveLoading from "./WaveLoading";

const meta = {
  title: "atom/WaveLoading",
  component: WaveLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WaveLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
