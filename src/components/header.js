import Image from "next/image";

import { motion } from "motion/react";

const Header = () => {
  return (
    <section className="h-[40vh] md:h-[65vh] relative">
      <Image
        src="/LandingPage/NDA_7431.jpg"
        fill
        alt="Living room"
        className="m-auto bg-cover bg-center object-cover  "
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="nicolas mb-4 md:text-[52px]  text-[32px] font-extrabold tracking-tight leading-none text-white   drop-shadow-lg"
        >
          Pondok Jepun
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="teramo mb-8 md:text-[18px] text-[14px] text-white sm:px-16 lg:px-48 drop-shadow-md "
        >
          Tempat nyaman dan tenang, cocok untuk liburan atau perjalanan bisnis.
          Lokasi strategis, fasilitas lengkap, dan suasana seperti di rumah
          sendiri.
        </motion.p>
      </div>
    </section>
  );
};

export default Header;
