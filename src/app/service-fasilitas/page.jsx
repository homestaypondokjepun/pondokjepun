"use client";


import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RuangTamu from "@/components/service-fasilitas/ruang-tamu";
import MejaMakan from "@/components/service-fasilitas/ruang-makan";
import RuangKaraoke from "@/components/service-fasilitas/ruang-karaoke";


export default function Service_Fasilitas() {

    return <>

        <Navbar />
        <Header />
        <RuangTamu />
        <MejaMakan />
        <RuangKaraoke />
        <Footer />
    </>
}
