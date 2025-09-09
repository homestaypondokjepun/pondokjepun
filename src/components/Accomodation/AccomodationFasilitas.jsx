"use client";
import { motion } from "motion/react";

const AccomodationFasilitas = () => {

    return (
        <section className="w-full max-w-5xl mx-auto   ">
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className=" text-center p-5"
            >
                <h2 className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px] pb-4">
                    Fasilitas Lainnya
                </h2>

                <hr className="m-auto w-[95%] rounded-2xl bg-coklat_tua text-coklat_tua" />
            </motion.section>


            <section className=" flex justify-center md:ml-20 md:mr-20 ">
                <ul className="w-full  list-disc  ">
                    <section className="grid grid-cols-2 gap-3 md:grid-cols-3  w-full pl-15 pr-10 m-auto teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua ">
                        <li className="md:p-1 p-0">
                            Free Air Mineral
                        </li>
                        <li className="md:p-1 p-0">
                            Free Mie Instan 2
                        </li>
                        <li className="md:p-1 p-0">
                            Free Kopi, Teh Sachet
                        </li>
                        <li className="md:p-1 p-0">
                            Free Sandal
                        </li>
                        <li className="md:p-1 p-0">
                            Free Wifi
                        </li>
                        <li className="md:p-1 p-0">
                            Kolam Ikan
                        </li>
                        <li className="md:p-1 p-0">
                            Ruang Karaoke
                        </li>

                        <li className="md:p-1 p-0">
                            Kamar Mandi Luar
                        </li>
                        <li className="md:p-1 p-0">
                            Kursi Tamu
                        </li>
                        <li className="md:p-1 p-0">
                            Dapur
                        </li>
                        <li className="md:p-1 p-0">
                            Kulkas
                        </li>
                        <li className="md:p-1 p-0">
                            Ruang Tamu
                        </li>
                        <li className="md:p-1 p-0">
                            Meja Makan
                        </li>
                        <li className="md:p-1 p-0">
                            Alat Makan
                        </li>
                        <li className="md:p-1 p-0">
                            Kompor
                        </li>
                        <li className="md:p-1 p-0">
                            Bersih
                        </li>
                        <li className="md:p-1 p-0">
                            Aman
                        </li>


                    </section>
                </ul>

            </section>

        </section>
    );
}

export default AccomodationFasilitas;

