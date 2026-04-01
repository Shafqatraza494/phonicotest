import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ["platform.phonico.com"],
  },
};

export default nextConfig;
