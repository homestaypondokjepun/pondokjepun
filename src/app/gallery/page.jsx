"use client";

import { useEffect } from "react";

import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import GalleryHead from "@/components/Gallery/GalleryHead";
import GalleryFoto from "@/components/Gallery/GalleryFoto";





export default function Gallery() {
    useEffect(() => {
        document.title = "Gallery";
    }, []);

    return <>
        <Contact />
        <Navbar />

        <GalleryHead />

        <GalleryFoto />

        <Footer />
    </>
}
