import React, { useState, useEffect } from "react";
import "./App.css";
import "normalize.css";
import styled from "styled-components";
import axios from "axios";

// atomic
import Screen from "./atomic/atom/screen";

// component
import Overlay from "./component/overlay/";

function App() {
  // declaring naver from header script
  const naver = window.naver;
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [markerCoordinates, setMarkerCoordinates] = useState([
    37.3595704, 127.105399,
  ]);
  const [duration, setDuration] = useState(null);

  const myLocation = { lat: 37.5386433, lng: 127.0837697 };

  // initializing naver map
  useEffect(() => {
    async function initialize() {
      await console.log("(Map Init: 1/3) grabbing map");
      const map = await new naver.maps.Map("map", mapOptions);
      await console.log("(Map Init: 2/3) setting map to react");
      await setMap(map);
      await console.log("(Map Init: 3/3) map initialized");
    }

    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      scaleControl: true,
      scaleControlOptions: {
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
      mapDataControl: false,
      mapTypeControl: true,
      logoControl: false,
    };

    initialize();
  }, []);

  // creating marker
  async function createMarker(map) {
    console.log(map);
    if (map) {
      await console.log("(Marker Init: 1/2) Placing marker");
      const marker = await new naver.maps.Marker({
        position: new naver.maps.LatLng(37.3595704, 127.105399),
        map: map,
      });
      await console.log("(Marker Init: 2/2) Adding listener");
      await naver.maps.Event.addListener(map, "click", function (e) {
        marker.setPosition(e.latlng);
        // console.log("Marker: ", marker);
        setMarkerCoordinates(marker.position);
        let directionDuration = axios({
          method: "get",
          url: "https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving",
          params: {
            start: `${marker.position._lng},${marker.position._lat}`,
            goal: `${myLocation.lng},${myLocation.lat}`,
          },
          headers: {
            crossorigin: "true",
            "Access-Control-Allow-Origin": "*",
            withCredentials: "false",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "X-NCP-APIGW-API-KEY-ID": "1zi9sb2qmn",
            "X-NCP-APIGW-API-KEY": "wT2O34FmyYP23wPHoWr9PAyj2fOz4RvaUimMMVDG",
          },
        })
          .then(function (response) {
            console.log(response);
            setDuration(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    } else {
      console.log("Marker Init: Map not found");
    }
  }

  return (
    <Screen>
      <Overlay
        createMarker={createMarker}
        map={map}
        markerCoordinates={markerCoordinates}
        myLocation={myLocation}
      />
      <MapWrapper id="map" />
    </Screen>
  );
}

export default App;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
