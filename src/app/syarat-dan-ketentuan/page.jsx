

export const metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Baca syarat dan ketentuan menginap di Pondok Jepun Homestay Banyuwangi. Informasi reservasi, pembayaran, pembatalan, check-in, check-out, dan penggunaan fasilitas.",
  keywords: [
    "syarat dan ketentuan homestay",
    "aturan menginap Banyuwangi",
    "kebijakan homestay",
    "Pondok Jepun Homestay",
    "peraturan penginapan Banyuwangi",
  ],
  openGraph: {
    title: "Syarat & Ketentuan",
    description:
      "Pelajari syarat dan ketentuan menginap di Pondok Jepun Homestay. Aturan reservasi, pembayaran, check-in/check-out, pembatalan, dan penggunaan fasilitas.",
    url: "https://pondokjepun.vercel.app/terms",
    siteName: "Pondok Jepun Homestay Banyuwangi",
    images: [
      {
        url: "https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg",
        width: 1200,
        height: 630,
        alt: "Pondok Jepun Homestay Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syarat & Ketentuan",
    description:
      "Ketahui syarat & ketentuan menginap di Pondok Jepun Homestay Banyuwangi. Informasi lengkap tentang reservasi, pembayaran, pembatalan, dan aturan fasilitas.",
    images: ["https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg"],
  },
};

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SyaratKetentuanHead from "@/components/syarat-ketentuan/syarat-ketentuan-head";
import SyaratKetentuan from "@/components/syarat-ketentuan/syarat-ketentuan";
import ButtonChat from "@/components/buttonChat";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <SyaratKetentuanHead />
      <SyaratKetentuan />
      <Footer />
      <ButtonChat />
    </>
  );
}
