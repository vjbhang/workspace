export const initMap = {
  mapOptions: {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
  },
  map: new naver.maps.Map("map", mapOptions),
};

export default initMap;
