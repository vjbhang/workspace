import React from "react";
import { Footer } from "./index";

export default {
  title: "Molecule/Footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: "A footer",
      },
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
