import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

const images = [
    "/RuangKaraoke/NDA_7470.jpg",
    "/RuangKaraoke/NDA_7465.jpg",
    "/RuangKaraoke/NDA_7468.jpg",
    "/RuangKaraoke/NDA_7463.jpg",
];

const RuangKaraoke = () => {
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
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeIn" }}
            className="p-1 md:p-4 flex items-center overflow-hidden">
            {/* Tampilan Desktop */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {/* Left Section (Text) */}
                <section
                    className="p-6 flex-col content-center hidden md:block pl-30 pr-10   "

                >
                    <h5
                        className={`nicolas text-coklat_tua font-bold text-lg md:text-xl mb-4`}
                    >
                        Layanan & Fasilitas
                    </h5>

                    <section className="p-4 rounded-lg text-coklat_tua pr-20">
                        <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                            Guest Home Jepun
                        </h1>
                        <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                            Ruang Karaoke
                        </h1>

                        <p className="mt-4 text-sm md:text-base leading-relaxed">
                            Area bersantai yang nyaman dan bersih, cocok untuk berkumpul,
                            berbincang, atau sekadar menikmati suasana homestay yang hangat.
                            Dirancang dengan sentuhan homey agar Anda merasa seperti di rumah
                            sendiri.
                        </p>

                        <Link
                            href={"/contact"}
                            type="button"
                            className="mt-6 text-white bg-coklat hover:bg-coklat_tua 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm md:text-base px-5 py-2.5 inline-flex items-center cursor-pointer"
                        >
                            Pilih Rencana
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </section>
                </section>

                {/* Right Section (Carousel) */}
                <section
                    className="relative  overflow-hidden content-center hidden md:block "

                >
                    {/* Wrapper */}
                    <div className="relative aspect-video md:aspect-full md:h-full">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
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
                    </div>

                    {/* Indicators */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-3 md:bottom-5 left-1/2 space-x-2 md:space-x-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 md:px-4"
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
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 md:px-4"
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
                </section>
            </section>
            {/* Tampilan Mobile */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden ">
                {/* Right Section (Carousel) */}
                <section
                    className="relative rounded-md overflow-hidden"

                >
                    {/* Wrapper */}
                    <div className="relative aspect-video md:aspect-full md:h-full">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
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
                    </div>

                    {/* Indicators */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-3 md:bottom-5 left-1/2 space-x-2 md:space-x-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 md:px-4"
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
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 md:px-4"
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
                </section>
                {/* Left Section (Text) */}
                <section
                    className="p-6 flex flex-col justify-center "

                >
                    <h5
                        className={`nicolas text-coklat_tua font-bold text-lg md:text-xl mb-4`}
                    >
                        Layanan & Fasilitas
                    </h5>

                    <section className="p-4 rounded-lg text-coklat_tua">
                        <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                            Guest Home Jepun
                        </h1>
                        <h1 className={`teramo font-bold text-2xl md:text-3xl`}>
                            Ruang Karaoke
                        </h1>

                        <p className="mt-4 text-sm md:text-base leading-relaxed">
                            Area bersantai yang nyaman dan bersih, cocok untuk berkumpul,
                            berbincang, atau sekadar menikmati suasana homestay yang hangat.
                            Dirancang dengan sentuhan homey agar Anda merasa seperti di rumah
                            sendiri.
                        </p>

                        <Link
                            href={"/contact"}
                            type="button"
                            className="mt-6 text-white bg-coklat hover:bg-coklat_tua 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm md:text-base px-5 py-2.5 inline-flex items-center cursor-pointer"
                        >
                            Pilih Rencana
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </section>
                </section>


            </section>
        </motion.section>

    );
};

export default RuangKaraoke;
