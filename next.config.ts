import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["electron", "electron-fetch"],
};

export default nextConfig;
