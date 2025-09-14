// "use client";

// import Image from "next/image";

// import { motion } from "motion/react";

// const Header = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="h-[40vh] md:h-[55vh] relative"
//     >
//       <Image
//         src="/fotoheaderjepun.jpg"
//         fill
//         alt="Living room"
//         className="m-auto bg-cover bg-center object-cover  "
//         priority
//         fetchPriority="high"
//       />
//       <div className="absolute inset-0" />

//       <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-46">
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 2 }}
//           className="nicolas mb-4 md:text-[52px]  text-[32px] font-extrabold tracking-tight leading-none text-coklat_tua drop-shadow-lg"
//         >
//           Pondok Jepun
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 2 }}
//           className="teramo mb-8 md:text-[18px] text-[14px] sm:px-16 lg:px-48 drop-shadow-md text-coklat_tua"
//         >
//           Tempat nyaman dan tenang, cocok untuk liburan atau perjalanan bisnis.
//           Lokasi strategis, fasilitas lengkap, dan suasana seperti di rumah
//           sendiri.
//         </motion.p>
//       </div>
//     </motion.section>
//   );
// };

// export default Header;

"use client";

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

      <div className="max-w-[100%] md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center px-6 py-12 relative z-10">
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
