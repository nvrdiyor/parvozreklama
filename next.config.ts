import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev serverga lokal tarmoqdagi boshqa qurilmalardan (192.168.x.x) kirishga ruxsat
  allowedDevOrigins: ["192.168.1.20", "192.168.*.*"],
};

export default nextConfig;
