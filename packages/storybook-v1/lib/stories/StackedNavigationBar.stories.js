"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _StackedNavigationBar = require("./StackedNavigationBar");
const meta = {
  title: "molecule/StackedNavigationBar",
  component: _StackedNavigationBar.StackedNavigationBar,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Default = {
  args: {
    links: ["Dashboard", "Group", "Employee"]
  }
};
exports.Default = Default;