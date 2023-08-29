"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandedSelectButton = void 0;
require("core-js/modules/es.symbol.description.js");
var _image = _interopRequireDefault(require("next/image"));
var _expand_more = _interopRequireDefault(require("../../public/expand_more.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const BrandedSelectButton = _ref => {
  let {
    options,
    active,
    containerStyle,
    dropdownStyle
  } = _ref;
  const mapOptions = options.map((item, index) => /*#__PURE__*/React.createElement("option", {
    value: item,
    key: index
  }, item));
  function DropDown() {
    if (active) {
      return /*#__PURE__*/React.createElement("div", {
        style: _objectSpread({
          boxShadow: "0px 0px 4px 0px rgba(134, 134, 134, 0.25)"
        }, dropdownStyle),
        className: "w-40 h-fit mt-2 rounded-md overflow-hidden"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-gray-50 text-left flex flex-col justify-center h-16 pl-3 pr-3 bg-gray-800"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-bold"
      }, "\uACF5\uC7A5 A"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs"
      }, "\uCD1D: 1,263 \uBA85"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs"
      }, "\uAC80: 623 \uBA85")), /*#__PURE__*/React.createElement("div", {
        className: "text-left flex flex-col justify-center h-16 pl-3 pr-3 bg-white border-b"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-bold"
      }, "\uACF5\uC7A5 B"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs"
      }, "\uCD1D: 1,263 \uBA85"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs"
      }, "\uAC80: 623 \uBA85")), /*#__PURE__*/React.createElement("div", {
        className: "text-left flex flex-col justify-center h-16 pl-3 pr-3 bg-white"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-bold"
      }, "\uACF5\uC7A5 C"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs"
      }, "\uCD1D: 1,263 \uBA85"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs"
      }, "\uAC80: 623 \uBA85")));
    } else return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-end h-fit w-fit"
  }, /*#__PURE__*/React.createElement("button", {
    style: _objectSpread({
      boxShadow: "0px 0px 1px 0px rgba(134, 134, 134, 0.25)"
    }, containerStyle),
    className: "flex text-sm text-black pl-3 w-fit h-16 rounded-md bg-gray-50 border border-gray-100 hover:bg-gray-100 focus:outline-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-left flex flex-col justify-center h-full pr-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold"
  }, "\uACF5\uC7A5 A"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs"
  }, "\uCD1D: 1,263 \uBA85"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs"
  }, "\uAC80: 623 \uBA85")), /*#__PURE__*/React.createElement("div", {
    className: "flex ml-auto justify-center items-center w-fit h-full p-1 border-l"
  }, /*#__PURE__*/React.createElement(_image.default, {
    src: _expand_more.default,
    alt: "expand menu selection"
  }))), /*#__PURE__*/React.createElement(DropDown, null));
};
exports.BrandedSelectButton = BrandedSelectButton;