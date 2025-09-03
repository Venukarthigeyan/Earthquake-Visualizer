import React, { useState, useMemo, useRef } from "react";
import useEarthquakes from "./hooks/useEarthquakes";
import EarthquakeMap from "./components/Map/EarthquakeMap";
import FilterControls from "./components/Filters/FilterControls";
import EarthquakeList from "./components/Sidebar/EarthquakeList";
import StatsPanel from "./components/Stats/StatsPanel";

export default function App() {
  // timeRange: "day" | "week" | "month"
  const [timeRange, setTimeRange] = useState("day");
  const [minMagnitude, setMinMagnitude] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const mapRef = useRef(null);

  const { data: quakes, loading, error } = useEarthquakes(timeRange);

  // filtered list
  const filtered = useMemo(() => {
    if (!quakes) return [];
    return quakes.filter((q) => q.properties.mag >= minMagnitude);
  }, [quakes, minMagnitude]);

  return (
    <div className="app">
      <header className="topbar">
        <h1>Earthquake Visualizer</h1>
        <div className="controls">
          <FilterControls
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            minMagnitude={minMagnitude}
            setMinMagnitude={setMinMagnitude}
          />
        </div>
      </header>

      <main className="main">
        <aside className="sidebar">
          <StatsPanel quakes={filtered} loading={loading} />
          <EarthquakeList
            quakes={filtered}
            selectedId={selectedId}
            onSelect={(id, coords) => {
              setSelectedId(id);
              if (mapRef.current && coords) {
                // fly to the location
                mapRef.current.flyTo(coords, 6, { duration: 1.2 });
              }
            }}
          />
        </aside>

        <section className="map-area">
          <EarthquakeMap
            quakes={filtered}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            mapRef={mapRef}
            loading={loading}
            error={error}
          />
        </section>
      </main>

      <footer className="footer">
        Data source: USGS — <code>https://earthquake.usgs.gov/</code>
      </footer>
    </div>
  );
}
