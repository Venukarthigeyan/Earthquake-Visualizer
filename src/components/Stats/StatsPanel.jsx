import React, { useMemo } from "react";

export default function StatsPanel({ quakes = [], loading }) {
  const stats = useMemo(() => {
    if (!quakes || quakes.length === 0) return { total: 0, strongest: 0, avg: 0 };
    const mags = quakes.map((q) => q.properties.mag || 0);
    const total = mags.length;
    const strongest = Math.max(...mags);
    const avg = mags.reduce((a, b) => a + b, 0) / total;
    return { total, strongest, avg: Number(avg.toFixed(2)) };
  }, [quakes]);

  return (
    <div style={{ marginBottom: 12 }}>
      <h3>Stats</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="stats">
          <div className="stat-card">
            <div style={{ fontSize: 18 }}>{stats.total}</div>
            <div style={{ fontSize: 12, color: "#9aa4b2" }}>Total quakes</div>
          </div>

          <div className="stat-card">
            <div style={{ fontSize: 18 }}>{stats.strongest}</div>
            <div style={{ fontSize: 12, color: "#9aa4b2" }}>Strongest (mag)</div>
          </div>

          <div className="stat-card">
            <div style={{ fontSize: 18 }}>{stats.avg}</div>
            <div style={{ fontSize: 12, color: "#9aa4b2" }}>Avg magnitude</div>
          </div>
        </div>
      )}
    </div>
  );
}
