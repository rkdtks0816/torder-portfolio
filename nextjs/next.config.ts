import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public", // PWA 파일이 생성될 폴더
  register: true,
  skipWaiting: true,
});
const nextConfig: NextConfig = withPWA({
  reactStrictMode: true,
  transpilePackages: ["three"],
});

export default nextConfig;
