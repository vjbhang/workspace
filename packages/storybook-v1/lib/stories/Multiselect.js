"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Multiselect = void 0;
require("core-js/modules/es.symbol.description.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const Multiselect = _ref => {
  let {
    options,
    containerStyle
  } = _ref;
  const mapOptions = options.map((item, index) => /*#__PURE__*/React.createElement("option", {
    value: item,
    key: index
  }, item));
  return /*#__PURE__*/React.createElement("select", {
    style: _objectSpread({
      boxShadow: "0px 0px 1px 0px rgba(134, 134, 134, 0.25)"
    }, containerStyle),
    className: "text-sm text-black pl-5 pr-3 w-fit h-6 rounded-md bg-gray-50 border border-gray-100 hover:bg-gray-100 focus:outline-none"
  }, mapOptions);
};
exports.Multiselect = Multiselect;