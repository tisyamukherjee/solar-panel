"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./GoogleMapComponent.module.css";

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
  mapId = "9d513d05b7f25516",
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
                  <div style="display: flex; align-items: flex-start; background: #00274C; color: #fff; font-family: 'montserrat', Arial, sans-serif; border-radius: 10px; min-width: 340px; max-width: 500px; padding: 18px 14px; box-sizing: content-box;">
                    <div style="${
                      photoUrl
                        ? "flex: 1; margin-right: 12px;"
                        : "width: 100%; display: block;"
                    }">
                      <span style="font-family: 'montserrat'; font-weight:650; font-size: 32px; line-height: 100%; letter-spacing: 0%; color: #F3C300; display: block;">${title}</span>
                      <span style="font-family: 'montserrat'; font-size: 18px; color: #fff; display: block; margin-top: 10px;">${address}</span>
                      <span style="font-family: 'montserrat'; font-size: 18px; color: #fff; display: block; margin-top: 7px;">${system}</span>
                      <span style="font-family: 'montserrat'; font-size: 18px; color: #fff; display: block; margin-top: 7px;">${pv}</span>
                    </div>
                    ${
                      photoUrl
                        ? `<div style="flex: none;">
                      <img src="${photoUrl}" alt="${title}" style="width:220px; height:auto; border-radius:7px; display:block; background:#00274C; object-fit:cover;" />
                    </div>`
                        : ""
                    }
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
    <section className="py-4 px-4 font-montserrat max-w-6xl mx-auto">
      <h2
        className="text-5xl text-center font-bold pb-5 pt-5 font-montserrat"
        style={{ color: "rgb(0, 39, 76)" }}
      >
        {title}
      </h2>
      <p className="mb-6 text-lg text-gray-600 text-center">
        9 sites | 5,000+ kWDC generated | 5+ MW generated
      </p>
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-xl shadow-md border border-gray-200"
      />
      <div className="pt-6" />
      <div className="flex items-center justify-center w-full mb-3 border-3 border-[#000080] rounded-3xl text-lg text-gray-600 text-center font-montserrat">
        {description}
      </div>
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
        description="Using the interactive map above, explore the solar facilities at The University of Michigan, Ann Arbor!
 Click on each marker to learn more about the site, system type, and capacity."
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
