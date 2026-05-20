import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "modrn.in",
        pathname: "/cdn/shop/**",
      },
    ],
  },
};

export default nextConfig;
