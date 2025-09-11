import Image from "next/image";
const FiturKami = () => {
    return (
        <section className="w-full max-w-[80%] mx-auto md:max-w-5xl  mb-10 mt-10">

            <section className=" text-center mb-10">
                <h1 className="teramo font-semibold text-coklat_tua text-[24px] md:text-[26px] mb-2 ">Mengapa Harus Memilih Kost Kami?</h1>
                <h2 className="teramo md:text-[16px] font-normal text-[14px]  text-coklat_tua">Temukan Alasan Kost Kami Jadi Pilihan Terbaik</h2>
            </section>
            <section className=" md:grid-cols-3 grid grid-cols-1 gap-4  ">
                <section className=" text-center p-2 ">
                    <Image
                        src={"/logo-harga-terjangkau.png"}
                        alt="logo-harga-terjangkau"
                        width={50}
                        height={50}
                        className="m-auto mb-3"
                    />
                    <h1 className="teramo md:text-[20px] font-semibold text-[18px]  text-coklat_tua">Harga Terjangkau</h1>
                    <p className="teramo md:text-base  text-sm  text-coklat_tua p-2">Nikmati kenyamanan kost dengan harga yang ramah di kantong tanpa mengurangi kualitas fasilitas</p>
                </section>
                <section className=" text-center p-2 ">
                    <Image
                        src={"/logo-lokasi-kost.png"}
                        alt="logo-lokasi-kost"
                        width={50}
                        height={50}
                        className="m-auto mb-3"
                    />
                    <h1 className="teramo md:text-[20px] font-semibold text-[18px]  text-coklat_tua">Lokasi Startegis</h1>
                    <p className="teramo md:text-base  text-sm  text-coklat_tua p-2">Lokasi di pusat kota, dekat dengan kampus, perkantoran, pusat kuliner, dan transportasi umum</p>
                </section>
                <section className=" text-center p-2 ">
                    <Image
                        src={"/logo-fasilitas.png"}
                        alt="logo-fasilitas"
                        width={50}
                        height={50}
                        className="m-auto mb-3"
                    />
                    <h1 className="teramo md:text-[20px] font-semibold text-[18px]  text-coklat_tua" >Fasilitas Lengkap</h1>
                    <p className="teramo md:text-[16px]  text-[14px]  text-coklat_tua">Mulai dari Wi-Fi cepat, kamar berperabot, dapur bersama, hingga area parkir</p>
                </section>
                <section className=" text-center p-2 ">
                    <Image
                        src={"/logo-lingkungan.png"}
                        alt="logo-lingkungan"
                        width={50}
                        height={50}
                        className="m-auto mb-3"
                    />
                    <h1 className="teramo md:text-[20px] font-semibold text-[18px]  text-coklat_tua" >Lingkungan Nyaman & Aman</h1>
                    <p className="teramo md:text-base  text-sm  text-coklat_tua p-2">Suasana tenang, cocok untuk belajar maupun bekerja, dilengkapi keamanan 24 jam</p>
                </section>
                <section className=" text-center p-2 ">
                    <Image
                        src={"/logo-bersih.png"}
                        alt="logo-bersih"
                        width={50}
                        height={50}
                        className="m-auto mb-3"
                    />
                    <h1 className="teramo md:text-[20px] font-semibold text-[18px]  text-coklat_tua">Kebersihan Terjaga</h1>
                    <p className="teramo md:text-base  text-sm  text-coklat_tua p-2">Area kost rutin dibersihkan sehingga selalu nyaman untuk ditempati</p>
                </section>
                <section className=" text-center p-2 ">
                    <Image
                        src={"/logo-akses.png"}
                        alt="logo-akses"
                        width={50}
                        height={50}
                        className="m-auto mb-3"
                    />
                    <h1 className="teramo md:text-[20px] font-semibold text-[18px]  text-coklat_tua">Akses Mudah</h1>
                    <p className="teramo md:text-base  text-sm  text-coklat_tua p-2">Jalan lebar, mudah dijangkau kendaraan, dekat minimarket dan ATM</p>
                </section>

            </section>
        </section>
    );
}

export default FiturKami;