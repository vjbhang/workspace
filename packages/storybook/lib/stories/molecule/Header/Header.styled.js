"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderLanguageSign = exports.HeaderLanguageContainer = exports.HeaderMenuContainer = exports.HeaderNavLink = exports.HeaderLinksContainer = exports.HeaderLogoContainer = exports.HeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  height: 100px;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: white;\n  border-bottom: 1px solid #d0d0d0;\n  display: flex;\n  align-items: center;\n"])));

exports.HeaderContainer = HeaderContainer;

var HeaderLogoContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  width: 123px;\n  align-items: center;\n  justify-content: center;\n"])));

exports.HeaderLogoContainer = HeaderLogoContainer;

var HeaderLinksContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  width: 325px;\n  align-items: center;\n  justify-content: space-evenly;\n"])));

exports.HeaderLinksContainer = HeaderLinksContainer;

var HeaderNavLink = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: black;\n  :hover {\n    color: #bfbfbf;\n  }\n"])));

exports.HeaderNavLink = HeaderNavLink;

var HeaderMenuContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n  width: 190px;\n  margin-left: auto;\n  margin-right: 24px;\n"])));

exports.HeaderMenuContainer = HeaderMenuContainer;

var HeaderLanguageContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  width: 49px;\n"])));

exports.HeaderLanguageContainer = HeaderLanguageContainer;

var HeaderLanguageSign = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 54%);\n  font-size: 14px;\n"])));

exports.HeaderLanguageSign = HeaderLanguageSign;