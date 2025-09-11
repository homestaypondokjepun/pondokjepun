import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pondok Jepun",
  description:
    "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
  keywords: [
    "Pondok Jepun Homestay",
    "homestay Banyuwangi",
    "penginapan murah Banyuwangi",
    "akomodasi Banyuwangi",
    "hotel Banyuwangi",
    "guest house Banyuwangi",
    "Pondok Jepun Banyuwangi",
  ],
  images: [
    {
      url: "https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg",
      width: 1200,
      height: 630,
      alt: "Pondok Jepun Homestay Banyuwangi",
    },
  ],
  openGraph: {
    title: "Pondok Jepun",
    description:
      "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
    url: "https://pondokjepun.vercel.app",
    siteName: "Pondok Jepun Homestay Banyuwangi",
    images: [
      {
        url: "https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg",
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
    title: "Pondok Jepun Homestay Banyuwangi - Penginapan Nyaman & Murah",
    description:
      "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
    images: ["https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg"],
  },
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
          integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
