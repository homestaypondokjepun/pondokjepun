"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function CardImage({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="p-5"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Main Slider */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mb-4"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-video md:aspect-full md:h-full">
                <Image
                  src={src}
                  alt={`image-${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Tombol prev */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute ml-4 top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          {/* Tombol next */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute mr-4 top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
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
          className="md:mb-8"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-14 md:h-24 ">
                <Image
                  src={src}
                  alt={`thumb-${i}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
