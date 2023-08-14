"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _Multiselect = require("./Multiselect");
const meta = {
  title: "atom/Multiselect",
  component: _Multiselect.Multiselect,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Default = {
  args: {
    options: ["Small", "Medium", "Base", "Large", "X-Large"]
  }
};
exports.Default = Default;