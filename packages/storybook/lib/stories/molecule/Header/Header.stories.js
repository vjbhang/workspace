"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("./Header");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = {
  title: "Molecule/Header",
  component: _Header.Header,
  parameters: {
    docs: {
      description: {
        component: "A header",
      },
    },
  },
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/ _react.default.createElement(_Header.Header, args);
};

var Default = Template.bind({});
exports.Default = Default;
