"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PuffLoaderSpinner;
var _reactSpinners = require("react-spinners");
function PuffLoaderSpinner(_ref) {
  let {
    isLoading
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactSpinners.PuffLoader, {
    loading: isLoading
  });
}