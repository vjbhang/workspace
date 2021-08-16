import React, { useState } from "react";
import { Container } from "./Overlay.styled";

export function Overlay({
  createMarker,
  map,
  markerCoordinates,
  myLocation,
  traSummary,
}) {
  const naver = window.naver;
  const naverCoord = naver.maps.UTMK_NAVER.fromCoordToNaver(markerCoordinates);
  console.log("naverCoord: ", naverCoord);
  console.log(traSummary);
  function getDuration() {
    return traSummary === null
      ? null
      : Math.round(traSummary.data.duration / 60000);
  }

  return (
    <Container>
      <button onClick={() => createMarker(map)}>Create Marker</button>
      <p>{`Latitude: ${markerCoordinates._lat}, Longitude: ${markerCoordinates._lng}`}</p>
      <p>{`My Location: ${myLocation.lat}, ${myLocation.lng}`}</p>
      <p>{`Duration: ${getDuration()}분`}</p>
    </Container>
  );
}
