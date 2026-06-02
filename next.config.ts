import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const cacheForever = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const headerRules = async () => [
  { source: "/(.*)", headers: securityHeaders },
  { source: "/_next/static/(.*)", headers: cacheForever },
  { source: "/assets/(.*)", headers: cacheForever },
  { source: "/sdg/(.*)", headers: cacheForever },
  { source: "/icons/(.*)", headers: cacheForever },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  headers: headerRules,
};

export default nextConfig;
