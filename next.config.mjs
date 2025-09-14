/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200], // tambahin 320 & 480
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 400], // untuk ukuran fixed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
