import Image from "next/image";

const ContactHead = () => {
  return (
    <section className="h-[40vh] md:h-[65vh] relative">
      <Image
        src="/Contact/NDA_7444.jpg"
        fill
        alt="Living room"
        className="m-auto bg-cover bg-center object-cover  "
      />
      <div className="absolute inset-0 bg-black/50" />
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        // data-aos-duration="1500"
        className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56"
      >
        <h1 className="nicolas mb-4 md:text-[52px]  text-[32px] font-extrabold tracking-tight leading-none text-white   drop-shadow-lg">
          Contact Page
        </h1>
        <p className="teramo mb-8 md:text-[18px] text-[14px] text-white sm:px-16 lg:px-48 drop-shadow-md ">
          Punya pertanyaan tentang kamar, fasilitas, atau ketersediaan? Jangan
          ragu untuk menghubungi kami. Tim kami siap membantu memberikan
          informasi terbaik agar pengalaman menginap Anda lebih nyaman.
        </p>
      </div>
    </section>
  );
};
export default ContactHead;
