"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Loaded = exports.Default = void 0;
var _PuffLoaderSpinner = _interopRequireDefault(require("./PuffLoaderSpinner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const meta = {
  title: "atom/PuffLoaderSpinner",
  component: _PuffLoaderSpinner.default,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Default = {
  args: {
    isLoading: true
  }
};
exports.Default = Default;
const Loaded = {
  args: {
    isLoading: false
  }
};
exports.Loaded = Loaded;