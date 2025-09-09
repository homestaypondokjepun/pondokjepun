"use client";

import { useEffect } from "react";

import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import ContactHead from "@/components/contact/ContactHead";
import ContactForm from "@/components/contact/ContactForm";
import ContactMaps from "@/components/contact/ContactMaps";



export default function Kontak() {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    return <>
        <Contact />
        <Navbar />
        <ContactHead />
        <ContactForm />
        <ContactMaps />
        <Footer />
    </>
}
