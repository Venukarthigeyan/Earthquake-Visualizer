import { useEffect, useState } from "react";

const FEEDS = {
  day: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
  week: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
  month: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
};

export default function useEarthquakes(range = "day") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const controller = new AbortController();
    fetch(FEEDS[range], { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network response not OK");
        return res.json();
      })
      .then((json) => {
        setData(json.features || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message || "Error fetching");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [range]);

  return { data, loading, error };
}
