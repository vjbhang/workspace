import React from "react";
import styled from "styled-components";

export const Button = ({ backgroundColor }) => {
  return <Container backgroundColor={backgroundColor} >Button</Container>;
};

const Container = styled.button`
  height: 28px;
  width: 87px;
  background-color: ${(props) => props.backgroundColor || "64D0FF"};
`;
