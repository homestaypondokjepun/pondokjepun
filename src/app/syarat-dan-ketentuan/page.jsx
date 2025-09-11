import BtnKembali from "@/components/syarat-ketentuan/BtnKembali";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Baca syarat dan ketentuan menginap di Pondok Jepun Homestay Banyuwangi. Informasi reservasi, pembayaran, pembatalan, check-in, check-out, dan penggunaan fasilitas.",
  keywords: [
    "syarat dan ketentuan homestay",
    "aturan menginap Banyuwangi",
    "kebijakan homestay",
    "Pondok Jepun Homestay",
    "peraturan penginapan Banyuwangi",
  ],
  openGraph: {
    title: "Syarat & Ketentuan",
    description:
      "Pelajari syarat dan ketentuan menginap di Pondok Jepun Homestay. Aturan reservasi, pembayaran, check-in/check-out, pembatalan, dan penggunaan fasilitas.",
    url: "https://pondokjepun.vercel.app/terms",
    siteName: "Pondok Jepun Homestay Banyuwangi",
    images: [
      {
        url: "https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg",
        width: 1200,
        height: 630,
        alt: "Pondok Jepun Homestay Banyuwangi",
      },
    ],
    locale: "id_ID",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syarat & Ketentuan",
    description:
      "Ketahui syarat & ketentuan menginap di Pondok Jepun Homestay Banyuwangi. Informasi lengkap tentang reservasi, pembayaran, pembatalan, dan aturan fasilitas.",
    images: ["https://pondokjepun.vercel.app/LandingPage/NDA_7431.jpg"],
  },
};

export default function TermsAndConditions() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-4">
      <section className="bg-white rounded-2xl shadow p-8">
        <div className="gap-6 flex flex-col lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-2 nicolas font-semibold md:text-[32px]  text-[32px] text-coklat_tua">
              Syarat &amp; Ketentuan Pondok Jepun Homestay
            </h2>
            <p className="text-sm text-coklat_tua mb-6">
              Baca dengan seksama syarat dan ketentuan berikut sebelum melakukan
              reservasi. Dengan melakukan pemesanan, Anda menyetujui seluruh
              ketentuan yang berlaku.
            </p>
            <ol className="space-y-6 text-gray-700">
              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  1. Reservasi &amp; Pembayaran
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Pemesanan dianggap sah setelah melakukan konfirmasi dan
                  pembayaran uang muka (DP). Sisa pembayaran wajib dilunasi saat
                  check-in. Metode pembayaran yang diterima adalah transfer bank
                  atau metode lain yang ditentukan pihak homestay.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  2. Pembatalan &amp; Perubahan Jadwal
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Pembatalan minimal 3 (tiga) hari sebelum tanggal check-in akan
                  dikenakan biaya administrasi sebesar 20% dari total reservasi.
                  Pembatalan mendadak (kurang dari 24 jam sebelum check-in)
                  dikenakan biaya 100% dari total reservasi. Perubahan jadwal
                  hanya dapat dilakukan jika kamar tersedia.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  3. Check-in &amp; Check-out
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Waktu check-in dimulai pukul 14.00 WIB. Waktu check-out
                  maksimal pukul 12.00 WIB. Keterlambatan check-out dapat
                  dikenakan biaya tambahan sesuai kebijakan homestay.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  4. Aturan Menginap
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Tamu wajib menjaga kebersihan, ketertiban, dan kenyamanan
                  selama menginap. Dilarang membawa atau menggunakan barang
                  terlarang. Merokok dilarang di dalam kamar—hanya diperbolehkan
                  di area luar yang ditentukan. Hewan peliharaan tidak
                  diperbolehkan tanpa izin.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  5. Tanggung Jawab
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Pondok Jepun Homestay tidak bertanggung jawab atas kehilangan
                  barang pribadi tamu. Kerusakan fasilitas akibat kelalaian atau
                  kesengajaan tamu akan dikenakan biaya ganti rugi sesuai nilai
                  kerusakan.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  6. Fasilitas
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Seluruh fasilitas homestay diperuntukkan bagi tamu yang
                  menginap. Penggunaan fasilitas bersama (ruang tamu, dapur,
                  karaoke) wajib dilakukan secara tertib dan saling menghargai
                  tamu lain.
                </p>
              </li>
            </ol>

            <Suspense
              fallback={
                <p className="mt-6 text-coklat_tua text-sm">
                  Loading tombol...
                </p>
              }
            >
              <BtnKembali />
            </Suspense>
          </div>

          <aside className="w-72 block">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold mb-2 teramo text-coklat_tua">
                Info Cepat
              </h4>
              <ul className="text-sm text-coklat_tua space-y-2">
                <li>📍 Lokasi: Sumberrejo, Kec. Banyuwangi,</li>
                <li>📞 WA: +62 821-3248-7131</li>
                <li>⏰ Check-in: 14:00 | Check-out: 12:00</li>
                <li>💵 Harga mulai: Rp500.000/malam</li>
              </ul>
            </div>

            <div className="mt-4 bg-white border border-gray-100 rounded-lg p-3">
              <h4 className="font-semibold teramo text-coklat_tua mb-2">
                Perhatian
              </h4>
              <p className="text-sm text-coklat_tua">
                Pastikan menghubungi kami terlebih dahulu untuk memastikan
                ketersediaan kamar sebelum melakukan pembayaran.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-5 text-sm text-gray-500">
        <p>
          Dokumen ini bersifat mengikat. Jika Anda memiliki pertanyaan terkait
          Syarat &amp; Ketentuan, silakan hubungi kami melalui halaman{" "}
          <Link href="/contact" className="text-coklat_tua underline">
            Kontak
          </Link>
          .
        </p>
      </section>
    </section>
  );
}
