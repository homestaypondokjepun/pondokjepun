
"use client";

import { useEffect } from "react";


import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import ContactHead from "@/components/contact/ContactHead";
import ContactForm from "@/components/contact/ContactForm";
import ContactMaps from "@/components/contact/ContactMaps";

export const metadata = {
    title: "Kontak",
    description:
        "Hubungi Pondok Jepun Homestay Banyuwangi untuk reservasi dan informasi. Lokasi strategis di pusat kota Banyuwangi, dekat Satpas Banyuwangi. Tersedia WhatsApp, telepon, dan alamat lengkap.",
    keywords: [
        "kontak Pondok Jepun",
        "hubungi homestay Banyuwangi",
        "nomor telepon homestay Banyuwangi",
        "alamat Pondok Jepun Banyuwangi",
        "reservasi homestay Banyuwangi",
    ],
    openGraph: {
        title: "Kontak",
        description:
            "Butuh penginapan di Banyuwangi? Hubungi Pondok Jepun Homestay sekarang juga untuk reservasi. Lokasi strategis dekat pusat kota dan wisata.",
        url: "https://pondokjepun.vercel.app/contact",
        siteName: "Pondok Jepun",
        images: [
            {
                url: "https://pondokjepun.vercel.app/Contact/NDA_7444.jpg",
                width: 1200,
                height: 630,
                alt: "Pondok Jepun",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kontak",
        description:
            "Reservasi kamar dan informasi homestay di Banyuwangi, hubungi Pondok Jepun via WhatsApp atau telepon.",
        images: ["https://pondokjepun.vercel.app/Contact/NDA_7444.jpg"],
    },
};

export default function Kontak() {


    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    return (
        <>
            <Navbar />
            <ContactHead />
            <ContactForm />
            <ContactMaps />
            <Footer />

        </>
    );
}
