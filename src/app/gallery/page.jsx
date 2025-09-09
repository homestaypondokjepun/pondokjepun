
"use client";

import { useEffect } from "react";


import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


import GalleryHead from "@/components/Gallery/GalleryHead";
import GalleryFoto from "@/components/Gallery/GalleryFoto";

export const metadata = {
  title: "Galeri",
  description:
    "Lihat koleksi foto kamar, fasilitas, dan suasana nyaman di Pondok Jepun Homestay Banyuwangi. Tersedia galeri lengkap untuk melihat penginapan sebelum reservasi.",
  keywords: [
    "galeri homestay Banyuwangi",
    "foto Pondok Jepun Banyuwangi",
    "foto kamar homestay Banyuwangi",
    "gambar penginapan Banyuwangi",
    "guest house Banyuwangi",
  ],
  openGraph: {
    title: "Galeri",
    description:
      "Koleksi foto kamar, fasilitas, dan suasana di Pondok Jepun Homestay Banyuwangi.",
    url: "https://pondokjepun.vercel.app/gallery",
    siteName: "Pondok Jepun Homestay Banyuwangi",
    images: [
      {
        url: "https://pondokjepun.vercel.app/Gallery/gallery%20(16).jpg",
        width: 1200,
        height: 630,
        alt: "Galeri Pondok Jepun Homestay Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeri ",
    description:
      "Jelajahi galeri foto homestay Banyuwangi. Lihat suasana, kamar, dan fasilitas Pondok Jepun.",
    images: ["https://pondokjepun.vercel.app/Gallery/gallery%20(16).jpg"],
  },
};

export default function Gallery() {

    useEffect(() => {
        document.title = "Gallery";
    }, []);

    return <>

        <Navbar />

        <GalleryHead />

        <GalleryFoto />

        <Footer />

  );
}
