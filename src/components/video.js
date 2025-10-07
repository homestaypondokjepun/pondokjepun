"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const VideoHero = () => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const videoId = "JfFG_ltRv-k";

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&loop=1&playlist=${videoId}`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "linear" }}
      className="p-5 flex justify-center"
    >
      <section className="w-full max-w-6xl rounded-md overflow-hidden shadow-2xl border border-gray-100">
        {/* Teks */}
        <div className="text-center p-6">
          <h2 className="teramo font-bold text-[24px] md:text-[32px] text-coklat_tua">
            Guest House Pondok Jepun 🌿
          </h2>
          <p className="mt-4 max-w-3xl font-semibold mx-auto text-sm md:text-base leading-relaxed text-coklat_tua">
            Ada yang baru di Banyuwangi! Guest House{" "}
            <span className="font-bold">Pondok Jepun</span> hadir di jantung
            kota dengan suasana tenang dan nyaman. Lokasi strategis, hanya 100
            meter dari Satpas Banyuwangi. Yuk, nikmati liburan seru bersama kami
            di Pondok Jepun! ✨
          </p>
        </div>

        {/* Video */}
        <div
          className="relative w-full aspect-video cursor-pointer"
          onClick={() => setIsPlayerVisible(true)}
        >
          {isPlayerVisible ? (
            <iframe
              src={embedUrl}
              title="Video Pondok Jepun"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              frameBorder="0"
            />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full">


              <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Thumbnail Video Pondok Jepun"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
                priority={false}
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.section>
  );
};

export default VideoHero;
