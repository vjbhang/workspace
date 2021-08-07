import React from "react";
import { Container } from "./Screen.styled";

export function Screen({ children }) {
  // A Screen wrapper that has the max height and width of the current device.
  return <Container>{children}</Container>;
}
