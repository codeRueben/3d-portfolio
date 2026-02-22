/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
      },
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;
