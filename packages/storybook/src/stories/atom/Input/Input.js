import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/index.css";

export const Input = ({ type, style }) => {
  const [value, setValue] = useState("");
  return (
    <InputBar
      style={style}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
};

const InputBar = styled.input``;
