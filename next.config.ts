import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove export output for Vercel compatibility - Vercel handles Next.js natively
  // output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
