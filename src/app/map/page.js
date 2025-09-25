"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;

const markerData = [
  {
    img: "/locations/Duderstadt Rendering.jpg",
    title: "Duderstadt Center",
    position: { lat: 42.2912, lng: -83.7157 },
    address: "2281 Bonisteel Blvd, Ann Arbor, MI 48109",
    pv: "711.15 kWDC, 0.71 MW",
  },
  {
    img: "/locations/Dean Road + NC 107 Rendering.jpg",
    title: "North Campus Facilities Services Building",
    position: { lat: 42.2889, lng: -83.7168 },
    address: "3231 Baxter Rd, Ann Arbor, MI 48109",
    pv: "359.7 kWDC, 0.36 MW",
  },
  {
    img: "/locations/NCFS Bldg + NC 61 Rendering.jpg",
    title: "NC 61",
    position: { lat: 42.288, lng: -83.7168 },
    address: "3231 Baxter Rd, Ann Arbor, MI 48109",
    pv: "222.75 kWDC, 0.22 MW",
  },
];

const GoogleMapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: API_KEY, // Replace with your real API key
        version: "beta",
        libraries: ["maps", "marker"],
      });

      const google = await loader.load();
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 42.2889, lng: -83.7168 },
          zoom: 15,
          mapId: "9d513d05b7f25516",
        });

        markerData.forEach(({ img, title, position, address, pv }) => {
          const marker = new window.google.maps.marker.AdvancedMarkerElement({
            map,
            position,
            title,
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="margin: 0; padding: 0; color: #2c3e50; font-family: Arial, sans-serif; line-height: 1.4;">
                <img
                  src="${img}"
                  alt="Solar panel location img"
                  style="width: 300px; height: 180px; object-fit: cover;"
                />
                <strong style="font-size: 16px;">${title}</strong><br/>
                ${address}<br/>
                Rooftop PV<br/>
                ${pv}
              </div>
            `,
          });

          marker.addListener("click", () => {
            infoWindow.open({ anchor: marker, map });
          });
        });
      }
    };

    initMap();
  }, []);

  return (
    <section className="py-8 px-4 font-montserrat max-w-6xl mx-auto">
      <h2 className="text-5xl pt-10 pb-4 mb-4 font-bold text-gray-800">
        Solar Panel Locations on North Campus
      </h2>
      <p className="mb-6 text-lg text-gray-600">
        Explore solar energy installations on the University of Michigan's North Campus. Click on a marker to learn more about the site and its capacity.
      </p>
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-xl shadow-md border border-gray-200"
      />
    </section>
  );
};

export default GoogleMapComponent;
