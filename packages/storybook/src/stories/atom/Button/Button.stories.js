import React from "react";
import { Button } from "./Button";

export default {
  title: "Atom/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "grey",
};
