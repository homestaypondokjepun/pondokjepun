"use client";
import { motion } from "motion/react";

import Image from "next/image";
import { useState } from "react";

const images1 = [
  "/KamarDouble/NDA_7483.jpg",
  "/KamarDouble/NDA_7453.jpg",
  "/KamarDouble/NDA_7457.jpg",
  "/KamarDouble/NDA_7481.jpg",
];

const images2 = [
  "/KamarSingle/NDA_9195.jpg",
  "/KamarSingle/NDA_9197.jpg",
  "/KamarSingle/NDA_9202.jpg",
  "/KamarSingle/NDA_9203.jpg",
];
const AccomodationFasilitasKamar = () => {
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);

  const nextSlide1 = () => {
    setCurrent1((prev) => (prev === images1.length - 1 ? 0 : prev + 1));
  };
  const prevSlide1 = () => {
    setCurrent1((prev) => (prev === 0 ? images1.length - 1 : prev - 1));
  };

  const nextSlide2 = () => {
    setCurrent2((prev) => (prev === images2.length - 1 ? 0 : prev + 1));
  };
  const prevSlide2 = () => {
    setCurrent2((prev) => (prev === 0 ? images2.length - 1 : prev - 1));
  };


    const goToSlide1 = (index) => setCurrent1(index);
    const goToSlide2 = (index) => setCurrent2(index);
    return (
        <div className="">
            <div className="w-full max-w-5xl mx-auto  mb-5 ">

                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "linear" }}
                    className=" text-center p-5"
                >
                    <h2 className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px] pb-4">
                        Fasilitas Kamar
                    </h2>

                    <hr className="m-auto w-[55%] rounded-2xl bg-coklat_tua text-coklat_tua" />
                </motion.section>

                <section>
                    <section className="w-full  m-auto grid grid-cols-1 md:grid-cols-2 gap-10  overflow-hidden">
                        {/* CARD 1 */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: "linear" }}
                            className="bg-white overflow-hidden p-5 shadow-lg border border-gray-200"
                        >
                            <section className="relative overflow-hidden">
                                <div className="relative h-56 md:h-96">
                                    {images1.map((src, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current1 ? "opacity-100" : "opacity-0"
                                                }`}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Slide 1 - ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Indicators */}
                                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                                    {images1.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide1(index)}
                                            className={`w-3 h-3 rounded-full ${index === current1 ? "bg-white" : "bg-gray-400"
                                                }`}
                                        ></button>
                                    ))}
                                </div>

                                {/* Prev Button */}
                                <button
                                    onClick={prevSlide1}
                                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                                        <svg
                                            className="w-4 h-4 text-white"
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
                                    onClick={nextSlide1}
                                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                                        <svg
                                            className="w-4 h-4 text-white"
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
                            </section>

                            <div className="p-5">
                                <h5 className="teramo font-semibold text-coklat_tua text-[20px] md:text-[26px] pb-4">
                                    Standard Double Bed
                                </h5>
                                <hr className="text-coklat_tua" />
                                <section className="p-4 teramo md:text-[16px] text-[14px]  text-coklat_tua">
                                    <ul className=" list-disc  teramo font-semibold ">
                                        <section className="grid grid-cols-2 gap-2">

                                            <li className="p-1">
                                                Kasur Double Bed
                                            </li>
                                            <li className="p-1">
                                                Kamar Mandi
                                            </li>
                                            <li className="p-1">
                                                AC
                                            </li>
                                            <li className="p-1">
                                                Water Heater
                                            </li>


                                            <li className="p-1">
                                                Televisi
                                            </li>
                                            <li className="p-1">
                                                Gantungan Pakaian
                                            </li>
                                            <li className="p-1">
                                                Peralatan Mandi
                                            </li>


        <section>
          <section className="w-full  m-auto grid grid-cols-1 md:grid-cols-2 gap-10  overflow-hidden">
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "linear" }}
              className="bg-white overflow-hidden p-5 shadow-lg border border-gray-200 rounded-md"
            >
              <section className="relative overflow-hidden">
                <div className="relative h-56 md:h-96">
                  {images1.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === current1 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Slide 1 - ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>

                {/* Indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                  {images1.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide1(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === current1 ? "bg-white" : "bg-gray-400"
                      }`}
                    ></button>
                  ))}
                </div>

                {/* Prev Button */}
                <button
                  onClick={prevSlide1}
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                    <svg
                      className="w-4 h-4 text-white"
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
                  onClick={nextSlide1}
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                    <svg
                      className="w-4 h-4 text-white"
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
              </section>

              <div className="p-5">
                <h5 className="mb-2 text-[24px] md:text-[32px] font-bold nicolas tracking-tight text-coklat_tua">
                  Standard Double Bed
                </h5>
                <hr className="text-coklat_tua" />
                <section className="p-2 teramo md:text-[16px] font-normal text-[14px] text-coklat_tua">
                  <ul className=" list-disc list-inside ">
                    <section className="grid grid-cols-2">
                      <li className="p-1">Kasur Double Bed</li>
                      <li className="p-1">Kamar Mandi</li>
                      <li className="p-1">AC (Air Conditioner)</li>
                      <li className="p-1">Water Heater</li>

                      <li className="p-1">Televisi</li>
                      <li className="p-1">Gantungan Pakaian</li>
                      <li className="p-1">Peralatan Mandi</li>
                    </section>
                  </ul>
                </section>
              </div>
            </motion.div>

                            <div className="p-5">
                                <h5 className="teramo font-semibold text-coklat_tua text-[20px] md:text-[26px] pb-4">
                                    Standard Single Bed
                                </h5>
                                <hr className="text-coklat_tua" />
                                <section className="p-4  teramo md:text-[16px] font-normal text-[14px] text-coklat_tua">
                                    <ul className="max-w-md space-y-1  list-disc teramo font-semibold ">
                                        <li className="p-1">
                                            Kasur Single Bed
                                        </li>
                                        <li className="p-1">
                                            Kipas Angin
                                        </li>
                                        <li className="p-1">
                                            Gantungan Pakaian
                                        </li>


                {/* Indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                  {images2.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide2(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === current2 ? "bg-white" : "bg-gray-400"
                      }`}
                    ></button>
                  ))}
                </div>

                {/* Prev Button */}
                <button
                  onClick={prevSlide2}
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                    <svg
                      className="w-4 h-4 text-white"
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
                  onClick={nextSlide2}
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                    <svg
                      className="w-4 h-4 text-white"
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
              </section>

              <div className="p-5">
                <h5 className="mb-2 text-[24px] md:text-[32px] font-bold nicolas tracking-tight text-coklat_tua">
                  Standard Single Bed
                </h5>
                <hr className="text-coklat_tua" />
                <section className="p-2 teramo md:text-[16px] font-normal text-[14px] text-coklat_tua">
                  <ul className="max-w-md space-y-1  list-disc list-inside ">
                    <li className="p-1">Kasur Single Bed</li>
                    <li className="p-1">Kipas Angin</li>
                    <li className="p-1">Gantungan Pakaian</li>
                  </ul>
                </section>
              </div>
            </motion.div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default AccomodationFasilitasKamar;
