export function magColor(mag) {
  if (mag >= 5) return "#ff3b30"; // red
  if (mag >= 3) return "#ff9f00"; // orange
  return "#22c55e"; // green
}

export function magRadius(mag) {
  if (!mag || mag <= 0) return 4;
  // scale: ensure visible but not huge
  return Math.max(4, mag * 4);
}

export function formatTime(unixMs) {
  const d = new Date(unixMs);
  return d.toLocaleString();
}

export function coordsFromFeature(feature) {
  // GeoJSON: [lon, lat, depth]
  const [lon, lat] = feature.geometry.coordinates;
  return [lat, lon];
}

export function depthFromFeature(feature) {
  const coords = feature.geometry.coordinates;
  return coords[2];
}
