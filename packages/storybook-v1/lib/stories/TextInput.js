"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;
const TextInput = _ref => {
  let {
    value,
    error,
    placeholder,
    inputStyle
  } = _ref;
  if (error) {
    return /*#__PURE__*/React.createElement("div", {
      className: "w-56"
    }, /*#__PURE__*/React.createElement("input", {
      value: value,
      type: "text",
      className: "p-1 w-full rounded-md border focus:outline-none text-base border-red-600",
      style: inputStyle,
      placeholder: placeholder
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-wrap w-full text-red-600"
    }, "\uC544\uC774\uB514(\uB85C\uADF8\uC778 \uC804\uC6A9 \uC544\uC774\uB514) \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uB97C \uC798\uBABB \uC785\uB825\uD588\uC2B5\uB2C8\uB2E4.\uC785\uB825\uD558\uC2E0 \uB0B4\uC6A9\uC744 \uB2E4\uC2DC \uD655\uC778\uD574\uC8FC\uC138\uC694."));
  } else {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      value: value,
      type: "text",
      className: "p-1 rounded-md border-gray-200 border focus:outline-none text-base",
      style: inputStyle,
      placeholder: placeholder
    }));
  }
};
exports.TextInput = TextInput;