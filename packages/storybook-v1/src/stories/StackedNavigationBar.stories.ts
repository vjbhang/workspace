import type { Meta, StoryObj } from "@storybook/react";

import { StackedNavigationBar } from "./StackedNavigationBar";

const meta = {
  title: "molecule/StackedNavigationBar",
  component: StackedNavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StackedNavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: ["Dashboard", "Group", "Employee"],
  },
};
