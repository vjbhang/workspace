"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../assets/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextInput = function TextInput(_ref) {
  var type = _ref.type,
      containerStyle = _ref.containerStyle;

  // this is purely for storybook documentation.
  // in actually usage in an app, the `useTextInput` hook is
  // used. Below is an exact copy from `useTextInput` except for the return.
  // Storybook preview and documentation won't show up properly
  // when I am calling a hook as the source component for *.stories.js
  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var input = /*#__PURE__*/_react.default.createElement("input", {
    type: type || "text",
    style: containerStyle,
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  });

  return input;
};

exports.TextInput = TextInput;
TextInput.propTypes = {
  /**
   * Enter JSX style object for container style
   */
  containerStyle: _propTypes.default.object,

  /**
   * Enter type of input
   */
  type: _propTypes.default.oneOf(["email", "month", "number", "password", "reset", "search", "tel", "text", "time", "url", "week"])
};
TextInput.defaultProps = {
  type: "text"
};
TextInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextInput",
  "props": {
    "type": {
      "defaultValue": {
        "value": "\"text\"",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"email\"",
          "computed": false
        }, {
          "value": "\"month\"",
          "computed": false
        }, {
          "value": "\"number\"",
          "computed": false
        }, {
          "value": "\"password\"",
          "computed": false
        }, {
          "value": "\"reset\"",
          "computed": false
        }, {
          "value": "\"search\"",
          "computed": false
        }, {
          "value": "\"tel\"",
          "computed": false
        }, {
          "value": "\"text\"",
          "computed": false
        }, {
          "value": "\"time\"",
          "computed": false
        }, {
          "value": "\"url\"",
          "computed": false
        }, {
          "value": "\"week\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Enter type of input"
    },
    "containerStyle": {
      "type": {
        "name": "object"
      },
      "required": false,
      "description": "Enter JSX style object for container style"
    }
  }
};