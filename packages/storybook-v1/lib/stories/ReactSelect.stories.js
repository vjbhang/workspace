"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _ReactSelect = require("./ReactSelect");
const meta = {
  title: "atom/ReactSelect",
  component: _ReactSelect.ReactSelect,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Default = {
  args: {
    options: [{
      value: "chocolate",
      label: "Chocolate"
    }, {
      value: "strawberry",
      label: "Strawberry"
    }, {
      value: "vanilla",
      label: "Vanilla"
    }]
  }
};
exports.Default = Default;