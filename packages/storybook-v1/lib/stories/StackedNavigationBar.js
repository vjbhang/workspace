"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StackedNavigationBar = void 0;
var _ = require("..");
const StackedNavigationBar = _ref => {
  let {
    children,
    links
  } = _ref;
  const navButtons = links.map((item, index) => {
    if (index === 0) {
      return /*#__PURE__*/React.createElement(_.HeaderButton, {
        label: item,
        key: index,
        selected: true,
        onClick: () => {},
        containerStyle: containerStyle
      });
    }
    return /*#__PURE__*/React.createElement(_.HeaderButton, {
      label: item,
      key: index,
      selected: false,
      onClick: () => {},
      containerStyle: containerStyle
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 left-0 flex justify-start items-center w-full h-fit bg-gray-800 px-12 py-6"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-white font-semibold text-3xl"
  }, "exbody"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2.5 ml-10 items-center h-full"
  }, navButtons), children);
};
exports.StackedNavigationBar = StackedNavigationBar;
const containerStyle = {
  width: "6.25rem"
};