import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/index.css";

export const TextInput = ({ type, containerStyle }) => {
  // this is purely for storybook documentation.
  // in actually usage in an app, the `useTextInput` hook is
  // used. Below is an exact copy from `useTextInput` except for the return.
  // Storybook preview and documentation won't show up properly
  // when I am calling a hook as the source component for *.stories.js
  const [value, setValue] = useState("");
  const input = (
    <input
      type={type || "text"}
      style={containerStyle}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );

  return input;
};

TextInput.propTypes = {
  /**
   * Enter JSX style object for container style
   */
  containerStyle: PropTypes.object,
  /**
   * Enter type of input
   */
  type: PropTypes.oneOf([
    "email",
    "month",
    "number",
    "password",
    "reset",
    "search",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]),
};

TextInput.defaultProps = {
  type: "text",
};
