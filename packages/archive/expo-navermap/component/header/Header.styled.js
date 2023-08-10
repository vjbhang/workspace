import styled from "styled-components";
import Constants from "expo-constants";

export const Container = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  display: flex;
  height: 66px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding-left: 12px;
  padding-right: 12px;
`;
