"use client";

import { useEffect } from "react";


import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import AccomodationHead from "@/components/Accomodation/AccomodationHead";
import AccomodationPreview from "@/components/Accomodation/AccomodationPreview";
import AccomodationFasilitas from "@/components/Accomodation/AccomodationFasilitas";
import AccomodationFasilitasKamar from "@/components/Accomodation/AccomodationFasilitasKamar";
import AccomodationPrice from "@/components/Accomodation/AccomodationPrice";

export const metadata = {
    title: "Akomodasi",
    description:
        "Temukan pilihan akomodasi nyaman di Pondok Jepun Homestay Banyuwangi. Kamar bersih, fasilitas lengkap, lokasi strategis dekat wisata Banyuwangi, cocok untuk liburan atau perjalanan bisnis.",
    keywords: [
        "akomodasi Banyuwangi",
        "penginapan Banyuwangi",
        "Pondok Jepun Homestay",
        "homestay murah Banyuwangi",
        "kamar nyaman Banyuwangi",
        "hotel Banyuwangi",
    ],
    openGraph: {
        title: "Akomodasi",
        description:
            "Nikmati akomodasi nyaman di Pondok Jepun Homestay Banyuwangi. Fasilitas lengkap: AC, TV, wifi, dapur bersih, dan ruang tamu luas.",
        url: "https://pondokjepun.vercel.app/accomodation",
        siteName: "Pondok Jepun Homestay",
        images: [
            {
                url: "https://pondokjepun.vercel.app/Accomodation/NDA_7465.jpg",
                width: 1200,
                height: 630,
                alt: "Akomodasi Pondok Jepun Homestay Banyuwangi",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Akomodasi",
        description:
            "Kamar bersih, nyaman, dan harga terjangkau. Pondok Jepun Homestay siap membuat liburan Anda di Banyuwangi lebih berkesan.",
        images: ["https://pondokjepun.vercel.app/Accomodation/NDA_7465.jpg"],
    },
};

export default function Akomodasi() {
    useEffect(() => {
        document.title = "Accomodation";
    }, []);

    return (
        <>
            <Navbar />
            <AccomodationHead />
            <AccomodationPreview />
            <AccomodationPrice />
            <AccomodationFasilitasKamar />
            <AccomodationFasilitas />
            <Footer />
        </>
    );
}
