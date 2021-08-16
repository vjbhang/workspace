import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

// component
import Header from "./component/header";
import MapContainer from "./component/map-container";

const map = `
  <html>
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
      <title>간단한 지도 표시하기</title>
      <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=1zi9sb2qmn"></script>
  </head>
  <body>
  <div id="map" style="width:100%;height:100%;"></div>

  <script>
  var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
  };

  var map = new naver.maps.Map('map', mapOptions);
  </script>
  </body>
  </html>
`;

export default function App() {
  return (
    <ScreenContainer>
      <StatusBar style="auto" />
      <Header>
        <Text weight="bold" size="18px">
          naver map in expo using webview
        </Text>
      </Header>
      <WebView
        originWhitelist={["*"]}
        source={{ html: map }}
        style={styles.webview}
      />
      {/* <MapContainer>

      </MapContainer> */}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: "#fff",
  },
  webview: {
    height: "100%",
    width: "100%",
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
