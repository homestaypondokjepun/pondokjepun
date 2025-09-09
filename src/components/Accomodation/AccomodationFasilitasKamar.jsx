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

    const nextSlide1 = () =>
        setCurrent1((prev) => (prev === images1.length - 1 ? 0 : prev + 1));
    const prevSlide1 = () =>
        setCurrent1((prev) => (prev === 0 ? images1.length - 1 : prev - 1));

    const nextSlide2 = () =>
        setCurrent2((prev) => (prev === images2.length - 1 ? 0 : prev + 1));
    const prevSlide2 = () =>
        setCurrent2((prev) => (prev === 0 ? images2.length - 1 : prev - 1));

    return (
        <div className="w-full max-w-5xl mx-auto mb-5">
            {/* Header */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="text-center p-5"
            >
                <h2 className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px] pb-4">
                    Fasilitas Kamar
                </h2>
                <hr className="m-auto w-[55%] rounded-2xl bg-coklat_tua text-coklat_tua" />
            </motion.section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* CARD 1 - Double Bed */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "linear" }}
                    className="bg-white overflow-hidden p-5 shadow-lg border border-gray-200 rounded-md"
                >
                    {/* Slider */}
                    <div className="relative h-56 md:h-96 overflow-hidden">
                        {images1.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current1 ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Double Bed ${index + 1}`}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                        ))}

                        {/* Indicators */}
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                            {images1.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent1(index)}
                                    className={`w-3 h-3 rounded-full ${index === current1 ? "bg-white" : "bg-gray-400"
                                        }`}
                                ></button>
                            ))}
                        </div>

                        {/* Prev / Next */}
                        <button
                            onClick={prevSlide1}
                            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                        >
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50">
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
                        <button
                            onClick={nextSlide1}
                            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                        >
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50">
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
                    </div>

                    {/* Info */}
                    <div className="p-5">
                        <h5 className="mb-2 text-[24px] md:text-[32px] font-bold nicolas text-coklat_tua">
                            Standard Double Bed
                        </h5>
                        <hr className="text-coklat_tua" />
                        <ul className="grid grid-cols-2 list-disc p-4 teramo text-[14px] md:text-[16px] text-coklat_tua font-semibold">
                            <li>Kasur Double Bed</li>
                            <li>Kamar Mandi</li>
                            <li>AC</li>
                            <li>Water Heater</li>
                            <li>Televisi</li>
                            <li>Gantungan Pakaian</li>
                            <li>Peralatan Mandi</li>
                        </ul>
                    </div>
                </motion.div>

                {/* CARD 2 - Single Bed */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "linear" }}
                    className="bg-white overflow-hidden p-5 shadow-lg border border-gray-200 rounded-md"
                >
                    {/* Slider */}
                    <div className="relative h-56 md:h-96 overflow-hidden">
                        {images2.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current2 ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Single Bed ${index + 1}`}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                        ))}

                        {/* Indicators */}
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                            {images2.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent2(index)}
                                    className={`w-3 h-3 rounded-full ${index === current2 ? "bg-white" : "bg-gray-400"
                                        }`}
                                ></button>
                            ))}
                        </div>

                        {/* Prev / Next */}
                        <button
                            onClick={prevSlide2}
                            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                        >
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50">
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
                        <button
                            onClick={nextSlide2}
                            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                        >
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50">
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
                    </div>

                    {/* Info */}
                    <div className="p-5">
                        <h5 className="mb-2 text-[24px] md:text-[32px] font-bold nicolas text-coklat_tua">
                            Standard Single Bed
                        </h5>
                        <hr className="text-coklat_tua" />
                        <ul className="list-disc p-4 teramo text-[14px] md:text-[16px] text-coklat_tua font-semibold">
                            <li>Kasur Single Bed</li>
                            <li>Kipas Angin</li>
                            <li>Gantungan Pakaian</li>
                        </ul>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default AccomodationFasilitasKamar;
