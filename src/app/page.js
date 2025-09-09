"use client";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Fasilitas from "@/components/fasilitas";
import Welcome from "@/components/welcome";
import OurHome from "@/components/ourHome";
import RuangTamu from "@/components/service-fasilitas/ruang-tamu";
import RuangMakan from "@/components/service-fasilitas/ruang-makan";
import RuangKaraoke from "@/components/service-fasilitas/ruang-karaoke";
import Video from "@/components/video";

export default function Home() {
  return (
    <>
      <Contact />
      <Navbar />
      <Header />
      <Welcome />
      <OurHome />
      <RuangTamu />
      <RuangMakan />
      <RuangKaraoke />
      <Fasilitas />
      <Video />
      <Footer />
    </>
  );
}
