import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import _ from "lodash";

const mapContainerStyle = {
  width: "100%",
  height: "200px",
};

function Map({ address }) {
  const [location, setLocation] = useState({
    lat: 55.6760968,
    lng: 12.5683371,
  });

  useEffect(() => {
    const debouncedGeocode = _.debounce(geocodeAddress, 500);
    if (address) {
      debouncedGeocode(address);
    }
  }, [address]);

  async function geocodeAddress(address) {
    const geocoder = new window.google.maps.Geocoder();
    const { results } = await geocoder.geocode({ address });

    if (results && results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      setLocation({ lat: lat(), lng: lng() });
    }
  }

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
      {location.lat && location.lng && (
        <MarkerF
          position={{
            lat: location.lat,
            lng: location.lng,
          }}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      )}
    </GoogleMap>
  );
}

export default Map;
