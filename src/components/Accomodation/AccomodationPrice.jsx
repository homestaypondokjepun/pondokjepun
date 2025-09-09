"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function AccomodationPrice() {
    return (

        <div className="w-full max-w-5xl mx-auto mb-5  shadow-lg border border-gray-200 p-5 ">
            {/* Header */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className=" text-center "
            >
                <h2 className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px] pb-5">
                    Homestay Pondok Jepun
                </h2>
            </motion.section>

            {/* Cards list */}
            <section className="space-y-6 ">
                {/* Standard Room */}
                <article className=" flex flex-col md:flex-row items-center ">
                    <div className="md:w-2/3 p-4">
                        <h3 className="text-lg  font-semibold teramo text-coklat_tua tracking-wider">Harga Spesial All Access Homestay</h3>
                        <section className="p-2 teramo md:text-[16px] font-semibold text-[14px] text-coklat_tua">
                            <ul className=" list-disc list-inside ">

                                <li className="p-1">
                                    Akses penuh ke seluruh kamar tidur
                                </li>
                                <li className="p-1">
                                    Dapur & Ruang Makan
                                </li>
                                <li className="p-1">
                                    Dapur & Ruang Makan
                                </li>
                                <li className="p-1">
                                    Area Santai
                                </li>

                            </ul>

                        </section>
                        <div className=" ml-7 border border-coklat_tua inline-block rounded px-4 py-2 text-coklat_tua font-bold">
                            <Link href="/">
                                IDR 500.000 / Malam</Link>
                        </div>
                        <section className=" mt-5 ">

                            <section className="w-full bg-coklat_tua inline-block rounded px-4 py-2 text-white font-bold text-center">
                                <Link href="/">
                                    Chat Sekarang</Link>
                            </section>
                        </section>
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
