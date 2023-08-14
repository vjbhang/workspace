"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithPlaceholder = exports.Error = exports.Default = void 0;
var _TextInput = require("./TextInput");
const meta = {
  title: "atom/TextInput",
  component: _TextInput.TextInput,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Default = {
  args: {
    value: "Hello World"
  }
};
exports.Default = Default;
const WithPlaceholder = {
  args: {
    placeholder: "아이디 입력하세요"
  }
};
exports.WithPlaceholder = WithPlaceholder;
const Error = {
  args: {
    value: "Hello World",
    error: true
  }
};
exports.Error = Error;