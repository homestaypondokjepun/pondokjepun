import Header from "@/components/header";
import NavbarKost from "@/components/Kost/Navbar/Navbar";
import Footer from "@/components/footer";
import FiturKami from "@/components/Kost/LandingPage/FiturKami";
import TentangKost from "@/components/Kost/LandingPage/TentangKost";
import ButtonChatKos from "@/components/Kost/buttonChatKos";

export const metadata = {
  title: "Kos Aka Dewata Banyuwangi - Hunian Nyaman & Strategis",
  description:
    "Kos Aka Dewata Banyuwangi menawarkan hunian nyaman dengan kamar bersih, fasilitas lengkap, WiFi, dapur bersama, dan lokasi strategis dekat kampus serta pusat kota.",
  keywords: [
    "kos Banyuwangi",
    "kos dekat kampus Banyuwangi",
    "kos nyaman Banyuwangi",
    "kos dengan WiFi Banyuwangi",
    "hunian strategis Banyuwangi",
    "kos Aka Dewata",
    "kos murah Banyuwangi",
  ],
  openGraph: {
    title: "Kos Aka Dewata Banyuwangi - Hunian Nyaman & Strategis",
    description:
      "Cari kos di Banyuwangi? Kos Aka Dewata menyediakan kamar bersih, WiFi, dapur bersama, serta lokasi strategis yang cocok untuk mahasiswa dan pekerja.",
    url: "https://pondokjepun.com/Kost/LandingPage",
    siteName: "Kos Aka Dewata Banyuwangi",
    images: [
      {
        url: "https://pondokjepun.com/Kos/kos1.jpg",
        width: 1200,
        height: 630,
        alt: "Kos Aka Dewata Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kos Aka Dewata Banyuwangi - Hunian Nyaman & Strategis",
    description:
      "Kos nyaman dengan fasilitas lengkap, WiFi, dapur bersama, dan lokasi dekat kampus di Banyuwangi. Cocok untuk mahasiswa maupun pekerja.",
    images: ["https://pondokjepun.com/Kos/kos1.jpg"],
  },
};

export default function LandingPageKost() {
  return (
    <>
      <NavbarKost />
      <Header
        bgUrl={"/headerLandingPondok.jpg"}
        subtitle={"Selamat Datang"}
        title={"Kost Aka Dewata"}
        deskripsi={
          "Kos Aka Dewata menawarkan hunian nyaman dengan suasana tenang dan lokasi strategis di Banyuwangi. Fasilitas rapi, lingkungan aman, serta akses mudah membuatnya cocok bagi mahasiswa maupun pekerja yang mencari tempat tinggal praktis dan menyenangkan."
        }
        images={["/Kos/kos1.jpg", "/Kos/kos2.jpg", "/Kos/kos3.jpg"]}
        buttonText={"Reservasi Sekarang"}
      />
      <FiturKami />
      <TentangKost />

      <Footer />
      <ButtonChatKos />
    </>
  );
}
