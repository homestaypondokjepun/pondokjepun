export default function GoogleMapsEmbed() {
  return (
    <div className=" p-8">
      <div className="max-w-6xl mx-auto">
        {/* Teks di atas map */}
        <div className="text-center mb-6">
          <h2 className="teramo font-bold text-[28px] md:text-[32px]  text-coklat_tua">
            Lokasi Guest House Pondok Jepun
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-coklat_tua">
            Temukan kami di jantung kota Banyuwangi, hanya 100 meter dari Satpas
            Banyuwangi. Nikmati pengalaman menginap yang nyaman dan strategis.
          </p>
        </div>

        {/* Map */}
        <div className="w-full border border-gray-200 h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-md shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155477.1082175603!2d114.19258589726562!3d-8.240413299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15b007ef305a1%3A0xd15c800747185c2d!2sHomestay%20Pondok%20Jepun!5e1!3m2!1sid!2sid!4v1757595726206!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Map Pondok Jepun"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
