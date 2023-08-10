"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _Footer = require("./Footer.styled");

var _si = require("react-icons/si");

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  function listLinks(array) {
    var result = array.map(function (item, index) {
      if (index == 0) {
        return /*#__PURE__*/_react.default.createElement(_Footer.Link, {
          size: "16px",
          bold: true
        }, item);
      } else {
        return /*#__PURE__*/_react.default.createElement(_Footer.Link, null, item);
      }
    });
    return result;
  }

  var about = ["About", "Company", "Announcement", "Employment", "Awards & Recognition"];
  var explore = ["Explore", "Customers", "Blog"];
  var resources = ["Resources", "Support", "Downloads", "Insight", "Careers"];
  var customerSupport = ["Customer Support", "Contact", "Technical Support", "Security Report Center", "Privacy Violation Report"];

  function listSublinks(array) {
    var result = array.map(function (item, index) {
      if (item == array[array.length - 1]) {
        return /*#__PURE__*/_react.default.createElement(_Footer.Link, {
          style: {
            paddingBottom: "0px"
          }
        }, item);
      } else return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Footer.Link, {
        style: {
          paddingBottom: "0px"
        }
      }, item), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRight: "1px solid black",
          height: "16px"
        }
      }));
    });
    return result;
  }

  var subLinks = ["Privacy", "Terms of Use", "Legal", "Anti-Email Collection"];
  return /*#__PURE__*/_react.default.createElement(_Footer.Container, null, /*#__PURE__*/_react.default.createElement(_Footer.LinksContainer, null, /*#__PURE__*/_react.default.createElement(_Footer.LinksSubcontainer, null, /*#__PURE__*/_react.default.createElement(_Footer.LinksWrapper, null, listLinks(about)), /*#__PURE__*/_react.default.createElement(_Footer.LinksWrapper, null, listLinks(explore)), /*#__PURE__*/_react.default.createElement(_Footer.LinksWrapper, null, listLinks(resources)), /*#__PURE__*/_react.default.createElement(_Footer.LinksWrapper, null, listLinks(customerSupport)))), /*#__PURE__*/_react.default.createElement(_Footer.SubLinksContainer, null, /*#__PURE__*/_react.default.createElement(_Footer.SubLinksWrapper, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, listSublinks(subLinks)), /*#__PURE__*/_react.default.createElement(_Footer.SubLinksRightSide, null, /*#__PURE__*/_react.default.createElement(_si.SiYoutube, {
    size: "35px",
    color: "rgba(0,0,0,0.54)"
  }), /*#__PURE__*/_react.default.createElement(_si.SiLinkedin, {
    size: "35px",
    color: "rgba(0,0,0,0.54)"
  }), /*#__PURE__*/_react.default.createElement(_si.SiInstagram, {
    size: "35px",
    color: "rgba(0,0,0,0.54)"
  }), /*#__PURE__*/_react.default.createElement(_si.SiFacebook, {
    size: "35px",
    color: "rgba(0,0,0,0.54)"
  }))), /*#__PURE__*/_react.default.createElement(_Footer.SubLinksWrapper, {
    style: {
      marginTop: "6px"
    }
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Footer.Address, null, "\uB300\uD55C\uBBFC\uAD6D \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC885\uB85C\uAD6C \uCCAD\uC640\uB300\uB85C(\uC138\uC885\uB85C) 1 (03048) ", /*#__PURE__*/_react.default.createElement("br", null), "Copyright \xA9Myco Co. All rights reserved.")), /*#__PURE__*/_react.default.createElement(_Footer.SubLinksRightSide, {
    gap: "7px"
  }, /*#__PURE__*/_react.default.createElement(_md.MdLanguage, {
    title: "language_menu",
    size: "24px",
    color: "rgba(0,0,0,54%)"
  }), /*#__PURE__*/_react.default.createElement(_Footer.HeaderLanguageSign, null, "EN")))));
};

exports.Footer = Footer;
Footer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Footer"
};