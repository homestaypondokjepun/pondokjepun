import Link from "next/link";

const KebijakanPrivasi = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-4">
      <section className="bg-white rounded-2xl shadow p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h1 className="mb-2 nicolas font-semibold md:text-[32px] text-[32px] text-coklat_tua">
              Kebijakan Privasi Pondok Jepun Homestay
            </h1>
            <p className="text-sm text-coklat_tua mb-6">
              Kami di Pondok Jepun Homestay menghargai privasi Anda dan
              berkomitmen untuk melindungi informasi pribadi yang Anda berikan
              saat mengunjungi situs web atau menggunakan layanan kami.
            </p>

            <ol className="space-y-6 text-coklat_tua">
              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  1. Informasi yang Kami Kumpulkan
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Kami mengumpulkan informasi pribadi seperti nama, alamat
                  email, nomor telepon, data reservasi, serta informasi
                  penggunaan website untuk meningkatkan layanan kami.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  2. Penggunaan Informasi
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Informasi digunakan untuk memproses reservasi, memberikan
                  informasi promosi, dan meningkatkan pengalaman pengguna di
                  website kami.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  3. Keamanan Data
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Kami mengambil langkah-langkah keamanan wajar untuk melindungi
                  data pribadi Anda dari akses yang tidak sah, perubahan,
                  pengungkapan, atau perusakan.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  4. Hak Anda
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Anda berhak meminta akses, perbaikan, atau penghapusan data
                  pribadi Anda. Hubungi kami melalui informasi kontak yang
                  tersedia.
                </p>
              </li>

              <li>
                <h3 className="teramo text-coklat_tua font-semibold">
                  5. Perubahan Kebijakan Privasi
                </h3>
                <p className="mt-2 text-sm text-coklat_tua">
                  Pondok Jepun Homestay berhak memperbarui kebijakan privasi
                  kapan saja. Perubahan akan diumumkan di halaman ini.
                </p>
              </li>
            </ol>

            <section className="mt-6">
              <Link
                href={"/"}
                className="py-2 px-5 text-base  bg-coklat rounded-md font-bold text-coklat_muda cursor-pointer hover:bg-coklat_tua"
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
    </section>
  );
};

export default KebijakanPrivasi;
