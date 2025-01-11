import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'us-west-2.graphassets.com'],
  },
};

export default nextConfig;
