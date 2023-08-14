"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioInput = void 0;
const RadioInput = _ref => {
  let {
    name,
    options
  } = _ref;
  const mappedOptions = options.map((item, index) => {
    return /*#__PURE__*/React.createElement("label", {
      className: "flex items-center gap-2",
      key: index
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: item
    }), /*#__PURE__*/React.createElement("p", null, item));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "w-fit flex gap-6"
  }, mappedOptions);
};
exports.RadioInput = RadioInput;