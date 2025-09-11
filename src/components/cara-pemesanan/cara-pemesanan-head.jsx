import Image from "next/image";

const CaraPesanHead = () => {
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
                    Cara Pemesanan
                </h1>
                <p className="teramo mb-8 md:text-[18px] text-[14px] text-white sm:px-16 lg:px-48 drop-shadow-md ">
                    Temukan langkah mudah untuk memesan penginapan terbaik Anda bersama kami. Nikmati proses pemesanan yang praktis, cepat, dan aman, sehingga liburan atau perjalanan Anda menjadi lebih nyaman dan menyenangkan sejak awal.
                </p>
            </div>
        </section>
    );
};
export default CaraPesanHead;
