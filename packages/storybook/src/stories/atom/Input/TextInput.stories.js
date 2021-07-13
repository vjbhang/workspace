import React from "react";
import { TextInput } from "./TextInput.js";

export default {
  title: "Atom/useTextInput",
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: "An input with additional validation styling",
      },
    },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
