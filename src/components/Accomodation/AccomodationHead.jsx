import Image from "next/image";

const AccomodationHead = () => {
  return (
    <section className="h-[40vh] md:h-[55vh] relative">
      <Image
        src="/fotoheaderjepun.jpg"
        fill
        priority
        alt="Living room"
        className="m-auto bg-cover bg-center object-cover  "
      />
      <div className="absolute inset-0 " />
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        // data-aos-duration="1500"
        className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-48 text-coklat_tua"
      >
        <h1 className="nicolas mb-4 md:text-[52px]  text-[32px] font-extrabold tracking-tight leading-none    drop-shadow-lg">
          Accomodation
        </h1>
        <p className="teramo mb-8 md:text-[18px] text-[14px]  sm:px-16 lg:px-48 drop-shadow-md ">
          Kami menyediakan berbagai tipe kamar dengan suasana yang homey dan
          tenang, cocok untuk istirahat, liburan, maupun perjalanan bisnis.
        </p>
      </div>
    </section>
  );
};
export default AccomodationHead;
