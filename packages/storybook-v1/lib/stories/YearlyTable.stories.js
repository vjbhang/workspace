"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Wide = exports.Default = void 0;
var _YearlyTable = require("./YearlyTable");
const meta = {
  title: "atom/YearlyTable",
  component: _YearlyTable.YearlyTable,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
var _default = meta;
exports.default = _default;
const Default = {
  args: {
    postureData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    romData: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42]
  }
};
exports.Default = Default;
const Wide = {
  args: {
    postureData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    romData: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
    tableStyle: {
      width: "80vw",
      height: "25vw"
    }
  }
};
exports.Wide = Wide;