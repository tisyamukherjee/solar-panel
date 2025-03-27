"use client"; 

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyC9_-H-ACCJ3v3_AOdMQXY-NC5K5fRw9I8", // replace with your real API key
        version: "beta",
        libraries: ["maps", "marker"],
      });

      const google = await loader.load(); // old-style, or use importLibrary if you're on latest
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 42.2889, lng: -83.7168 },
          zoom: 14,
          mapId: "9d513d05b7f25516",
        });

        const marker1 = new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: 42.2912, lng: -83.7157 },
          title: "Duderstadt Center",
        });
        const infoWindow1 = new window.google.maps.InfoWindow({
          content: `
            <div style="margin: 0; padding: 0; color: #2c3e50; font-family: Arial, sans-serif; line-height: 1.4;">
              <div style="margin: 0; padding: 0;">
                <strong style="font-size: 16px;">Duderstadt Center</strong><br/>
                2281 Bonisteel Blvd, Ann Arbor, MI 48109<br/>
                Rooftop PV<br/>
                711.15 kWDC, 0.71 MW
              </div>
            </div>
          `,
        });
        marker1.addListener("click", () => {
          infoWindow1.open({ anchor: marker1, map });
        });
        
        const marker2 = new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: 42.2889, lng: -83.7168 },
          title: "North Campus Facilites Services Building",
        });
        const infoWindow2 = new window.google.maps.InfoWindow({
          content: `
            <div style="margin: 0; padding: 0; color: #2c3e50; font-family: Arial, sans-serif; line-height: 1.4;">
              <div style="margin: 0; padding: 0;">
                <strong style="font-size: 16px;">North Campus Facilites Services Building</strong><br/>
                3231 Baxter Rd, Ann Arbor, MI 48109<br/>
                Rooftop PV<br/>
                359.7 kWDC, 0.36 MW
              </div>
            </div>
          `,
        });
        marker2.addListener("click", () => {
          infoWindow2.open({ anchor: marker2, map });
        });

        const marker3 = new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: 42.288, lng: -83.7168 },
          title: "NC 61",
        });
        const infoWindow3 = new window.google.maps.InfoWindow({
          content: `
            <div style="margin: 0; padding: 0; color: #2c3e50; font-family: Arial, sans-serif; line-height: 1.4;">
              <div style="margin: 0; padding: 0;">
                <strong style="font-size: 16px;">NC 61</strong><br/>
                3231 Baxter Rd, Ann Arbor, MI 48109<br/>
                Rooftop PV<br/>
                222.75 kWDC, 0.22 MW
              </div>
            </div>
          `,
        });
        marker3.addListener("click", () => {
          infoWindow3.open({ anchor: marker3, map });
        });
      }
    };

    initMap();
  }, []);

  return (
    <div>
      <h2>Solar Panel Locations</h2>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default GoogleMapComponent;
