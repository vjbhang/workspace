"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../assets/index.css");

var _templateObject, _templateObject2;

var _excluded = [
  "label",
  "backgroundColor",
  "right",
  "left",
  "icon",
  "iconOnly",
  "containerStyle",
  "labelStyle",
];

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

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var Button = function Button(_ref) {
  var label = _ref.label,
    backgroundColor = _ref.backgroundColor,
    right = _ref.right,
    left = _ref.left,
    icon = _ref.icon,
    iconOnly = _ref.iconOnly,
    containerStyle = _ref.containerStyle,
    labelStyle = _ref.labelStyle,
    props = _objectWithoutProperties(_ref, _excluded);

  function arrangeIcon(left, right, iconOnly, icon) {
    if (iconOnly) {
      return /*#__PURE__*/ _react.default.createElement(Label, null, icon);
    } else if (left && right) {
      return TypeError("Both left and right were provided.");
    } else if (left) {
      return /*#__PURE__*/ _react.default.createElement(
        Label,
        {
          style: labelStyle,
        },
        icon,
        label || "Button"
      );
    } else if (right) {
      return /*#__PURE__*/ _react.default.createElement(
        Label,
        {
          style: labelStyle,
        },
        label || "Button",
        icon
      );
    } else {
      return /*#__PURE__*/ _react.default.createElement(
        Label,
        {
          style: labelStyle,
        },
        label || "Button",
        icon
      );
    }
  }

  return /*#__PURE__*/ _react.default.createElement(
    Container,
    _extends(
      {
        className: "Roboto",
        backgroundColor: backgroundColor,
      },
      props,
      {
        style: containerStyle,
      }
    ),
    arrangeIcon(left, right, iconOnly, icon)
  );
};

exports.Button = Button;

var Container = _styledComponents.default.button(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      "\n  height: 28px;\n  width: 87px;\n  background-color: ",
      ";\n  border: none;\n  border-radius: 2px;\n  color: white;\n  font-size: 12px;\n  :hover {\n    cursor: pointer;\n    filter: brightness(92%);\n  }\n  :active {\n    background-color: #90deff;\n  }\n",
    ])),
  function (props) {
    return props.backgroundColor || "#64D0FF";
  }
);

var Label = _styledComponents.default.div(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      "\n  height: 100%;\n  widht: 100%;\n  flex-direction: row;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0px 9px;\n",
    ]))
);

Button.propTypes = {
  /**
   * The label of the button
   */
  label: _propTypes.default.string,

  /**
   * What background color to use
   */
  backgroundColor: _propTypes.default.string,

  /**
   * Icon placed on right side of label
   */
  right: _propTypes.default.bool,

  /**
   * Icon placed on left side of label
   */
  left: _propTypes.default.bool,

  /**
   * Receives a react element, ideally an icon element
   * such as <Icon /> from a library such as
   * react-native-vector-icons or react-icons
   */
  icon: _propTypes.default.element,

  /**
   * Show button without label and only icon
   */
  iconOnly: _propTypes.default.bool,

  /**
   * Optional inline styling for container
   */
  containerStyle: _propTypes.default.object,

  /**
   * Optional inline styling for label
   */
  labelStyle: _propTypes.default.object,
};
Button.defaultProps = {
  label: "Button",
  backgroundColor: "#64D0FF",
  icon: null,
  iconOnly: false,
};
Button.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
  props: {
    label: {
      defaultValue: {
        value: '"Button"',
        computed: false,
      },
      type: {
        name: "string",
      },
      required: false,
      description: "The label of the button",
    },
    backgroundColor: {
      defaultValue: {
        value: '"#64D0FF"',
        computed: false,
      },
      type: {
        name: "string",
      },
      required: false,
      description: "What background color to use",
    },
    icon: {
      defaultValue: {
        value: "null",
        computed: false,
      },
      type: {
        name: "element",
      },
      required: false,
      description:
        "Receives a react element, ideally an icon element\nsuch as <Icon /> from a library such as\nreact-native-vector-icons or react-icons",
    },
    iconOnly: {
      defaultValue: {
        value: "false",
        computed: false,
      },
      type: {
        name: "bool",
      },
      required: false,
      description: "Show button without label and only icon",
    },
    right: {
      type: {
        name: "bool",
      },
      required: false,
      description: "Icon placed on right side of label",
    },
    left: {
      type: {
        name: "bool",
      },
      required: false,
      description: "Icon placed on left side of label",
    },
    containerStyle: {
      type: {
        name: "object",
      },
      required: false,
      description: "Optional inline styling for container",
    },
    labelStyle: {
      type: {
        name: "object",
      },
      required: false,
      description: "Optional inline styling for label",
    },
  },
};
