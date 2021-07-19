import React, { useState } from "react";
import styled from "styled-components";

export function useTextInput({ type, containerStyle }) {
  const [value, setValue] = useState("");
  const input = (
    <InputBar
      type={type || "text"}
      style={containerStyle}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );

  return [value, input];
}

const InputBar = styled.input``;

useTextInput.propTypes = {
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

useTextInput.defaultProps = {
  type: "text",
};
