import React, { useState } from "react";
import { Container } from "./Header.styled";

export function Header({ children }) {
  return <Container>{children}</Container>;
}
