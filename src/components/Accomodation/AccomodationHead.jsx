import Image from "next/image";

const AccomodationHead = () => {
  return (
    <section className="h-[40vh] md:h-[55vh] relative">
      <Image
        src="/fotoheader.jpg"
        fill
        alt="Living room"
        className="m-auto bg-cover bg-center object-cover  "
      />
      <div className="absolute inset-0 bg-black/50" />
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        // data-aos-duration="1500"
        className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-48"
      >
        <h1 className="nicolas mb-4 md:text-[52px]  text-[32px] font-extrabold tracking-tight leading-none text-white   drop-shadow-lg">
          Accomodation
        </h1>
        <p className="teramo mb-8 md:text-[18px] text-[14px] text-white sm:px-16 lg:px-48 drop-shadow-md ">
          Kami menyediakan berbagai tipe kamar dengan suasana yang homey dan
          tenang, cocok untuk istirahat, liburan, maupun perjalanan bisnis.
        </p>
      </div>
    </section>
  );
};
export default AccomodationHead;
