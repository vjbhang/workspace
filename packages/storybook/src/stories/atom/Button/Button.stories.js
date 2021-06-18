import React from "react";
import { Button } from "./Button";
import { MdBuild } from "react-icons/md";

export default {
  title: "Atom/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: "A button",
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const IconOnRight = Template.bind({});
IconOnRight.storyName = "Icon on Right";
IconOnRight.args = {
  label: "Button",
  right: true,
  icon: <MdBuild size={14} />,
};

IconOnRight.story = {
  parameters: {
    docs: {
      storyDescription:
        "Icon defaults to right if the `icon` prop is present regardless of a `right` prop.",
    },
  },
};

export const IconOnLeft = Template.bind({});
IconOnLeft.storyName = "Icon on Left";
IconOnLeft.args = {
  label: "Button",
  left: true,
  icon: <MdBuild size={14} />,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnly: true,
  icon: <MdBuild size={14} />,
};
