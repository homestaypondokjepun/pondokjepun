"use client";

import CardImage from "./CardImage";

import { motion } from "motion/react";

const images = [
  "/Gallery/gallery (46).jpg",
  "/Gallery/gallery (58).jpg",
  "/Gallery/gallery (48).jpg",
];

const RuangTamu = () => {
  return (
    <section className="p-1 md:p-4 flex items-center overflow-hidden bg-coklat_muda">
      {/* Tampilan Desktop */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Right Section (Text) */}

        <motion.section
          className="p-6 flex-col content-center hidden md:block "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <section className="p-6 flex-col content-center hidden md:block  ">
            <h5
              className={`nicolas mb-2  text-coklat_tua font-bold text-lg md:text-xl`}
            >
              Fasilitas
            </h5>

            <section className=" rounded-lg text-coklat_tua ">
              <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                Guest Home Pondok Jepun
              </h1>
              <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                Ruang Tamu
              </h1>

              <p className="mt-4 mr-30  teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
                Area bersantai yang nyaman, bersih, dan tertata rapi ini menjadi
                tempat ideal untuk berkumpul bersama keluarga atau teman. Anda
                bisa berbincang santai, bercanda, atau sekadar menikmati suasana
                homestay yang hangat dan penuh keakraban. Dirancang dengan
                sentuhan homey, setiap sudut ruang dibuat untuk menghadirkan
                rasa nyaman layaknya berada di rumah sendiri, sehingga momen
                kebersamaan Anda terasa lebih hangat, intim, dan berkesan.
              </p>
            </section>
          </section>
        </motion.section>

        {/* Left Section (Carousel) */}
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
          className="p-6 flex-col content-center block md:block "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <section className="  flex flex-col justify-center ">
            <h5
              className={`nicolas  text-coklat_tua font-bold text-lg md:text-xl mb-2`}
            >
              Fasilitas
            </h5>

            <section className=" rounded-lg text-coklat_tua">
              <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                Guest Home Pondok Jepun
              </h1>
              <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                Ruang Tamu
              </h1>

              <p className="mt-4 teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
                Area bersantai yang nyaman, bersih, dan tertata rapi ini menjadi
                tempat ideal untuk berkumpul bersama keluarga atau teman. Anda
                bisa berbincang santai, bercanda, atau sekadar menikmati suasana
                homestay yang hangat dan penuh keakraban. Dirancang dengan
                sentuhan homey, setiap sudut ruang dibuat untuk menghadirkan
                rasa nyaman layaknya berada di rumah sendiri, sehingga momen
                kebersamaan Anda terasa lebih hangat, intim, dan berkesan.
              </p>
            </section>
          </section>
        </motion.section>
      </section>
    </section>
  );
};

export default RuangTamu;
