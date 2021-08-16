"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Box = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var Box = function Box(_ref) {
  var backgroundColor = _ref.backgroundColor;
  return /*#__PURE__*/ _react.default.createElement(Container, {
    backgroundColor: backgroundColor,
  });
};

exports.Box = Box;

var Container = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      "\n  height: 100px;\n  width: 100px;\n  background-color: ",
      ";\n",
    ])),
  function (props) {
    return props.backgroundColor || "pink";
  }
);

Box.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Box",
};
