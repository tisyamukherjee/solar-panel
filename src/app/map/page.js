import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyC9_-H-ACCJ3v3_AOdMQXY-NC5K5fRw9I8", // Replace with your actual API key
      version: "beta",
      libraries: ["maps", "marker"],
    });

    loader.then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 42.27727127075195, lng: -83.73822784423828 },
          zoom: 14,
          mapId: "9d513d05b7f25516",
        });

        new google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: 42.27727127075195, lng: -83.73822784423828 },
          title: "My location",
        });
      }
    });
  }, []);

  return (
    <div>
      <h2>Solar Panel Locations</h2>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default GoogleMapComponent;
