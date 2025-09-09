"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
    "/Gallery/1.jpg",
    "/Gallery/2.jpeg",
    "/Gallery/3.jpeg",
    "/Gallery/4.jpeg",
    "/Gallery/5.jpg",
    "/Gallery/6.jpg",
    "/Gallery/7.jpg",
    "/Gallery/8.jpeg",
];

export default function AccomodationPreview() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);

    return (
        <div className="p-5">
            <div className="w-full max-w-5xl mx-auto">
                {/* Main Slider */}
                <Swiper
                    modules={[Navigation, Thumbs, Autoplay]}

                    thumbs={{ swiper: thumbsSwiper }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    className="mb-4"
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i} >
                            <div className="relative w-full h-[300px] md:h-[500px] ">
                                <Image
                                    src={src}
                                    alt={`image-${i}`}
                                    fill
                                    className="object-cover "
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Tombol prev */}
                    <button type="button"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute ml-4  top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  ">
                            <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>

                    {/* Tombol next */}
                    <button type="button"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute mr-4  top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 ">
                            <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>

                </Swiper>

                {/* Thumbnails */}
                <Swiper
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    slidesPerView={6}
                    spaceBetween={10}
                    watchSlidesProgress
                    className="cursor-pointer "
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative w-full h-14 md:h-24 ">
                                <Image
                                    src={src}
                                    alt={`thumb-${i}`}
                                    fill
                                    className="object-cover "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>

    );
}
