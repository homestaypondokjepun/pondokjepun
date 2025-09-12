/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        // kalau mau lebih spesifik bisa pakai port dan pathname, tapi opsional
        // port: "",
        // pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
