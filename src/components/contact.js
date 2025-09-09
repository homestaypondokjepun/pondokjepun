import Image from "next/image";
const Contact = () => {
  return (
    <section className="r p-2 hidden items-center justify-center md:flex">
      <section className="w-[90%] r flex justify-between items-center w">
        <section className="gap-5 hidden lg:flex ">
          <section className="flex items-center gap-2">
            <section className="border border-coklat w-10 h-10 rounded-full flex justify-center items-center hover:animate-contact duration-75">
              <i className="fa-solid fa-location-dot text-xl text-coklat"></i>
            </section>
            <section className="text-coklat text-sm flex flex-col gap-1 font-bold">
              <p>Q85W+R2J, Sumberrejo, Kec. Banyuwangi,</p>
              <p> Kabupaten Banyuwangi, Jawa Timur</p>

            </section>
          </section>
          <section className="flex items-center gap-2">
            <section className="border border-coklat w-10 h-10 rounded-full flex justify-center items-center hover:animate-contact duration-75">
              <i className="fa-solid fa-envelope text-xl text-coklat"></i>
            </section>
            <section className="text-coklat text-sm flex flex-col gap-1 font-bold">
              <p>Email Kami</p>
              <p>pondokjepun25@gmail.com</p>
            </section>
          </section>
        </section>

        <section>
          <Image
            src="/logo.png"
            alt="logo"
            width={20}
            height={20}
            className="w-20"
          />
        </section>

        <section className="items-center gap-10 hidden sm:flex">
          <p className="text-2xl text-coklat font-bold">+(84) 4130 0555</p>
          <button className="py-2 px-5 font-bold bg-coklat rounded text-coklat_muda cursor-pointer hover:bg-coklat_tua">
            Hubungi Kami
          </button>
        </section>
      </section>
    </section>
  );
};

export default Contact;
