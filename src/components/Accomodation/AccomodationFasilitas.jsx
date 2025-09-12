"use client";
import { motion } from "motion/react";

const AccomodationFasilitas = ({ bgUrl }) => {

    return (
        <section className="w-full bg-cover bg-center p-6"
            style={{ backgroundImage: `url(${bgUrl})` }}>
            <section className="w-full max-w-5xl mx-auto ">
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "linear" }}
                    className=" text-center "
                >
                    <h2 className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px] mb-2">
                        Fasilitas Lainnya
                    </h2>

                    <hr className="m-auto w-[95%] mb-4 rounded-2xl bg-coklat_tua text-coklat_tua" />
                </motion.section>


                <section className=" flex justify-center md:ml-20 md:mr-20 ">
                    <ul className="w-full  list-disc p-2  ">
                        <section className="grid grid-cols-2 gap-3  md:grid-cols-3  w-full pl-5 pr-[-5] m-auto teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua ">
                            <li className=" p-1 ">
                                Free Air Mineral
                            </li>
                            <li className=" p-1 ">
                                Free Mie Instan 2
                            </li>
                            <li className=" p-1 ">
                                Free Kopi, Teh Sachet
                            </li>
                            <li className=" p-1 ">
                                Free Sandal
                            </li>
                            <li className=" p-1 ">
                                Free Wifi
                            </li>
                            <li className=" p-1 ">
                                Kolam Ikan
                            </li>
                            <li className=" p-1 ">
                                Ruang Karaoke
                            </li>

                            <li className=" p-1 ">
                                Kamar Mandi Luar
                            </li>
                            <li className=" p-1 ">
                                Kursi Tamu
                            </li>
                            <li className=" p-1 ">
                                Dapur
                            </li>
                            <li className=" p-1 ">
                                Kulkas
                            </li>
                            <li className=" p-1 ">
                                Ruang Tamu
                            </li>
                            <li className=" p-1 ">
                                Meja Makan
                            </li>
                            <li className=" p-1 ">
                                Alat Makan
                            </li>
                            <li className=" p-1 ">
                                Kompor
                            </li>
                            <li className=" p-1 ">
                                Bersih
                            </li>
                            <li className=" p-1 ">
                                Aman
                            </li>


                        </section>
                    </ul>

                </section>

            </section>
        </section>
    );
}

export default AccomodationFasilitas;

