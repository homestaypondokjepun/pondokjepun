"use client";

import Image from "next/image";
import { motion } from "motion/react";

const Fasilitas = () => {
  return (
    <section className="px-5 pt-18 pb-40 bg-coklat_muda">
      <section className="flex flex-col items-center">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="flex flex-col items-center text-coklat_tua"
        >
          <h2 className="teramo font-bold text-[24px] md:text-[32px] tracking-wider">
            Fasilitas Unggulan
          </h2>
          <p className="teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua  mt-1">
            Semua Yang Anda Butuhkan Ada di Rumah
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="text-coklat_tua flex flex-wrap w-3/4 mt-5 justify-around items-center"
        >
          <section className="w-72 mt-10 md:mt-20 text-center hover:scale-110 duration-150">
            <section className="mb-1">
              <Image
                src="/living-room.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px]">
              Ruang Tamu
            </p>
            <p className="teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
              Ruang tamu nyaman dengan sofa empuk dan nuansa hangat untuk
              bersantai.
            </p>
          </section>
          <section className="w-72 mt-10 md:mt-20 text-center hover:scale-110 duration-150">
            <section className="mb-1">
              <Image
                src="/dining-table.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px]">
              Meja Makan
            </p>
            <p className="teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
              Meja makan bersih dan luas, cocok untuk makan bersama keluarga.
            </p>
          </section>
          <section className="w-72 mt-10 md:mt-20 text-center hover:scale-110 duration-150">
            <section className="mb-1">
              <Image
                src="/room.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px]">
              Ruang Karaoke
            </p>
            <p className="teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
              Ruang karaoke lengkap dan nyaman untuk seru-seruan bersama
              keluarga atau teman.
            </p>
          </section>
          <section className="w-72 mt-10 md:mt-20 text-center hover:scale-110 duration-150">
            <section className="mb-1">
              <Image
                src="/kitchen.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px]">
              Dapur Bersih
            </p>
            <p className="teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
              Dapur bersih dan rapi, siap digunakan untuk memasak kebutuhan
              tamu.
            </p>
          </section>
          <section className="w-72 mt-10 md:mt-20 text-center hover:scale-110 duration-150">
            <section className="mb-1">
              <Image
                src="/app.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px]">
              Spot Foto
            </p>
            <p className="teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
              Tersedia spot foto estetik untuk abadikan momen liburanmu.
            </p>
          </section>
          <section className="w-72 mt-10 md:mt-20 text-center hover:scale-110 duration-150">
            <section className="mb-1">
              <Image
                src="/wifi.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px]">Wifi</p>
            <p className="teramo md:text-[16px] font-semibold text-[14px]  text-coklat_tua">
              WiFi cepat dan stabil untuk mendukung aktivitas online tamu.
            </p>
          </section>
        </motion.section>
      </section>
    </section>
  );
};

export default Fasilitas;
