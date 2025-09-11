"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ButtonChat = () => {
    const [showPopup, setShowPopup] = useState(false);

    // State form
    const [tanggal, setTanggal] = useState(null);
    const [nama, setNama] = useState("");
    const [dewasa, setDewasa] = useState("");
    const [anak, setAnak] = useState("");


    // Format tanggal biar lebih mudah dibaca
    const formattedDate = tanggal
        ? tanggal.toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "";


    const sendWhatsapp = (e) => {
        e.preventDefault();

        const whatsappMessage = ` Halo, saya ${nama},  mau menanyakan ketersediaan homestay untuk :\n Dewasa: ${dewasa}\n Anak-anak: ${anak}\n Pada Tanggal : ${formattedDate}\n Apakah bisa diinformasikan detail fasilitas dan harganya?`;
        const url = `https://wa.me/6285732225227?text=${encodeURIComponent(
            whatsappMessage
        )}`;
        window.open(url, "_blank");
    };

    return (
        <section className="p-2 text-center fixed z-50 bottom-0 w-full bg-white shadow-lg h-15 content-center">
            <section className="flex justify-center items-center">
                <button
                    onClick={() => setShowPopup(true)}
                    className="w-full flex justify-center items-center h-10 text-white bg-coklat_tua  font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    <svg
                        className="w-3.5 h-3.5 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 21"
                    >
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Order Via WhatsApp
                </button>
            </section>

            {/* Popup Form */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-2">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative overflow-y-auto max-h-[90vh]">
                        {/* Tombol Close */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-2 right-2 font-extrabold cursor-pointer p-2 md:text-[24px] text-[24px]  mr-2 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        {/* Judul */}
                        <h2 className="text-lg md:text-xl font-semibold text-coklat_tua mb-4 text-center">
                            Form Pemesanan
                        </h2>

                        {/* Form */}
                        <form onSubmit={sendWhatsapp} className="space-y-4  p-1 rounded-md">
                            {/* Date Picker */}
                            <DatePicker
                                selected={tanggal}
                                onChange={(date) => setTanggal(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Pilih tanggal"
                                className="w-full border p-2 rounded-md "
                                required
                            />

                            {/* Nama */}
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                className="w-full border p-2 rounded-md "
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                required
                            />

                            {/* Jumlah Dewasa */}
                            <input
                                type="number"
                                placeholder="Jumlah Dewasa"
                                min="1"
                                className="w-full border p-2 rounded-md "
                                value={dewasa}
                                onChange={(e) => setDewasa(e.target.value)}
                                required
                            />

                            {/* Jumlah Anak */}
                            <input
                                type="number"
                                placeholder="Jumlah Anak-anak"
                                min="0"
                                className="w-full border p-2 rounded-md "
                                value={anak}
                                onChange={(e) => setAnak(e.target.value)}
                                required
                            />

                            {/* Tombol Submit */}
                            <button
                                type="submit"
                                className="w-full bg-coklat_tua text-white py-2 cursor-pointer rounded-md hover:bg-coklat_muda hover:text-coklat_tua hover:border hover:border-coklat_tua transition"
                            >
                                Kirim ke Whatsapp
                            </button>
                        </form>


                    </div>
                </div>
            )}
        </section>
    );
};

export default ButtonChat;
