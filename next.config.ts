import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.diariomotor.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'aparta.pe',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'logodownload.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'plin.pe',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
