import React from 'react';
import MapGL, { Marker } from 'react-map-gl';

const ACCESS_TOKEN = 'pk.eyJ1Ijoic3NhemVybyIsImEiOiJja2kzODl0dWowY2k0MnlucTBzYjlvZjF5In0.zw6AaH_zQiFpIXu4YGVDMQ';
const MARKER_ICON = 'https://img.icons8.com/color/48/000000/marker.png';
const LINK_TO_WORKSHOP =
  'https://www.google.com/maps/place/Wysoka+33,+34-105+Wysoka/@49.8894656,19.609757,1525m/data=!3m1!1e3!4m13!1m7!3m6!1s0x47166279e9f30371:0x7e279f96d9d218f9!2sWysoka+33,+34-105+Wysoka!3b1!8m2!3d49.8892409!4d19.6096779!3m4!1s0x47166279e9f30371:0x7e279f96d9d218f9!8m2!3d49.8892409!4d19.6096779';

const Map = () => {
  const toGoogleMaps = () => {
    window.open(LINK_TO_WORKSHOP);
  };

  return (
    <MapGL
      initialViewState={{
        longitude: 19.609767728854173,
        latitude: 49.88952089765724,
        zoom: 14,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/outdoors-v11'
      mapboxAccessToken={ACCESS_TOKEN}
    >
      <Marker
        longitude={19.609767728854173}
        latitude={49.88952089765724}
        anchor='bottom'
        onClick={toGoogleMaps}
        style={{ cursor: 'pointer' }}
      >
        <img src={MARKER_ICON} alt='Adres Pracowni Button' title='Pracownia Button - Wysoka 33, 34-105 WYSOKA' />
      </Marker>
    </MapGL>
  );
};

export default Map;
