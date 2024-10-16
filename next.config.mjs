/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "assets.aceternity.com",
    ],
  },
};

export default nextConfig;
