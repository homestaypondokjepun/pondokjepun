import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-4">
      <section className="bg-white rounded-2xl shadow p-8">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">
              Syarat &amp; Ketentuan Pondok Jepun Homestay
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Baca dengan seksama syarat dan ketentuan berikut sebelum melakukan
              reservasi. Dengan melakukan pemesanan, Anda menyetujui seluruh
              ketentuan yang berlaku.
            </p>

            <ol className="space-y-6 text-gray-700">
              <li>
                <h3 className="font-semibold">1. Reservasi &amp; Pembayaran</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Pemesanan dianggap sah setelah melakukan konfirmasi dan
                  pembayaran uang muka (DP). Sisa pembayaran wajib dilunasi saat
                  check-in. Metode pembayaran yang diterima adalah transfer bank
                  atau metode lain yang ditentukan pihak homestay.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">
                  2. Pembatalan &amp; Perubahan Jadwal
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Pembatalan minimal 3 (tiga) hari sebelum tanggal check-in akan
                  dikenakan biaya administrasi sebesar 20% dari total reservasi.
                  Pembatalan mendadak (kurang dari 24 jam sebelum check-in)
                  dikenakan biaya 100% dari total reservasi. Perubahan jadwal
                  hanya dapat dilakukan jika kamar tersedia.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">3. Check-in &amp; Check-out</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Waktu check-in dimulai pukul 14.00 WIB. Waktu check-out
                  maksimal pukul 12.00 WIB. Keterlambatan check-out dapat
                  dikenakan biaya tambahan sesuai kebijakan homestay.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">4. Aturan Menginap</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Tamu wajib menjaga kebersihan, ketertiban, dan kenyamanan
                  selama menginap. Dilarang membawa atau menggunakan barang
                  terlarang. Merokok dilarang di dalam kamar—hanya diperbolehkan
                  di area luar yang ditentukan. Hewan peliharaan tidak
                  diperbolehkan tanpa izin.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">5. Tanggung Jawab</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Pondok Jepun Homestay tidak bertanggung jawab atas kehilangan
                  barang pribadi tamu. Kerusakan fasilitas akibat kelalaian atau
                  kesengajaan tamu akan dikenakan biaya ganti rugi sesuai nilai
                  kerusakan.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">6. Fasilitas</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Seluruh fasilitas homestay diperuntukkan bagi tamu yang
                  menginap. Penggunaan fasilitas bersama (ruang tamu, dapur,
                  karaoke) wajib dilakukan secara tertib dan saling menghargai
                  tamu lain.
                </p>
              </li>
            </ol>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href={"/"}
                className="px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
              >
                Kembali
              </Link>
            </div>
          </div>

          <aside className="w-72 hidden lg:block">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold mb-2">Info Cepat</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>📍 Lokasi: Jantung Kota Banyuwangi</li>
                <li>📞 WA: 08xxxxxxxxxx</li>
                <li>⏰ Check-in: 14:00 | Check-out: 12:00</li>
                <li>💵 Harga mulai: Rp500.000/malam</li>
              </ul>
            </div>

            <div className="mt-4 bg-white border border-gray-100 rounded-lg p-3">
              <h4 className="font-semibold mb-2">Perhatian</h4>
              <p className="text-sm text-gray-600">
                Pastikan menghubungi kami terlebih dahulu untuk memastikan
                ketersediaan kamar sebelum melakukan pembayaran.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-8 text-sm text-gray-500">
        <p>
          Dokumen ini bersifat mengikat. Jika Anda memiliki pertanyaan terkait
          Syarat &amp; Ketentuan, silakan hubungi kami melalui halaman{" "}
          <Link href="/contact" className="text-blue-600 underline">
            Kontak
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
