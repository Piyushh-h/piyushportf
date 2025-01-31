import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: "/piyushportf", // Required for GitHub Pages
  assetPrefix: "/piyushportf/",
};

export default nextConfig;
