"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("./Header.styled");

var _md = require("react-icons/md");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Header = function Header(_ref) {
  var navigationLinks = _ref.navigationLinks;
  var links = navigationLinks || ["About", "News", "Photo", "Video"];
  var navBar = links.map(function (item) {
    return /*#__PURE__*/ _react.default.createElement(
      _reactRouterDom.Link,
      {
        to: "/" + item,
        style: {
          textDecoration: "none",
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        _Header.HeaderNavLink,
        null,
        item
      )
    );
  });
  return /*#__PURE__*/ _react.default.createElement(
    _Header.HeaderContainer,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _Header.HeaderLogoContainer,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: "/",
        },
        /*#__PURE__*/ _react.default.createElement(_md.MdImage, {
          title: "logo",
          size: "65px",
          color: "rgba(0,0,0,54%)",
        })
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      _Header.HeaderLinksContainer,
      null,
      navBar
    ),
    /*#__PURE__*/ _react.default.createElement(
      _Header.HeaderMenuContainer,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _Header.HeaderLanguageContainer,
        null,
        /*#__PURE__*/ _react.default.createElement(_md.MdLanguage, {
          title: "language_menu",
          size: "24px",
          color: "rgba(0,0,0,54%)",
        }),
        /*#__PURE__*/ _react.default.createElement(
          _Header.HeaderLanguageSign,
          null,
          "EN"
        )
      ),
      /*#__PURE__*/ _react.default.createElement(_md.MdMenu, {
        title: "menu",
        size: "36px",
        color: "rgba(0,0,0,54%)",
      })
    )
  );
};

exports.Header = Header;
