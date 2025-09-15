"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CardImage from "./CardImage";

import { motion } from "motion/react";

const images = [
  "/Gallery/gallery (45).jpg",
  "/Gallery/gallery (36).jpg",
  "/Gallery/gallery (37).jpg",
  "/Gallery/gallery (38).jpg",
  "/Gallery/gallery (15).jpg",
];
const RuangMakan = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="p-1 md:p-4 flex items-center overflow-hidden ">
      {/* Tampilan Desktop */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Left Section (Carousel) */}
        <section className="hidden md:block">
          <CardImage images={images} />
        </section>
        {/* Right Section (Text) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-6 flex-col content-center hidden md:block    "
        >
          <h5
            className={`mb-2 nicolas text-coklat_tua font-bold text-lg md:text-xl `}
          >
            Fasilitas
          </h5>

          <section className=" rounded-lg text-coklat_tua">
            <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
              Guest Home Pondok Jepun
            </h1>
            <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
              Ruang Makan & Dapur
            </h1>

            <p className="mt-4  mr-30 md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
              Tempat yang bersih, rapi, dan dilengkapi dengan fasilitas memadai
              untuk Anda menikmati hidangan sekaligus menyiapkan makanan dengan
              nyaman. Dengan suasana homey yang hangat, area ini dirancang agar
              Anda merasa seperti berada di rumah sendiri. Cocok untuk berkumpul
              bersama keluarga atau teman, berbagi momen kebersamaan, sekaligus
              mendukung kepraktisan selama menginap di homestay kami.
            </p>
          </section>
        </motion.section>
      </section>
      {/* Tampilan Mobile */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
        {/* Right Section (Carousel) */}
        <CardImage images={images} />
        {/* Left Section (Text) */}
        <motion.section
          className="p-6  flex-col content-center block md:block "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <section className="  flex flex-col justify-center ">
            <h5
              className={`nicolas   text-coklat_tua font-bold text-lg md:text-xl mb-2`}
            >
              Fasilitas
            </h5>

            <section className=" rounded-lg text-coklat_tua">
              <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                Guest Home Pondok Jepun
              </h1>
              <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                Ruang Makan & Dapur
              </h1>

              <p className="mt-4 md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
                Tempat yang bersih, rapi, dan dilengkapi dengan fasilitas
                memadai untuk Anda menikmati hidangan sekaligus menyiapkan
                makanan dengan nyaman. Dengan suasana homey yang hangat, area
                ini dirancang agar Anda merasa seperti berada di rumah sendiri.
                Cocok untuk berkumpul bersama keluarga atau teman, berbagi momen
                kebersamaan, sekaligus mendukung kepraktisan selama menginap di
                homestay kami.
              </p>
            </section>
          </section>
        </motion.section>
      </section>
    </section>
  );
};

export default RuangMakan;
