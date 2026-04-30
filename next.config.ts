import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
