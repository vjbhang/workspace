"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _RadioInput = require("./RadioInput");
const meta = {
  title: "atom/RadioInput",
  component: _RadioInput.RadioInput,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Default = {
  args: {
    name: "radio",
    options: ["모두", "여자", "남자"]
  }
};
exports.Default = Default;