import React, { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { magColor, magRadius, formatTime, coordsFromFeature, depthFromFeature } from "../../utils/helpers";

function MapInitializer({ mapRef }) {
  const map = useMap();
  useEffect(() => {
    if (mapRef) mapRef.current = map;
  }, [map, mapRef]);
  return null;
}

export default function EarthquakeMap({ quakes = [], selectedId, setSelectedId, mapRef, loading, error }) {
  const center = [20, 0];
  return (
    <MapContainer center={center} zoom={2} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
      <MapInitializer mapRef={mapRef} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {quakes.map((f) => {
        const id = f.id;
        const mag = f.properties.mag ?? 0;
        const coords = coordsFromFeature(f);
        const depth = depthFromFeature(f);

        return (
          <CircleMarker
            key={id}
            center={coords}
            radius={magRadius(mag)}
            pathOptions={{
              color: magColor(mag),
              fillOpacity: 0.6,
              weight: selectedId === id ? 2.5 : 1
            }}
            eventHandlers={{
              click: () => {
                setSelectedId(id);
              }
            }}
          >
            <Popup>
              <div style={{ minWidth: 200 }}>
                <strong>{f.properties.place}</strong>
                <div>Magnitude: {mag}</div>
                <div>Depth: {depth} km</div>
                <div>Time: {formatTime(f.properties.time)}</div>
                <a href={f.properties.url} target="_blank" rel="noreferrer">USGS details</a>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
