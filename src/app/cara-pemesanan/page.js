import Link from "next/link";

export const metadata = {
  title: "Cara Pemesanan",
  description:
    "Panduan lengkap cara pemesanan Pondok Jepun Homestay Banyuwangi. Mudah, cepat, dan praktis untuk memesan kamar penginapan Anda.",
  keywords: [
    "cara pesan homestay Banyuwangi",
    "reservasi Pondok Jepun Homestay",
    "booking homestay Banyuwangi",
    "pesan kamar Banyuwangi",
    "akomodasi murah Banyuwangi",
  ],
  openGraph: {
    title: "Cara Pemesanan",
    description:
      "Ikuti langkah mudah untuk memesan kamar di Pondok Jepun Homestay Banyuwangi. Nikmati kenyamanan liburan Anda dengan reservasi praktis.",
    url: "https://pondokjepun.vercel.app/reservation",
    siteName: "Pondok Jepun Homestay",
    images: [
      {
        url: "https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg",
        width: 1200,
        height: 630,
        alt: "Cara Pemesanan Pondok Jepun Homestay Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Pemesanan",
    description:
      "Pesan kamar di Pondok Jepun Homestay dengan mudah. Proses reservasi cepat, harga terjangkau, dan lokasi strategis di Banyuwangi.",
    images: ["https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg"],
  },
};

export default function CaraPemesanan() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-4">
      <section className="bg-white rounded-2xl shadow p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h1 className="mb-2 nicolas font-semibold md:text-[32px] text-[32px] text-coklat_tua">
              Cara Pemesanan Pondok Jepun Homestay
            </h1>
            <p className="text-sm text-coklat_tua mb-6 leading-relaxed">
              Pondok Jepun Homestay menyediakan beberapa cara mudah untuk
              melakukan reservasi. Anda bisa memilih metode pemesanan yang
              sesuai, dengan proses yang cepat, fleksibel, dan dibantu langsung
              oleh tim kami.
            </p>

            <ol className="space-y-6 text-coklat_tua list-inside">
              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  1. Hubungi Nomor WhatsApp
                </h3>
                <p className="mt-2 text-sm text-coklat_tua leading-relaxed">
                  Cara paling mudah adalah menghubungi langsung via WhatsApp di{" "}
                  <span className="font-semibold">+62 821-3248-7131</span>. Anda
                  bisa menanyakan ketersediaan kamar sekaligus melakukan
                  reservasi dengan cepat dan mudah.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  2. Pesan Melalui Halaman Kontak
                </h3>
                <p className="mt-2 text-sm text-coklat_tua leading-relaxed">
                  Jika Anda lebih nyaman mengisi formulir, silakan gunakan
                  halaman{" "}
                  <Link
                    href="/contact"
                    className="text-coklat font-semibold hover:underline"
                  >
                    Kontak
                  </Link>
                  . Cukup masukkan nama, email, nomor telepon, serta detail
                  reservasi yang diinginkan. Setelah formulir terkirim, tim kami
                  akan segera menghubungi Anda untuk konfirmasi lebih lanjut.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  3. Reservasi via Email
                </h3>
                <p className="mt-2 text-sm text-coklat_tua leading-relaxed">
                  Bagi tamu yang lebih suka menggunakan email, Anda bisa
                  mengirimkan detail pemesanan ke{" "}
                  <span className="font-semibold">pondokjepun25@gmail.com</span>
                  . Sertakan informasi nama lengkap, tanggal menginap, jumlah
                  tamu, dan preferensi kamar. Kami akan membalas email Anda
                  secepat mungkin dengan konfirmasi ketersediaan kamar.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  4. Ikuti Instagram
                </h3>
                <p className="mt-2 text-sm text-coklat_tua leading-relaxed">
                  Selain untuk pemesanan, Anda juga dapat mengikuti akun
                  Instagram kami{" "}
                  <a
                    href="https://www.instagram.com/pondok_jepun25"
                    target="_blank"
                    className="text-coklat font-semibold hover:underline"
                  >
                    @pondokjepun
                  </a>{" "}
                  untuk mendapatkan update terbaru mengenai promo, suasana
                  homestay, serta kegiatan menarik di sekitar Banyuwangi. Anda
                  bisa langsung menghubungi kami melalui DM untuk menanyakan
                  ketersediaan kamar atau melakukan reservasi.
                </p>
              </li>
            </ol>

            <section className="mt-6">
              <Link
                href={"/"}
                className="py-2 px-5 text-base bg-coklat rounded-md font-bold text-coklat_muda cursor-pointer hover:bg-coklat_tua"
              >
                Kembali
              </Link>
            </section>
          </div>

          <aside className="w-72">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold mb-2 teramo text-coklat_tua">
                Info Cepat
              </h4>
              <ul className="text-sm text-coklat_tua space-y-2">
                <li>📍 Lokasi: Sumberrejo, Kec. Banyuwangi</li>
                <li>📞 WA: +62 821-3248-7131</li>
                <li>⏰ Check-in: 14:00 | Check-out: 12:00</li>
                <li>💵 Harga mulai: Rp500.000/malam</li>
              </ul>
            </div>

            <div className="mt-4 bg-white border border-gray-100 rounded-lg p-3">
              <h4 className="font-semibold teramo text-coklat_tua mb-2">
                Catatan
              </h4>
              <p className="text-sm text-coklat_tua leading-relaxed">
                Untuk memastikan kenyamanan Anda, kami menyarankan agar
                melakukan pemesanan beberapa hari sebelum tanggal kedatangan.
                Hal ini membantu kami menyiapkan kamar terbaik sesuai kebutuhan
                Anda.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </section>
  );
}
