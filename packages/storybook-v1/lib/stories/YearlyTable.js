"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearlyTable = void 0;
require("core-js/modules/es.symbol.description.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const YearlyTable = _ref => {
  let {
    tableStyle,
    postureData,
    romData
  } = _ref;
  return /*#__PURE__*/React.createElement("table", {
    className: "border-separate w-full bg-gray-300 rounded-md text-center",
    style: _objectSpread({}, tableStyle)
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-gray-100"
  }, /*#__PURE__*/React.createElement("th", {
    className: "w-fit rounded-tl-md",
    style: grayBoxShadowStyle
  }, "\uAD6C\uBD84"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "1\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "2\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "3\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "4\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "5\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "6\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "7\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "8\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "9\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "10\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "11\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit",
    style: grayBoxShadowStyle
  }, "12\uC6D4"), /*#__PURE__*/React.createElement("th", {
    className: "w-fit rounded-tr-md",
    style: grayBoxShadowStyle
  }, "Total"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-white"
  }, /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, "Posture"), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[0]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[1]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[2]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[3]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[4]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[5]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[6]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[7]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[8]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[9]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[10]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[11]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, postureData[0] + postureData[1] + postureData[2] + postureData[3] + postureData[4] + postureData[5] + postureData[6] + postureData[7] + postureData[8] + postureData[9] + postureData[10] + postureData[11])), /*#__PURE__*/React.createElement("tr", {
    className: "bg-white"
  }, /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, "ROM"), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[0]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[1]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[2]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[3]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[4]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[5]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[6]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[7]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[8]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[9]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[10]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[11]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: whiteBoxShadowStyle
  }, romData[0] + romData[1] + romData[2] + romData[3] + romData[4] + romData[5] + romData[6] + romData[7] + romData[8] + romData[9] + romData[10] + romData[11])), /*#__PURE__*/React.createElement("tr", {
    className: "bg-gray-100"
  }, /*#__PURE__*/React.createElement("td", {
    className: "rounded-bl-md",
    style: grayBoxShadowStyle
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[0] + romData[0]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[1] + romData[1]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[2] + romData[2]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[3] + romData[3]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[4] + romData[4]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[5] + romData[5]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[6] + romData[6]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[7] + romData[7]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[8] + romData[8]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[9] + romData[9]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[10] + romData[10]), /*#__PURE__*/React.createElement("td", {
    className: "",
    style: grayBoxShadowStyle
  }, postureData[11] + romData[11]), /*#__PURE__*/React.createElement("td", {
    className: "rounded-br-md",
    style: grayBoxShadowStyle
  }, postureData[0] + postureData[1] + postureData[2] + postureData[3] + postureData[4] + postureData[5] + postureData[6] + postureData[7] + postureData[8] + postureData[9] + postureData[10] + postureData[11] + romData[0] + romData[1] + romData[2] + romData[3] + romData[4] + romData[5] + romData[6] + romData[7] + romData[8] + romData[9] + romData[10] + romData[11]))));
};
exports.YearlyTable = YearlyTable;
const whiteBoxShadowStyle = {
  boxShadow: "0 0 0 0.6px white"
};
const grayBoxShadowStyle = {
  boxShadow: "0 0 0 0.6px #F3F4F6"
};