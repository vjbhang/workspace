"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactSelect = ReactSelect;
var _reactSelect = _interopRequireDefault(require("react-select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ReactSelect(_ref) {
  let {
    options
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactSelect.default, {
    options: options,
    isSearchable: false
  });
}