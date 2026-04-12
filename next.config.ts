// Deploy Trigger: Secrets configured. Initializing build 2026-04-03 18:30:00
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Allow development origins for HMR when accessing via network IP or localhost
  allowedDevOrigins: ["localhost", "127.0.0.1", "172.20.10.3"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.youtube.com https://s.ytimg.com https://api.mapbox.com; style-src 'self' 'unsafe-inline' https://api.mapbox.com; img-src 'self' data: https://images.unsplash.com https://defineperspective.in https://i.ytimg.com https://img.youtube.com https://api.mapbox.com; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insight.com https://www.youtube.com https://api.mapbox.com *.mapbox.com; media-src 'self' https://player.vimeo.com https://vimeo.com *.vimeo.com https://www.youtube.com; frame-src 'self' https://www.youtube.com https://youtube.com; worker-src 'self' blob:; frame-ancestors 'none'; upgrade-insecure-requests;",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// if (process.env.NODE_ENV === 'development') {
//   import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
// }
