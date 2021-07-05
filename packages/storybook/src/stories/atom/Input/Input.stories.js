import React from "react";
import { Input } from "./Input";

export default {
  title: "Atom/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "An input specifically for identification handle",
      },
    },
  },
};

const Template = (args) => <Input />;

export const Default = Template.bind({});

Default.args = {
  type: "Text",
};
