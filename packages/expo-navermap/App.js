import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";

// component
import Header from "./component/header";
import MapContainer from "./component/map-container";

export default function App() {
  return (
    <ScreenContainer>
      <StatusBar style="auto" />
      <Header>
        <Text weight="bold" size="18px">
          naver map in ejected expo
        </Text>
      </Header>
      <MapContainer></MapContainer>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: "#fff",
  },
});

const ScreenContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Text = styled.Text`
  font-size: ${(props) => props.size || "12px"};
  font-weight: ${(props) => props.weight || "normal"};
`;
