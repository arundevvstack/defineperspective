import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Allow development origins for HMR when accessing via network IP or localhost
  allowedDevOrigins: ["localhost", "127.0.0.1", "172.20.10.3"],
};

export default nextConfig;

// if (process.env.NODE_ENV === 'development') {
//   import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
// }
