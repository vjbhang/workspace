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

export const Default: Story = {
  args: {
    postureData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    romData: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
  },
};

export const Wide: Story = {
  args: {
    postureData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    romData: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
    tableStyle: {
      width: "80vw",
      height: "25vw",
    },
  },
};
