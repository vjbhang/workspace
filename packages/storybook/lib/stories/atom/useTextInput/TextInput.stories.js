"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextInput = require("./TextInput.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = {
  title: "Atom/useTextInput",
  component: _TextInput.TextInput,
  parameters: {
    docs: {
      description: {
        component: "An input with additional validation styling",
      },
    },
  },
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, args);
};

var Default = Template.bind({});
exports.Default = Default;
