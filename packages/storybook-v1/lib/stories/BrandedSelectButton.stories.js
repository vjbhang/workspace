"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Active = void 0;
var _BrandedSelectButton = require("./BrandedSelectButton");
const meta = {
  title: "atom/BrandedSelectButton",
  component: _BrandedSelectButton.BrandedSelectButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Default = {
  args: {
    active: false,
    options: ["Small", "Medium", "Base", "Large", "X-Large"]
  }
};
exports.Default = Default;
const Active = {
  args: {
    active: true,
    options: ["Small", "Medium", "Base", "Large", "X-Large"]
  }
};
exports.Active = Active;