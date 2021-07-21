"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderLanguageSign = exports.SubLinksRightSide = exports.Address = exports.SubLinksWrapper = exports.SubLinksContainer = exports.Link = exports.LinksSubcontainer = exports.LinksWrapper = exports.LinksContainer = exports.Container = exports.Column = exports.Row = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var innerPaddingHorizontal = "5%";
var background = "white";

var Row = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));

exports.Row = Row;

var Column = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));

exports.Column = Column;
var Container = (0, _styledComponents.default)(Column)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 423px;\n  width: 100%;\n"])));
exports.Container = Container;

var LinksContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 308px;\n  width: 100%;\n  background-color: ", ";\n  border-bottom: 1px solid #d0d0d0;\n"])), background);

exports.LinksContainer = LinksContainer;
var LinksWrapper = (0, _styledComponents.default)(Column)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  justify-content: start;\n  align-items: start;\n  background-color: ", ";\n  height: 80%;\n  width: 168px;\n"])), background);
exports.LinksWrapper = LinksWrapper;
var LinksSubcontainer = (0, _styledComponents.default)(Row)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  justify-content: start;\n  gap: 23px;\n  height: 100%;\n  padding: 0% ", ";\n  padding-top: 7px;\n"])), innerPaddingHorizontal);
exports.LinksSubcontainer = LinksSubcontainer;

var Link = _styledComponents.default.a(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  padding-bottom: 10px;\n  :hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.size || "14px";
}, function (props) {
  return props.color || "black";
}, function (props) {
  return props.bold ? "bold" : "normal";
});

exports.Link = Link;
var SubLinksContainer = (0, _styledComponents.default)(Column)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  align-items: initial;\n  height: 115px;\n  width: 100%;\n  background-color: ", ";\n"])), background);
exports.SubLinksContainer = SubLinksContainer;
var SubLinksWrapper = (0, _styledComponents.default)(Row)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 0% ", ";\n  margin-top: 22px;\n  align-items: center;\n  gap: 11px;\n"])), innerPaddingHorizontal);
exports.SubLinksWrapper = SubLinksWrapper;

var Address = _styledComponents.default.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n"])));

exports.Address = Address;
var SubLinksRightSide = (0, _styledComponents.default)(Row)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-left: auto;\n  gap: ", ";\n"])), function (props) {
  return props.gap || "27px";
});
exports.SubLinksRightSide = SubLinksRightSide;

var HeaderLanguageSign = _styledComponents.default.p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 54%);\n  font-size: 14px;\n"])));

exports.HeaderLanguageSign = HeaderLanguageSign;