import React from "react";
import { formatTime, coordsFromFeature } from "../../utils/helpers";

export default function EarthquakeList({ quakes = [], selectedId, onSelect }) {
  return (
    <div>
      <h3>Earthquakes ({quakes.length})</h3>
      <div className="list">
        {quakes.length === 0 && <div style={{color:'#9aa4b2'}}>No earthquakes found for selected filters.</div>}
        {quakes.map((q) => {
          const id = q.id;
          const mag = q.properties.mag ?? 0;
          const place = q.properties.place;
          const time = q.properties.time;
          const coords = coordsFromFeature(q);
          return (
            <div
              key={id}
              className={`list-item ${selectedId === id ? "selected" : ""}`}
              onClick={() => onSelect(id, coords)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>{place}</strong>
                <span style={{ fontSize: 12 }}>{mag}</span>
              </div>
              <div style={{ fontSize: 12, color: "#9aa4b2" }}>{formatTime(time)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
