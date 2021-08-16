"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

var _excluded = ["primary", "backgroundColor", "size", "label"];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
    backgroundColor = _ref.backgroundColor,
    size = _ref.size,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);

  var mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return /*#__PURE__*/ _react.default.createElement(
    "button",
    _extends(
      {
        type: "button",
        className: [
          "storybook-button",
          "storybook-button--".concat(size),
          mode,
        ].join(" "),
        style: backgroundColor && {
          backgroundColor: backgroundColor,
        },
      },
      props
    ),
    label
  );
};

exports.Button = Button;
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: _propTypes.default.bool,

  /**
   * What background color to use
   */
  backgroundColor: _propTypes.default.string,

  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(["small", "medium", "large"]),

  /**
   * Button contents
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: _propTypes.default.func,
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
Button.__docgenInfo = {
  description: "Primary UI component for user interaction",
  methods: [],
  displayName: "Button",
  props: {
    backgroundColor: {
      defaultValue: {
        value: "null",
        computed: false,
      },
      type: {
        name: "string",
      },
      required: false,
      description: "What background color to use",
    },
    primary: {
      defaultValue: {
        value: "false",
        computed: false,
      },
      type: {
        name: "bool",
      },
      required: false,
      description: "Is this the principal call to action on the page?",
    },
    size: {
      defaultValue: {
        value: '"medium"',
        computed: false,
      },
      type: {
        name: "enum",
        value: [
          {
            value: '"small"',
            computed: false,
          },
          {
            value: '"medium"',
            computed: false,
          },
          {
            value: '"large"',
            computed: false,
          },
        ],
      },
      required: false,
      description: "How large should the button be?",
    },
    onClick: {
      defaultValue: {
        value: "undefined",
        computed: true,
      },
      type: {
        name: "func",
      },
      required: false,
      description: "Optional click handler",
    },
    label: {
      type: {
        name: "string",
      },
      required: true,
      description: "Button contents",
    },
  },
};
