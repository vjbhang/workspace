"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = require("./Input");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = {
  title: "Atom/Input",
  component: _Input.Input,
  parameters: {
    docs: {
      description: {
        component: "An input specifically for identification handle",
      },
    },
  },
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/ _react.default.createElement(_Input.Input, null);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "Text",
};
