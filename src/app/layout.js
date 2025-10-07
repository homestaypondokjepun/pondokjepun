import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "../lib/fontawesome";
import AnalytycsListener from "./analytics-listener";
import Schema from '../lib/schema'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://pondokjepun.com"),
  title: {
    default: "Pondok Jepun Homestay Banyuwangi",
    template: "%s | Pondok Jepun Homestay Banyuwangi",
  },
  description:
    "Pondok Jepun Homestay Banyuwangi – penginapan nyaman, strategis, dan terjangkau di pusat kota Banyuwangi. Cocok untuk liburan, keluarga, maupun perjalanan bisnis.",
  keywords: [
    'Pondok Jepun Homestay Banyuwangi',
    // (brand + lokasi, keyword utama)
    'Homestay Banyuwangi',
    // (short - tail populer, persaingan tinggi)
    'Penginapan murah Banyuwangi',
    // (user intent harga)
    'Guest House Banyuwangi',
    // (alternatif pencarian akomodasi)
    'Akomodasi strategis di Banyuwangi',
    // (nilai jual lokasi)
    'Homestay nyaman di pusat kota Banyuwangi',
    // (fokus kenyamanan & lokasi)
    'Homestay keluarga di Banyuwangi',
    // (target segmen family traveler)
    'Homestay dekat Kawah Ijen Banyuwangi',
    // (target wisatawan Ijen)

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
    title: "Pondok Jepun Homestay Banyuwangi",
    description:
      "Nikmati pengalaman menginap nyaman di Pondok Jepun Homestay Banyuwangi. Lokasi strategis, fasilitas lengkap, harga terjangkau.",
    url: "https://pondokjepun.com",
    siteName: "Pondok Jepun Homestay",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://pondokjepun.com/LandingPage/NDA_7431.jpg",
        width: 1200,
        height: 630,
        alt: "Pondok Jepun Homestay Banyuwangi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pondok Jepun Homestay Banyuwangi",
    description:
      "Pondok Jepun Homestay – pilihan akomodasi nyaman dan murah di pusat kota Banyuwangi.",
    images: ["https://pondokjepun.com/LandingPage/NDA_7431.jpg"],
  },
  icons: {
    icon: "https://pondokjepun.com/favicon.ico",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Schema />
        {children}
        <AnalytycsListener />

        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          strategy="lazyOnload"
        />

        {/* ✅ Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pondok Jepun Guest House",
              url: "https://pondokjepun.com",
              logo: "https://pondokjepun.com/favicon.ico",
              sameAs: [
                "https://www.instagram.com/pondok_jepun25",
              ],
            }),
          }}
        />


        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R3ENRZV2L8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag; // <- penting agar global gtag ada
            gtag('js', new Date());
            gtag('config', 'G-R3ENRZV2L8', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

      </body>
    </html>
  );
}
