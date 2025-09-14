import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "../lib/fontawesome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Pondok Jepun Banyuwangi Homestay - Pilihan Nyaman untuk Liburan & Bisnis",
  description:
    "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
  keywords: [
    "Pondok Jepun Homestay",
    "pondok jepun homestay",
    "homestay Banyuwangi",
    "penginapan murah Banyuwangi",
    "akomodasi Banyuwangi",
    "hotel Banyuwangi",
    "guest house Banyuwangi",
    "Pondok Jepun Banyuwangi",
  ],
  images: [
    {
      url: "https://pondokjepun.com/LandingPage/NDA_7431.jpg",
      width: 1200,
      height: 630,
      alt: "Pondok Jepun Homestay Banyuwangi",
    },
  ],
  openGraph: {
    title:
      "Pondok Jepun Banyuwangi Homestay - Pilihan Nyaman untuk Liburan & Bisnis",
    description:
      "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
    url: "https://pondokjepun.vercel.app",
    siteName: "Pondok Jepun Homestay Banyuwangi",
    images: [
      {
        url: "https://pondokjepun.com/LandingPage/NDA_7431.jpg",
        width: 1200,
        height: 630,
        alt: "Pondok Jepun Homestay Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pondok Jepun Banyuwangi Homestay - Pilihan Nyaman untuk Liburan & Bisnis",
    description:
      "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
    images: ["https://pondokjepun.com/LandingPage/NDA_7431.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
