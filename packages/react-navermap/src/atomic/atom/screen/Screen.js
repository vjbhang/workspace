import React from "react";
import { Container, Wrapper } from "./Screen.styled";

export function Screen({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
