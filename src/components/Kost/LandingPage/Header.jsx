"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Hero() {
    const images = [
        "/Gallery/gallery (1).jpg",
        "/Gallery/gallery (2).jpg",
        "/Gallery/gallery (3).jpg",
    ]; // letakkan di folder /public

    return (
        <section className="w-full bg-[url('/HeaderKost.jpg')] bg-cover bg-center  ">
            <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center px-6 py-12 ">

                {/* Kiri - Teks */}
                <div className="space-y-6">
                    <h3 className="text-lg font-medium teramo text-coklat_tua">Welcome to</h3>
                    <h1 className="text-4xl md:text-5xl text-coklat_tua font-extrabold teramo">
                        Kost Arka Dewata
                    </h1>
                    <p className="text-coklat_tua leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, mollitia quaerat? Cum sapiente, architecto similique cumque repellat voluptate alias eum debitis, nemo quod maxime ea libero rem facilis, nam dolorem.
                    </p>
                    <button className="inline-flex items-center bg-coklat_tua text-white font-medium px-5 py-3 rounded-full shadow-md hover:bg-coklat_muda hover:shadow-lg hover:scale-105 hover:duration-300 hover:ease-in hover:text-coklat_tua cursor cursor-pointer transition">
                        Rent Now →
                    </button>
                </div>

                {/* Kanan - Carousel */}
                <div className="relative">
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
                            delay: 3000, // jeda 3 detik
                            disableOnInteraction: false, // tetap jalan meski user interaksi
                        }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide
                                key={index}
                                className="w-[250px] md:w-[350px] lg:w-[400px]"
                            >
                                <div className="relative w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden shadow-lg">
                                    <Image
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
