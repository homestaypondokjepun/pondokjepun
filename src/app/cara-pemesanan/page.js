

export const metadata = {
  title: "Cara Pemesanan",
  description:
    "Panduan lengkap cara pemesanan Pondok Jepun Homestay Banyuwangi. Mudah, cepat, dan praktis untuk memesan kamar penginapan Anda.",
  keywords: [
    "cara pesan homestay Banyuwangi",
    "reservasi Pondok Jepun Homestay",
    "booking homestay Banyuwangi",
    "pesan kamar Banyuwangi",
    "akomodasi murah Banyuwangi",
  ],
  openGraph: {
    title: "Cara Pemesanan",
    description:
      "Ikuti langkah mudah untuk memesan kamar di Pondok Jepun Homestay Banyuwangi. Nikmati kenyamanan liburan Anda dengan reservasi praktis.",
    url: "https://pondokjepun.vercel.app/reservation",
    siteName: "Pondok Jepun Homestay",
    images: [
      {
        url: "https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg",
        width: 1200,
        height: 630,
        alt: "Cara Pemesanan Pondok Jepun Homestay Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Pemesanan",
    description:
      "Pesan kamar di Pondok Jepun Homestay dengan mudah. Proses reservasi cepat, harga terjangkau, dan lokasi strategis di Banyuwangi.",
    images: ["https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg"],
  },
};

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CaraPesanHead from "@/components/cara-pemesanan/cara-pemesanan-head";
import CaraPesan from "@/components/cara-pemesanan/cara-pemesanan";
import ButtonChat from "@/components/buttonChat";


export default function CaraPemesanan() {
  return (
    <>
      <Navbar />
      <CaraPesanHead />
      <CaraPesan />
      <Footer />
      <ButtonChat />
    </>
  );
}
