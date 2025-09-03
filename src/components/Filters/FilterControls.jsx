import React from "react";

export default function FilterControls({ timeRange, setTimeRange, minMagnitude, setMinMagnitude }) {
  return (
    <div className="filters" style={{ alignItems: "center" }}>
      <label>
        Time:
        <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} style={{ marginLeft: 8 }}>
          <option value="day">Past Day</option>
          <option value="week">Past Week</option>
          <option value="month">Past Month</option>
        </select>
      </label>

      <label style={{ marginLeft: 12 }}>
        Min Mag:
        <input
          style={{ marginLeft: 8 }}
          type="range"
          min="0"
          max="8"
          step="0.1"
          value={minMagnitude}
          onChange={(e) => setMinMagnitude(Number(e.target.value))}
        />
        <span style={{ marginLeft: 6 }}>{minMagnitude.toFixed(1)}</span>
      </label>
    </div>
  );
}
