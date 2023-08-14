"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.XLarge = exports.Small = exports.Medium = exports.Large = exports.CustomizedButton = void 0;
var _Button = require("./Button");
const meta = {
  title: "atom/Button",
  component: _Button.Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
var _default = meta;
exports.default = _default;
const Small = {
  args: {
    size: "small",
    label: "Button"
  }
};
exports.Small = Small;
const Medium = {
  args: {
    label: "Button"
  }
};
exports.Medium = Medium;
const Large = {
  args: {
    size: "large",
    label: "Button"
  }
};
exports.Large = Large;
const XLarge = {
  args: {
    size: "xlarge",
    label: "Button"
  }
};
exports.XLarge = XLarge;
const CustomizedButton = {
  args: {
    label: "Button",
    textStyle: {
      color: "white"
    },
    backgroundColor: "black",
    containerStyle: {
      borderColor: "grey"
    }
  }
};
exports.CustomizedButton = CustomizedButton;