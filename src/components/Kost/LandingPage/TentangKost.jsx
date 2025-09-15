"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { motion } from "motion/react";

const images = [
  "/Kos/ruang-kos2.jpg",
  "/Kos/ruang-kos3.jpg",
  "/Kos/ruang-kos1.jpg",
];

const TentangKost = () => {
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
    <section className="bg-coklat_muda w-full pb-1 pt-1">
      <section className="w-full max-w-[95%] mx-auto md:max-w-[80%]   mb-10 mt-10 flex items-center overflow-hidden">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Right Section (Text) */}
          <motion.section
            className="p-0 md:p-6 flex-col content-center   "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
          >
            <section className="p-6  flex-col content-center    ">
              <section className=" rounded-lg text-coklat_tua ">
                <h1
                  className={`text-center md:text-left teramo font-bold text-2xl md:text-3xl`}
                >
                  Tentang Kost Arka Dewata
                </h1>
                <p className="mt-4  md:mr-30 text-center md:text-left  teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, quam voluptatem quisquam perspiciatis velit ducimus
                  aspernatur et harum consectetur! Est quia porro optio
                  consequatur dignissimos voluptate reiciendis nulla placeat
                  molestias.
                </p>
              </section>
            </section>
          </motion.section>

          {/* Left Section (Carousel) */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="relative  overflow-hidden content-center "
          >
            {/* Wrapper */}
            <section className="relative max-w-[90%]  m-auto aspect-video md:aspect-full md:h-full ">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </section>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-3 md:bottom-5 left-1/2 space-x-2 md:space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                    index === current ? "bg-white" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute top-0 left-0 z-30  flex items-center justify-center h-full ml-10 md:ml-15"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </span>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full mr-10 md:mr-15"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </span>
            </button>
          </motion.section>
        </section>
      </section>
    </section>
  );
};

export default TentangKost;
