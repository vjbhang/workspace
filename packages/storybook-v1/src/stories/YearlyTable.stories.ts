import type { Meta, StoryObj } from "@storybook/react";

import { YearlyTable } from "./YearlyTable";

const meta = {
  title: "atom/YearlyTable",
  component: YearlyTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof YearlyTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
