"use client";

import { useEffect } from "react";


import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import AccomodationHead from "@/components/Accomodation/AccomodationHead";
import AccomodationPreview from "@/components/Accomodation/AccomodationPreview";
import AccomodationFasilitas from "@/components/Accomodation/AccomodationFasilitas";
import AccomodationFasilitasKamar from "@/components/Accomodation/AccomodationFasilitasKamar";
import AccomodationPrice from "@/components/Accomodation/AccomodationPrice";



export default function Akomodasi() {
    useEffect(() => {
        document.title = "Accomodation";
    }, []);

    return <>
        <Navbar />
        <AccomodationHead />
        <AccomodationPreview />
        <AccomodationPrice />
        <AccomodationFasilitasKamar />
        <AccomodationFasilitas />
        <Footer />
    </>
}
