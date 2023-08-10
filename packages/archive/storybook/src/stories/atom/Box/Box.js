import React from "react";
import styled from "styled-components";

export const Box = ({ backgroundColor }) => {
  return <Container backgroundColor={backgroundColor} />;
};

const Container = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.backgroundColor || "pink"};
`;
