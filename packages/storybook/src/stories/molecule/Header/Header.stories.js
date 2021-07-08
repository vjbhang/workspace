import React from "react";
import { Header } from "./Header";

export default {
  title: "Molecule/Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component: "A header",
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
