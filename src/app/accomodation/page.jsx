"use client";

import { useEffect } from "react";

import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import AccomodationHead from "@/components/Accomodation/AccomodationHead";
import AccomodationPreview from "@/components/Accomodation/AccomodationPreview";
import AccomodationFasilitas from "@/components/Accomodation/AccomodationFasilitas";



export default function Akomodasi() {
    useEffect(() => {
        document.title = "Accomodation";
    }, []);

    return <>
        <Contact />
        <Navbar />
        <AccomodationHead />
        <AccomodationPreview />
        <AccomodationFasilitas />
        <Footer />
    </>
}
