"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

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

const OurHome = () => {
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
    <section className="  p-5">
      <section className="w-full p-3">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="p-2 text-center"
        >
          <h2 className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px] mb-1">
            Tempat yang nyaman untuk beristirahat, seperti di rumah sendiri.
          </h2>
          <p className="teramo p-2 text-xl font-medium text-coklat_tua">
            Rumah Kita
          </p>
          <hr className="m-auto w-[80%]  rounded-2xl bg-coklat_tua text-coklat_tua" />
        </motion.section>
      </section>

      <section>
        <section className="w-full sm:w-full lg:w-2/3 m-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-4 overflow-hidden">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="bg-white rounded-md overflow-hidden shadow-md"
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

            <Link href={"/akomodasi"}>
              <div className="p-5">
                <h5 className="mb-2 teramo font-semibold text-coklat_tua text-[24px] md:text-[26px] ">
                  Standard Double Bed
                </h5>

                <hr className="text-coklat_tua mb-3" />
                <p className=" teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
                  Kamar nyaman dengan tempat tidur double untuk dua orang, cocok
                  untuk pasangan atau tamu yang ingin beristirahat dengan tenang.
                  Dilengkapi fasilitas dasar untuk kenyamanan Anda.
                </p>
              </div></Link>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <section className="relative overflow-hidden">
              <div className="relative h-56 md:h-96">
                {images2.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current2 ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <Image
                      src={src}
                      alt={`Slide 2 - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images2.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide2(index)}
                    className={`w-3 h-3 rounded-full ${index === current2 ? "bg-white" : "bg-gray-400"
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

            <Link
              href={"/akomodasi"}>
              <div className="p-5">
                <h5 className="mb-2 teramo font-semibold text-coklat_tua text-[24px] md:text-[26px]">
                  Standard Single Bed
                </h5>
                <hr className="text-coklat_tua mb-3" />
                <p className="mb-3 teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
                  Kamar pribadi dengan tempat tidur single yang nyaman, cocok
                  untuk Anda yang menginginkan suasana tenang dan istirahat
                  berkualitas. Pilihan tepat untuk pengalaman menginap yang simple
                  dan menyenangkan.
                </p>
              </div>
            </Link>
          </motion.div>
        </section>
      </section>
    </section>
  );
};

export default OurHome;
