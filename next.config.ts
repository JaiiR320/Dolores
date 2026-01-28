import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  allowedDevOrigins: [
    "http://192.168.1.181:3000",
    "http://localhost:3000",
  ],
};

export default nextConfig;
