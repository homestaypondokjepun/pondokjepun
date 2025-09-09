import Image from "next/image";

const Fasilitas = () => {
  return (
    <section className="px-5 pt-18 pb-40 bg-coklat_muda">
      <section className="flex flex-col items-center">
        <section
          className="flex flex-col items-center text-coklat_tua"
          data-aos="fade-up"
        >
          <h2 className="text-[28px] md:text-[42px] nicolas font-bold tracking-wider">
            Fasilitas Unggulan
          </h2>
          <p className="font-bold text-[14px] md:text-[16px] teramo  mt-1">
            Semua Yang Anda Butuhkan Ada di Rumah
          </p>
        </section>
        <section
          className="text-coklat_tua flex flex-wrap w-3/4 mt-5 justify-around items-center"
          data-aos="fade-up"
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
            <p className="font-bold text-[24px] md:text-[28px] nicolas">
              Ruang Tamu
            </p>
            <p className="text-sm teramo">
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
            <p className="font-bold text-[24px] md:text-[28px] nicolas">
              Meja Makan
            </p>
            <p className="text-sm teramo">
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
            <p className="font-bold text-[24px] md:text-[28px] nicolas">
              Ruang Karaoke
            </p>
            <p className="text-sm teramo">
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
            <p className="font-bold text-[24px] md:text-[28px] nicolas">
              Dapur Bersih
            </p>
            <p className="text-sm teramo">
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
            <p className="font-bold text-[24px] md:text-[28px] nicolas">
              Spot Foto
            </p>
            <p className="text-sm teramo">
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
            <p className="font-bold text-[24px] md:text-[28px] nicolas">Wifi</p>
            <p className="text-sm teramo">
              WiFi cepat dan stabil untuk mendukung aktivitas online tamu.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Fasilitas;
