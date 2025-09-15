"use client";

import { motion } from "motion/react";
import CardImage from "./CardImage";

const images = [
  "/Gallery/gallery (20).jpg",
  "/Gallery/gallery (18).jpg",
  "/Gallery/gallery (24).jpg",
  "/Gallery/gallery (28).jpg",
];

const RuangKaraoke = () => {
  return (
    <section className="p-1 md:p-4 flex items-center overflow-hidden">
      {/* Tampilan Desktop */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section (Text) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-6 flex-col content-center hidden md:block"
        >
          <h5 className="nicolas mb-2 text-coklat_tua font-bold text-lg md:text-xl">
            Fasilitas
          </h5>

          <section className="rounded-lg text-coklat_tua">
            <h1 className="teramo font-bold text-2xl md:text-3xl">
              Guest Home Pondok Jepun
            </h1>
            <h1 className="teramo font-bold text-2xl md:text-3xl">
              Ruang Karaoke
            </h1>

            <p className="mt-4 mr-30 text-[14px] md:text-[16px] font-semibold text-coklat_tua">
              Menghadirkan Ruang Karaoke sebagai area hiburan yang nyaman dan
              bersih. Tempat ini cocok untuk berkumpul bersama keluarga maupun
              teman, bernyanyi bersama, atau sekadar menikmati suasana santai
              yang hangat. Dengan desain homey dan fasilitas yang tertata rapi,
              Ruang Karaoke ini membuat Anda merasa seperti bernyanyi di rumah
              sendiri, namun dengan suasana yang lebih seru dan penuh
              kebersamaan.
            </p>
          </section>
        </motion.section>

        {/* Right Section (Carousel) */}
        <section className="hidden md:block">
          <CardImage images={images} />
        </section>
      </section>

      {/* Tampilan Mobile */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
        {/* Right Section (Carousel) */}
        <CardImage images={images} />

        {/* Left Section (Text) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="px-6 flex-col content-center block"
        >
          <h5 className="nicolas text-coklat_tua font-bold text-lg md:text-xl mb-2">
            Fasilitas
          </h5>

          <section className="rounded-lg text-coklat_tua">
            <h1 className="teramo font-bold text-2xl md:text-3xl">
              Guest Home Pondok Jepun
            </h1>
            <h1 className="teramo font-bold text-2xl md:text-3xl">
              Ruang Karaoke
            </h1>

            <p className="mt-4 text-[14px] md:text-[16px] font-semibold text-coklat_tua">
              Menghadirkan Ruang Karaoke sebagai area hiburan yang nyaman dan
              bersih. Tempat ini cocok untuk berkumpul bersama keluarga maupun
              teman, bernyanyi bersama, atau sekadar menikmati suasana santai
              yang hangat. Dengan desain homey dan fasilitas yang tertata rapi,
              Ruang Karaoke ini membuat Anda merasa seperti bernyanyi di rumah
              sendiri, namun dengan suasana yang lebih seru dan penuh
              kebersamaan.
            </p>
          </section>
        </motion.section>
      </section>
    </section>
  );
};

export default RuangKaraoke;
