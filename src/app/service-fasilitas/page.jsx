

import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


import RuangTamu from "@/components/service-fasilitas/ruang-tamu";
import MejaMakan from "@/components/service-fasilitas/ruang-makan";
import RuangKaraoke from "@/components/service-fasilitas/ruang-karaoke";
import KolamIkan from "@/components/service-fasilitas/kolam-ikan";
import ReviewUser from "@/components/reviewUser";

import ButtonChat from "@/components/buttonChat";

export const metadata = {
  title: "Fasilitas & Layanan",
  description:
    "Nikmati fasilitas lengkap di Pondok Jepun Homestay Banyuwangi: kamar nyaman, AC, TV, water heater, WiFi, dapur bersih, ruang tamu, ruang karaoke, meja makan, dan spot foto menarik.",
  keywords: [
    "fasilitas Pondok Jepun Banyuwangi",
    "services homestay Banyuwangi",
    "guest house dengan WiFi Banyuwangi",
    "penginapan murah fasilitas lengkap",
    "homestay dengan karaoke Banyuwangi",
    "akomodasi nyaman Banyuwangi",
  ],
  openGraph: {
    title: "Fasilitas & Layanan",
    description:
      "Pondok Jepun Homestay menawarkan kamar bersih dan nyaman dengan fasilitas AC, TV, water heater, WiFi, dapur bersih, ruang karaoke, meja makan, dan spot foto keren.",
    url: "https://pondokjepun.vercel.app/service-fasilitas",
    siteName: "Pondok Jepun Homestay Banyuwangi",
    images: [
      {
        url: "https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg",
        width: 1200,
        height: 630,
        alt: "Fasilitas Pondok Jepun Homestay Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasilitas & Layanan",
    description:
      "Temukan kenyamanan menginap dengan fasilitas lengkap: kamar nyaman, AC, TV, water heater, WiFi, dapur, ruang tamu, karaoke, dan spot foto menarik.",
    images: ["https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg"],
  },
};

export default function Service_Fasilitas() {

  return (
    <>

      <Navbar />
      <Header />
      <RuangTamu />
      <MejaMakan />
      <RuangKaraoke />
      <KolamIkan />
      <ReviewUser />
      <Footer />
      <ButtonChat />

    </>
  );

}
