import Header from "@/components/header";
import NavbarKost from "@/components/Kost/Navbar/Navbar";
import Footer from "@/components/footer";
import FiturKami from "@/components/Kost/LandingPage/FiturKami";
import TentangKost from "@/components/Kost/LandingPage/TentangKost";

import ButtonChat from "@/components/buttonChat";

export default function Home() {
    return (
        <>
            <NavbarKost />
            <Header
                bgUrl={"/headerLandingPondok.jpg"}
                subtitle={"Selamat Datang"}
                title={"Kost Aka Dewata"}
                deskripsi={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, mollitia quaerat? Cum sapiente, architecto similique cumque repellat voluptate alias eum debitis, nemo quod maxime ea libero rem facilis, nam dolorem."}
                images={[
                    "/Gallery/gallery (1).jpg",
                    "/Gallery/gallery (2).jpg",
                    "/Gallery/gallery (3).jpg",
                ]}
                buttonText={"Reservasi Sekarang"}
            />
            <FiturKami />
            <TentangKost />


            <Footer />
            <ButtonChat />
        </>
    );
}
