import { NextResponse } from "next/server";

const POSITIONSTACK_KEY = "cef66b7759df25d805de0fec6ddc6138";

const CITIES = [
  "Mumbai, India",
  "London, UK",
  "New York, USA",
  "Singapore",
  "Dubai, UAE",
  "Tokyo, Japan",
  "Paris, France",
  "Sydney, Australia",
  "Trivandrum, India",
  "Kochi, India",
];

export async function GET() {
  try {
    const results = await Promise.all(
      CITIES.map(async (city) => {
        const res = await fetch(
          `http://api.positionstack.com/v1/forward?access_key=${POSITIONSTACK_KEY}&query=${encodeURIComponent(city)}&limit=1`,
          { next: { revalidate: 3600 } }
        );
        const data = await res.json();
        const loc = data?.data?.[0];
        if (!loc) return null;
        return {
          city: loc.label || city,
          lat: loc.latitude,
          lng: loc.longitude,
        };
      })
    );

    const valid = results.filter(Boolean);
    return NextResponse.json({ locations: valid });
  } catch (error) {
    // Fallback with hardcoded coords if API fails
    return NextResponse.json({
      locations: [
        { city: "Mumbai, India", lat: 19.076, lng: 72.877 },
        { city: "London, UK", lat: 51.507, lng: -0.127 },
        { city: "New York, USA", lat: 40.712, lng: -74.006 },
        { city: "Singapore", lat: 1.352, lng: 103.819 },
        { city: "Dubai, UAE", lat: 25.204, lng: 55.27 },
        { city: "Tokyo, Japan", lat: 35.689, lng: 139.692 },
        { city: "Paris, France", lat: 48.856, lng: 2.352 },
        { city: "Sydney, Australia", lat: -33.868, lng: 151.209 },
        { city: "Trivandrum, India", lat: 8.524, lng: 76.936 },
        { city: "Kochi, India", lat: 9.931, lng: 76.267 },
      ]
    });
  }
}
