import React, { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "200px",
};

function Map() {
  const [location, setLocation] = useState({
    lat: 55.6760968,
    lng: 12.5683371,
  });

  function handleMarkerDragEnd(event) {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }

  return (
    <GoogleMap
      center={{
        lat: location.lat || 55.6760968,
        lng: location.lng || 12.5683371,
      }}
      zoom={14}
      onClick={(event) =>
        setLocation({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        })
      }
      mapContainerStyle={mapContainerStyle}
    >
      <MarkerF
        position={{
          lat: location.lat,
          lng: location.lng,
        }}
        draggable={true}
        onDragEnd={handleMarkerDragEnd}
      />
    </GoogleMap>
  );
}

export default Map;
