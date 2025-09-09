"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Welcome = () => {
  return (
    <section className="mb-2 md:mb-2 lg:mb-32">
      <section className="flex justify-center flex-wrap md:flex-nowrap w-full md:w-4/5 m-auto px-5 md:px-0 ">
        <section className="w-full flex justify-end py-10 md:py-0">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="relative hidden md:block w-full h-[40rem] -top-10 "
          >
            <Image
              src="/LandingPage/NDA_7417.jpg"
              alt="Living room"
              fill
              className="object-cover object-center rounded-md"
            />

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "linear" }}
              className="absolute -bottom-[9.5rem] right-0"
            >
              <Image
                src="/LandingPage/NDA_7482.jpg"
                width={300}
                height={500}
                alt="Living room"
                className="h-[18rem] object-cover rounded-l-md rounded-br-md"
              />
            </motion.section>
          </motion.section>

          <section className="flex flex-wrap gap-5 md:hidden overflow-hidden">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "linear" }}
            >
              <Image
                src="/LandingPage/NDA_7417.jpg"
                width={800} // ubah sesuai kebutuhan
                height={800} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto rounded-md"
              />
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "linear" }}
            >
              <Image
                src="/LandingPage/NDA_7482.jpg"
                width={800} // ubah sesuai kebutuhan
                height={800} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto rounded-md"
              />
            </motion.section>
          </section>
        </section>

        <section className=" w-full bg-coklat_muda px-14 pr-5 py-10 h-fit rounded-md md:rounded-r- overflow-hidden">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
          >
            <h2 className="nicolas font-semibold md:text-[32px]  text-[32px] text-coklat_tua">
              Selamat Datang
            </h2>
            <p className="teramo font-medium tracking-wider md:text-[18px] text-[14px] mt-4 text-coklat_tua ">
              Tentang Kami
            </p>
          </motion.section>
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="mt-5"
          >
            <p className="teramo font-medium md:text-[16px] text-[14px] leading-7 text-coklat_tua">
              Pondok Jepun, Nyaman Seperti di Rumah Sendiri Strategis, Tenang,
              dan Dekat ke Semua Destinasi
            </p>

            <p className="teramo md:text-[16px] text-[14px] leading-7 mt-5 text-coklat_tua">
              Nikmati pengalaman menginap yang nyaman dan tenang di Guest House
              Pondok Jepun, sebuah penginapan bergaya homy yang terletak
              strategis di jantung kota Banyuwangi. Dikelilingi oleh pesona alam
              dan kemudahan akses ke berbagai destinasi wisata populer, Pondok
              Jepun menjadi pilihan ideal untuk liburan santai maupun perjalanan
              bisnis Anda.
            </p>

            <section className=" mt-10 flex flex-col gap-5 justify-center items-start">
              <section className="flex items-center gap-3 w-fit">
                <section className="w-7 bg-coklat_tua h-7 text-white rounded-full flex justify-center items-center">
                  <section className="w-12 h-12 flex items-center justify-center">
                    <i className="fa-solid fa-check text-sm"></i>
                  </section>
                </section>
                <p className="teramo md:text-[16px] text-[14px] font-medium text-coklat_tua">
                  Menyuguhkan kamar yang nyaman, bersih, dan menenangkan.
                </p>
              </section>
              <section className="flex items-center gap-3 w-fit ">
                <section className="w-7 bg-coklat_tua h-7 text-white rounded-full flex justify-center items-center">
                  <section className="w-12 h-12 flex items-center justify-center ">
                    <i className="fa-solid fa-check text-sm"></i>
                  </section>
                </section>
                <p className="teramo md:text-[16px] text-[14px] font-medium text-coklat_tua">
                  Kamar utama nyaman dengan AC, TV, dan water heater.
                </p>
              </section>
            </section>

            <Link
              href="/service-fasilitas"
              className="mt-16 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-coklat_muda rounded-md bg-coklat hover:bg-coklat_tua "
            >
              Jelajahi Sekarang
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
          </motion.section>
        </section>
      </section>
    </section>
  );
};

export default Welcome;
