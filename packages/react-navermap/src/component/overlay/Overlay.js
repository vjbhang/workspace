import React, { useState } from "react";
import { Container } from "./Overlay.styled";

export function Overlay({ createMarker, map, markerCoordinates, myLocation }) {
  const naver = window.naver;
  const naverCoord = naver.maps.UTMK_NAVER.fromCoordToNaver(markerCoordinates);
  console.log("naverCoord: ", naverCoord);

  return (
    <Container>
      <button onClick={() => createMarker(map)}>Create Marker</button>
      <p>{`Latitude: ${markerCoordinates._lat}, Longitude: ${markerCoordinates._lng}`}</p>
      <p>{`My Location: ${myLocation.lat}, ${myLocation.lng}`}</p>
    </Container>
  );
}
