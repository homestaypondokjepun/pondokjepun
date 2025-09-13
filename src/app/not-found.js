import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-6xl font-bold text-coklat_tua mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-coklat_tua mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-coklat_tua text-sm leading-relaxed mb-6">
          Maaf, halaman yang Anda cari tidak tersedia atau mungkin sudah
          dipindahkan. Silakan kembali ke halaman utama atau hubungi kami jika
          memerlukan bantuan lebih lanjut.
        </p>

        <Link
          href="/"
          className="inline-block py-2 px-6 text-base bg-coklat rounded-md font-bold text-coklat_muda hover:bg-coklat_tua transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
