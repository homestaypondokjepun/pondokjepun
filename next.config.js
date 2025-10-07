/** @type {import('next').NextConfig} */
const nextConfig = {
  // Header caching untuk static assets
  async headers() {
    return [
      {
        source: "/:all*(js|css|jpg|png|webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // cache 1 tahun
          },
        ],
      },
    ];
  },

  // Konfigurasi Next/Image untuk host eksternal
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200], // responsive sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 400],    // fixed sizes
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**", // semua thumbnail YouTube
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**", // Google Photos
      },
      {
        protocol: "https",
        hostname: "pondokjepun.com",
        port: "",
        pathname: "/**", // domain sendiri
      },
    ],
  },
};

module.exports = nextConfig;
