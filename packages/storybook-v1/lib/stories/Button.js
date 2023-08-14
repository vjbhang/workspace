"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
const _excluded = ["label", "backgroundColor", "size", "containerStyle", "textStyle"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Primary UI component for user interaction
 */
const Button = _ref => {
  let {
      label,
      backgroundColor,
      size = "medium",
      containerStyle,
      textStyle
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const setContainerTo = () => {
    switch (size) {
      case "small":
        return {
          height: "1.25rem"
        };
      case "medium":
        return null;
      case "large":
        return {
          height: "3rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem"
        };
      case "xlarge":
        return {
          height: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem"
        };
    }
  };
  const setTextTo = () => {
    switch (size) {
      case "small":
        return {
          fontSize: "0.75rem",
          lineHeight: "1rem"
        };
      case "medium":
        return null;
      case "base":
        return {
          fontSize: "1rem",
          lineHeight: "1.5rem"
        };
      case "large":
        return {
          fontSize: "1.125rem",
          lineHeight: "1.75rem"
        };
      case "xlarge":
        return {
          fontSize: "1.25rem",
          lineHeight: "1.75rem"
        };
    }
  };
  let containerStyles = _objectSpread(_objectSpread({
    backgroundColor: backgroundColor
  }, setContainerTo()), containerStyle);
  let textStyles = _objectSpread(_objectSpread({}, setTextTo()), textStyle);
  return /*#__PURE__*/_react.default.createElement("button", {
    style: _objectSpread({
      boxShadow: "0px 0px 1px 0px rgba(134, 134, 134, 0.25)"
    }, containerStyles),
    className: "px-4 w-fit h-6 rounded-md bg-gray-50 border border-gray-100 hover:bg-gray-100",
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: _objectSpread({}, textStyles),
    className: "text-center text-sm text-black"
  }, label));
};
exports.Button = Button;