"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.IconOnly =
  exports.IconOnLeft =
  exports.IconOnRight =
  exports.Default =
  exports.default =
    void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

var _md = require("react-icons/md");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = {
  title: "Atom/Button",
  component: _Button.Button,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A button",
      },
    },
  },
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/ _react.default.createElement(_Button.Button, args);
};

var Default = Template.bind({});
exports.Default = Default;
var IconOnRight = Template.bind({});
exports.IconOnRight = IconOnRight;
IconOnRight.storyName = "Icon on Right";
IconOnRight.args = {
  label: "Button",
  right: true,
  icon: /*#__PURE__*/ _react.default.createElement(_md.MdBuild, {
    size: 14,
  }),
};
IconOnRight.story = {
  parameters: {
    docs: {
      storyDescription:
        "Icon defaults to right if the `icon` prop is present regardless of a `right` prop.",
    },
  },
};
var IconOnLeft = Template.bind({});
exports.IconOnLeft = IconOnLeft;
IconOnLeft.storyName = "Icon on Left";
IconOnLeft.args = {
  label: "Button",
  left: true,
  icon: /*#__PURE__*/ _react.default.createElement(_md.MdBuild, {
    size: 14,
  }),
};
var IconOnly = Template.bind({});
exports.IconOnly = IconOnly;
IconOnly.args = {
  iconOnly: true,
  icon: /*#__PURE__*/ _react.default.createElement(_md.MdBuild, {
    size: 14,
  }),
};
