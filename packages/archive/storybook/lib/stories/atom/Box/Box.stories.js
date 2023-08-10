"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secondary = exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = require("./Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Atom/Box",
  component: _Box.Box,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Box.Box, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  backgroundColor: "green"
};