import React from "react";
import styled from "styled-components";
import "../../assets/index.css";

export const Button = ({
  label,
  backgroundColor,
  right,
  left,
  icon,
  iconOnly,
  containerStyle,
  labelStyle,
  ...props
}) => {
  function arrangeIcon(left, right, iconOnly) {
    if (iconOnly) {
      return <Label>{icon}</Label>;
    } else if (left && right) {
      return TypeError("Both left and right were provided.");
    } else if (left) {
      return (
        <Label style={labelStyle}>
          {icon}
          {label || "Left"}
        </Label>
      );
    } else if (right) {
      return (
        <Label style={labelStyle}>
          {label || "Right"}
          {icon}
        </Label>
      );
    } else {
      return (
        <Label style={labelStyle}>
          {label || "Button"}
          {icon}
        </Label>
      );
    }
  }

  return (
    <Container className="Roboto" backgroundColor={backgroundColor} {...props} style={containerStyle}>
      {arrangeIcon(left, right, iconOnly)}
    </Container>
  );
};

const Container = styled.button`
  height: 28px;
  width: 87px;
  background-color: ${(props) => props.backgroundColor || "#64D0FF"};
  border: none;
  border-radius: 2px;
  color: white;
  font-size: 12px;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #90deff;
  }
`;

const Label = styled.div`
  height: 100%;
  widht: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 9px;
`;
