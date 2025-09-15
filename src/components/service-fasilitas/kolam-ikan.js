"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CardImage from "./CardImage";

import { motion } from "motion/react";

const images = [
  "/Gallery/gallery (63).jpg",
  "/Gallery/gallery (62).jpg",
  "/Gallery/gallery (59).jpg",
  "/Gallery/gallery (60).jpg",
  "/Gallery/gallery (61).jpg",
  "/Gallery/gallery (64).jpg",
];
const KolamIkan = () => {
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
    <section className="p-1 md:p-4 flex items-center overflow-hidden bg-coklat_muda">
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
                Kolam Ikan
              </h1>

              <p className="mt-4 mr-30 md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
                Kolam ikan di area penginapan kami dirancang untuk menghadirkan
                suasana alami dan menenangkan bagi setiap tamu. Anda bisa
                menikmati momen santai sambil melihat ikan berenang di air
                jernih yang dikelilingi taman asri. Kehadiran kolam ikan ini
                menambah keindahan sekaligus memberikan pengalaman menginap yang
                lebih hangat dan menenangkan.
              </p>
            </section>
          </section>
        </motion.section>
      </section>

      {/* Tampilan Mobile */}
      <section className="grid grid-cols-1  md:grid-cols-2 gap-6 md:hidden ">
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
                Kolam Ikan
              </h1>

              <p className="mt-4 md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
                Kolam ikan di area penginapan kami dirancang untuk menghadirkan
                suasana alami dan menenangkan bagi setiap tamu. Anda bisa
                menikmati momen santai sambil melihat ikan berenang di air
                jernih yang dikelilingi taman asri. Kehadiran kolam ikan ini
                menambah keindahan sekaligus memberikan pengalaman menginap yang
                lebih hangat dan menenangkan.
              </p>
            </section>
          </section>
        </motion.section>
      </section>
    </section>
  );
};

export default KolamIkan;
