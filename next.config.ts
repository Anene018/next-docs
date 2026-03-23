import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Set the absolute path to your project root
    root: path.join(__dirname),
  },
};

export default nextConfig;
