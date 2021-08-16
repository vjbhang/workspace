import React from "react";
import { useTextInput } from "@vjbhang/shared-components";

import { Container, Title } from "./Home.styled";
export function Home() {
  const [value, valueInput] = useTextInput({ type: "text" });
  return (
    <Container>
      <Title>Home</Title>
      {valueInput}
      <Title>{value}</Title>
    </Container>
  );
}
