import Navbar from "@/components/navbar";
import Header from "@/components/header";
import KebijakanPrivasi from "@/components/kebijakan-privasi/kebijakan-privasi";
import Footer from "@/components/footer";
import ButtonChat from "@/components/buttonChat";

export const metadata = {
  title: "Kebijakan Privasi",
  description:
    "Pelajari kebijakan privasi Pondok Jepun Homestay Banyuwangi. Bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi tamu serta hak-hak Anda terkait informasi pribadi.",
  keywords: [
    "kebijakan privasi homestay",
    "data pribadi Banyuwangi",
    "privasi tamu Pondok Jepun",
    "perlindungan data homestay",
    "Pondok Jepun Homestay",
  ],
  openGraph: {
    title: "Kebijakan Privasi",
    description:
      "Ketahui bagaimana Pondok Jepun Homestay Banyuwangi mengelola dan melindungi data pribadi tamu. Informasi tentang pengumpulan, penggunaan, dan hak-hak tamu.",
    url: "https://pondokjepun.vercel.app/privacy-policy",
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
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kebijakan Privasi",
    description:
      "Baca kebijakan privasi Pondok Jepun Homestay Banyuwangi. Cara kami mengelola data tamu, melindungi privasi, dan hak-hak Anda sebagai tamu.",
    images: ["https://pondokjepun.com/LandingPage/NDA_7431.jpg"],
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <Header
        bgUrl={"/headerAkomodasiPondok.jpg"}
        title={"Kebijakan Privasi"}
        deskripsi={
          "Privasi Anda adalah prioritas kami. Informasi yang Anda berikan hanya digunakan untuk keperluan layanan, dijaga kerahasiaannya, dan tidak dibagikan ke pihak ketiga tanpa izin."
        }
      />
      <KebijakanPrivasi />
      <Footer />
      <ButtonChat />
    </>
  );
}
