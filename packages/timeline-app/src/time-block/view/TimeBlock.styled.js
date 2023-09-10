import styled from "styled-components";

export const Container = styled.div`
  border-radius: 48px;
  background-color: ${props => props.backgroundColor || "#469ABA"};
  height: 96px;
  min-width: 204px;
  width: ${props => props.width ? `${204 + props.width}px` : "204px"};
  transition: width 1.6s;
  transition-timing-function: linear; 
`;