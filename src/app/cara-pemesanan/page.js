

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
import Header from "@/components/header";
import CaraPesan from "@/components/cara-pemesanan/cara-pemesanan";
import ButtonChat from "@/components/buttonChat";


export default function CaraPemesanan() {
  return (
    <>
      <Navbar />
      <Header
        bgUrl={"/headerAkomodasiPondok.jpg"}
        title={"Cara Pemesanan"}
        deskripsi={"Temukan langkah mudah untuk memesan penginapan terbaik Anda bersama kami. Nikmati proses pemesanan yang praktis, cepat, dan aman, sehingga liburan atau perjalanan Anda menjadi lebih nyaman dan menyenangkan sejak awal"}
        images={[
          "/Gallery/gallery (45).jpg",
          "/Gallery/gallery (46).jpg",
          "/Gallery/gallery (20).jpg",
          "/Gallery/gallery (61).jpg",
        ]}
      />
      <CaraPesan />
      <Footer />
      <ButtonChat />
    </>
  );
}
