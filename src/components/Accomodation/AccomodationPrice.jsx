"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function AccomodationPrice() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-8  ">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "linear" }}
        className=" text-center mb-2"
      >
        <h2 className="nicolas font-semibold text-coklat_tua text-[28px] md:text-[36px] pb-5">
          Harga Homestay Pondok Jepun
        </h2>

        <hr className="m-auto w-[90%] md:w[90%] rounded-2xl bg-coklat_tua text-coklat_tua" />
      </motion.section>

      {/* Cards list */}
      <section className="space-y-6 ">
        {/* Standard Room */}
        <article className=" p-4 flex flex-col md:flex-row items-center bg-white shadow-sm">
          <div className="md:w-2/3 p-4">
            <h3 className="text-lg  font-semibold tracking-wider">
              Harga Spesial All Access Homestay
            </h3>
            <section className="p-2 teramo md:text-[16px] font-normal text-[14px] text-coklat_tua">
              <ul className=" list-disc list-inside ">
                <li className="p-1">Akses penuh ke seluruh kamar tidur</li>
                <li className="p-1">Dapur & Ruang Makan</li>
                <li className="p-1">Dapur & Ruang Makan</li>
                <li className="p-1">Area Santai</li>
              </ul>
            </section>
            <div className="mt-6 bg-[#b58d66] inline-block rounded px-4 py-2 text-white font-bold">
              IDR 500.000 / Malam
            </div>
          </div>
          <div className="md:w-1/3 w-full relative p-4">
            <div className="absolute inset-0  border-2 border-transparent pointer-events-none" />
            <div className=" overflow-hidden shadow-md">
              <Image
                src="/Gallery/gallery (47).jpg"
                alt="Standard room"
                width={400}
                height={250}
                className="object-cover w-full h-48 md:h-full"
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
