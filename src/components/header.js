"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Header({
  bgUrl,
  title,
  deskripsi,
  subtitle,
  buttonText,
  images,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ubah threshold sesuai kebutuhan
    };

    // set initial state (jika user membuka halaman tidak dari top)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full bg-center"
    >
      {/* Background pakai Next/Image */}
      <Image
        src={bgUrl}
        alt="Background"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      <div
        className={`${
          scrolled ? "md:mt-[3.2rem]" : "mt-0"
        } max-w-[100%] md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center px-6 py-12 relative z-10 mt-[4.5rem] md:mt-0`}
      >
        {/* Kiri - Teks */}
        <div className="space-y-6 md:max-w-full max-w-[80%] mx-auto">
          <h3 className="text-lg font-medium teramo text-coklat_tua">
            {subtitle}
          </h3>
          <h1 className="text-4xl md:text-5xl text-coklat_tua font-extrabold teramo">
            {title}
          </h1>
          <p className="text-coklat_tua leading-relaxed font-medium">
            {deskripsi}
          </p>

          {/* Tombol hanya muncul kalau props ada */}
          {buttonText && (
            <button
              aria-label="Textbutton"
              className="inline-flex items-center bg-coklat_tua text-white font-medium px-5 py-3 rounded-full shadow-md hover:bg-coklat_muda hover:shadow-lg hover:scale-105 hover:duration-300 hover:ease-in hover:text-coklat_tua cursor cursor-pointer transition"
            >
              {buttonText} →
            </button>
          )}
        </div>

        {/* Kanan - Carousel */}
        <div className="relative md:h-[280px] lg:h-[320px]">
          {images && (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {images.map((src, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[250px] md:w-[350px] lg:w-[400px]"
                >
                  <div className="relative h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden shadow-lg">
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </motion.section>
  );
}
