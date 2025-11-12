"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;

import { AAmarkerData } from "@/lib/AAmarkerData";
import { DBmarkerData } from "@/lib/DBmarkerData";

// Reusable Google Map Component
const GoogleMapComponent = ({ 
  markerData, 
  center, 
  zoom = 15, 
  title, 
  description,
  mapId = "9d513d05b7f25516" 
}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "beta",
        libraries: ["maps", "marker"],
      });

      const google = await loader.load();

      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          mapId,
        });

        const geocoder = new google.maps.Geocoder();
        const bounds = new google.maps.LatLngBounds();

        markerData.forEach(({ title, address, pv, system, photoUrl }) => {
          geocoder.geocode({ address }, (results, status) => {
            if (status === "OK" && results[0]) {
              const marker = new google.maps.marker.AdvancedMarkerElement({
                map,
                position: results[0].geometry.location,
                title,
              });

              const infoWindow = new google.maps.InfoWindow({
                content: `
                  <div style="display: flex; align-items: flex-start; background: #00274C; color: #fff; font-family: 'montserrat', Arial, sans-serif; border-radius: 12px; min-width: 400px; max-width: 600px; padding: 24px 20px; box-sizing: content-box;">
                    <div style="flex: 1; margin-right: 24px;">
                      <span style="font-family: 'montserrat'; font-weight:650; font-size: 38px; line-height: 100%; letter-spacing: 0%; color: #F3C300; display: block;">${title}</span>
                      <span style="font-family: 'montserrat'; font-size: 20px; color: #fff; display: block; margin-top: 12px;">${address}</span>
                      <span style="font-family: 'montserrat'; font-size: 20px; color: #fff; display: block; margin-top: 8px;">${system}</span>
                      <span style="font-family: 'montserrat'; font-size: 20px; color: #fff; display: block; margin-top: 8px;">${pv}</span>
                    </div>
                    ${photoUrl ? `<div style="flex: none;">
                      <img src="${photoUrl}" alt="${title}" style="width:300px; height:auto; border-radius:8px; display:block; background:#00274C;" />
                    </div>` : ""}
                  </div>
                `,
              });

              marker.addListener("click", () => {
                infoWindow.open({ anchor: marker, map });
              });

              // Extend map bounds to include this marker
              bounds.extend(results[0].geometry.location);
              map.fitBounds(bounds);
            } else {
              console.error("Geocode failed for " + address + ": " + status);
            }
          });
        });
      }
    };

    initMap();
  }, [markerData, center, zoom, mapId]);

  return (
<<<<<<< HEAD
    <section className="py-8 px-4 font-anek max-w-6xl mx-auto">
      <h2 className="text-5xl pt-10 pb-4 mb-4 font-anek text-gray-800">
=======
    <section className="py-8 px-4 font-montserrat max-w-6xl mx-auto">
      <h2 className="text-5xl pt-10 pb-4 mb-4 font-bold text-gray-800">
>>>>>>> cf11d72 (working on dual maps)
        {title}
      </h2>
      <p className="mb-6 text-lg text-gray-600">
        {description}
      </p>
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-xl shadow-md border border-gray-200"
      />
    </section>
  );
};

// main component that renders both maps
const MapPage = () => {
  return (
    <div>
      {/* Ann Arbor Map */}
      <GoogleMapComponent
        markerData={AAmarkerData}
        center={{ lat: 42.2889, lng: -83.7168 }}
        zoom={13}
        title="Solar Panel Locations in Ann Arbor"
        description="Explore solar energy installations on the University of Michigan's Ann Arbor campus. Click on a marker to learn more about the site, system type, and capacity."
      />
      
      {/* Dearborn Map */}
      {/*
      <GoogleMapComponent
        markerData={DBmarkerData}
        center={{ lat: 42.3223, lng: -83.2312 }}
        zoom={5}
        title="Solar Panel Locations in Dearborn"
        description="Explore solar energy installations on the University of Michigan's Dearborn campus. Click on a marker to learn more about the site, system type, and capacity."
      />
      */}
    </div>
  );
};

export default MapPage;
