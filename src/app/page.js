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

export default function Home() {
  return (
    <>
      <Navbar />
      <Header
        bgUrl={"/headerLandingPondok.jpg"}
        title={"Pondok Jepun Homestay"}
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
      <Fasilitas />
      <Video />
      <ReviewUser />
      <Footer />
      <ButtonChat />
    </>
  );
}
