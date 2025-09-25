import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Fasilitas from "@/components/fasilitas";
import Welcome from "@/components/welcome";
import OurHome from "@/components/ourHome";
import Video from "@/components/video";
import ReviewUser from "@/components/reviewUser";
import ButtonChat from "@/components/buttonChat";
import RuangTamuHome from "@/components/home/ruang-tamu-home";
import RuangMakanHome from "@/components/home/ruang-makan-home";
import RuangKaraokeHome from "@/components/home/ruang-karaoke-home";
import KolamIkanHome from "@/components/home/kolam-ikan-home";

export const metadata = {
  title:
    "Pondok Jepun Banyuwangi Homestay - Pilihan Nyaman untuk Liburan & Bisnis",
  description:
    "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
  keywords: [
    'Pondok Jepun Homestay Banyuwangi',
    // (brand + lokasi, keyword utama)
    'Homestay Banyuwangi',
    // (short - tail populer, persaingan tinggi)
    'Penginapan murah Banyuwangi',
    // (user intent harga)
    'Guest House Banyuwangi',
    // (alternatif pencarian akomodasi)
    'Akomodasi strategis di Banyuwangi',
    // (nilai jual lokasi)
    'Homestay nyaman di pusat kota Banyuwangi',
    // (fokus kenyamanan & lokasi)
    'Homestay keluarga di Banyuwangi',
    // (target segmen family traveler)
    'Homestay dekat Kawah Ijen Banyuwangi',
    // (target wisatawan Ijen)

  ],
  images: [
    {
      url: "https://pondokjepun.com/LandingPage/NDA_7431.jpg",
      width: 1200,
      height: 630,
      alt: "Pondok Jepun Homestay Banyuwangi",
    },
  ],
  openGraph: {
    title:
      "Pondok Jepun Banyuwangi Homestay - Pilihan Nyaman untuk Liburan & Bisnis",
    description:
      "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
    url: "https://pondokjepun.com",
    siteName: "Pondok Jepun Homestay Banyuwangi",
    images: [
      {
        url: "https://pondokjepun.com/LandingPage/NDA_7431.jpg",
        width: 1200,
        height: 630,
        alt: "Pondok Jepun Homestay Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pondok Jepun Banyuwangi Homestay - Pilihan Nyaman untuk Liburan & Bisnis",
    description:
      "Ada yang baru di Banyuwangi! Pondok Jepun Guest House menawarkan pengalaman menginap nyaman di jantung kota Banyuwangi. Nikmati kamar bersih, fasilitas lengkap (AC, TV, water heater, WiFi, dapur, ruang karaoke, dan spot foto keren) dengan harga terjangkau. Lokasi strategis hanya 100 meter dari Satpas Banyuwangi.",
    images: ["https://pondokjepun.com/LandingPage/NDA_7431.jpg"],
  },
  icons: {
    icon: "https://pondokjepun.com/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header
        bgUrl={"/headerLandingPondok.jpg"}
        title={"Pondok Jepun Homestay"}
        subtitle={"Homestay Nyaman untuk Liburan dan Bisnis di Banyuwangi"}
        deskripsi={
          "Tempat nyaman dan tenang, cocok untuk liburan atau perjalanan bisnis. Lokasi strategis, fasilitas lengkap, dan suasana seperti di rumah"
        }
        images={[
          "/Gallery/gallery (1).jpg",
          "/Gallery/gallery (2).jpg",
          "/Gallery/gallery (3).jpg",
        ]}
      />
      <Welcome />
      <OurHome />
      <RuangTamuHome />
      <RuangMakanHome />
      <RuangKaraokeHome />
      <KolamIkanHome />
      <Fasilitas />
      <Video />
      <ReviewUser />
      <Footer />
      <ButtonChat />
    </>
  );
}
