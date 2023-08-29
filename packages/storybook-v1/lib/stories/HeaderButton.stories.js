"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Inactive = exports.ActiveCustomColor = exports.Active = void 0;
var _HeaderButton = require("./HeaderButton");
const meta = {
  title: "atom/HeaderButton",
  component: _HeaderButton.HeaderButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Active = {
  args: {
    label: "Label",
    selected: true
  }
};
exports.Active = Active;
const Inactive = {
  args: {
    label: "Label",
    selected: false
  }
};
exports.Inactive = Inactive;
const ActiveCustomColor = {
  args: {
    label: "Label",
    selected: true,
    selectedStyle: {
      backgroundColor: "violet"
    }
  }
};
exports.ActiveCustomColor = ActiveCustomColor;