import React from "react";
import { Box } from "./Box";

export default {
  title: "Atom/Box",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Box {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "green",
};
