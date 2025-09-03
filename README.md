# Earthquake Visualizer

A React + Leaflet app that visualizes recent earthquakes from USGS feeds.

## Features

- Interactive world map (react-leaflet)
- Displays earthquakes (day/week/month feeds)
- Circle markers sized & colored by magnitude
- Popups show place, magnitude, depth, time & USGS link
- Sidebar list of earthquakes (click to fly to location)
- Filter by minimum magnitude & time range
- Stats panel (total, strongest, average)

## Tech

- React 18 + Vite
- react-leaflet + Leaflet
- USGS Earthquake GeoJSON feeds

## How to run (local)

```bash
git clone <https://github.com/Venukarthigeyan/Earthquake-Visualizer.git>
cd earthquake-visualizer
npm install
npm run dev
# Earthquake-Visualizer
