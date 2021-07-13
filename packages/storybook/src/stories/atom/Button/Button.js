import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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
  function arrangeIcon(left, right, iconOnly, icon) {
    if (iconOnly) {
      return <Label>{icon}</Label>;
    } else if (left && right) {
      return TypeError("Both left and right were provided.");
    } else if (left) {
      return (
        <Label style={labelStyle}>
          {icon}
          {label || "Button"}
        </Label>
      );
    } else if (right) {
      return (
        <Label style={labelStyle}>
          {label || "Button"}
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
    <Container
      className="Roboto"
      backgroundColor={backgroundColor}
      {...props}
      style={containerStyle}
    >
      {arrangeIcon(left, right, iconOnly, icon)}
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
    filter: brightness(92%);
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

Button.propTypes = {
  /**
   * The label of the button
   */
  label: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Icon placed on right side of label
   */
  right: PropTypes.bool,
  /**
   * Icon placed on left side of label
   */
  left: PropTypes.bool,
  /**
   * Receives a react element, ideally an icon element
   * such as <Icon /> from a library such as
   * react-native-vector-icons or react-icons
   */
  icon: PropTypes.element,
  /**
   * Show button without label and only icon
   */
  iconOnly: PropTypes.bool,
  /**
   * Optional inline styling for container
   */
  containerStyle: PropTypes.object,
  /**
   * Optional inline styling for label
   */
  labelStyle: PropTypes.object,
};

Button.defaultProps = {
  label: "Button",
  backgroundColor: "#64D0FF",
  icon: null,
  iconOnly: false,
};
