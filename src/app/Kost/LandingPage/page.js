import KostHead from "@/components/Kost/LandingPage/Header";
import NavbarKost from "@/components/Kost/Navbar/Navbar";
import Footer from "@/components/footer";
import FiturKami from "@/components/Kost/LandingPage/FiturKami";
import TentangKost from "@/components/Kost/LandingPage/TentangKost";

import ButtonChat from "@/components/buttonChat";

export default function Home() {
    return (
        <>
            <NavbarKost />
            <KostHead />
            <FiturKami />
            <TentangKost />


            <Footer />
            <ButtonChat />
        </>
    );
}
