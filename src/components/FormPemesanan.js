import DatePicker from "react-datepicker";
import { useState } from "react";
import * as gtag from "../lib/gtag";

const FormPemesanan = ({ setShowPopup }) => {
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
    const url = `https://wa.me/6282132487131?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // 🔹 Tracking event ke Google Analytics
    if (typeof window.gtag === "function") {
      gtag.event({
        action: "click_whatsapp",
        category: "Interaksi-Pengguna",
        label: "WhatsApp Booking",
        value: 1,
      });
      console.log("✅ Event WhatsApp dikirim ke GA");
    } else {
      console.warn("⚠️ gtag belum siap, event WhatsApp tidak terkirim");
    }

    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-2">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Tombol Close */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 font-extrabold cursor-pointer p-2 md:text-[24px] text-[24px] mr-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Judul */}
        <h2 className="text-lg md:text-xl teramo font-semibold text-coklat_tua mb-4 text-center">
          Form Pemesanan
        </h2>

        {/* Form */}
        <form onSubmit={sendWhatsapp} className="space-y-4 p-1 rounded-md">
          {/* Date Picker */}
          <label
            htmlFor="email"
            className="block teramo mb-2 text-sm font-medium text-left ml-3 text-coklat_tua "
          >
            Pilih Tanggal Booking
          </label>

          <DatePicker
            selected={tanggal}
            onChange={(date) => setTanggal(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal"
            className="w-[320px] md:w-[380px] h-12 border border-gray-200  px-3 rounded-md teramo text-sm"
            required
          />

          {/* Nama */}
          <label
            htmlFor="email"
            className="block teramo text-coklat_tua mb-2 text-sm font-medium text-left ml-3 "
          >
            Nama Lengkap
          </label>

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-[320px] md:w-[380px] h-12 border border-gray-200 px-3 rounded-md teramo text-sm"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          {/* Jumlah Dewasa */}
          <label
            htmlFor="email"
            className="block teramo mb-2 text-sm font-medium text-left ml-3 text-coklat_tua "
          >
            Jumlah Orang Dewasa
          </label>

          <input
            type="number"
            placeholder="Jumlah Dewasa"
            min="1"
            className="w-[320px] md:w-[380px] h-12 border border-gray-200 px-3 rounded-md teramo text-sm"
            value={dewasa}
            onChange={(e) => setDewasa(e.target.value)}
            required
          />

          {/* Jumlah Anak */}
          <label
            htmlFor="email"
            className="block teramo mb-2 text-sm font-medium text-left ml-3 text-coklat_tua "
          >
            Jumlah Anak - anak
          </label>

          <input
            type="number"
            placeholder="Jumlah Anak-anak"
            min="0"
            className="w-[320px] md:w-[380px] h-12 border border-gray-200 px-3 rounded-md teramo text-sm"
            value={anak}
            onChange={(e) => setAnak(e.target.value)}
            required
          />
          <label className="block text-xs text-gray-500 mt-2">
            NB: Mohon isi 0 jika tidak ada anak
          </label>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full h-12 bg-coklat_tua text-white rounded-md hover:bg-coklat_muda hover:text-coklat_tua hover:border hover:border-coklat_tua transition text-base font-medium"
          >
            Kirim ke Whatsapp
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPemesanan;
