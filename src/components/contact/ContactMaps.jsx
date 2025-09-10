export default function GoogleMapsEmbed() {
  return (
    <div className="bg-coklat_muda p-8">
      <div className="max-w-6xl mx-auto">
        {/* Teks di atas map */}
        <div className="text-center mb-6">
          <h2 className="nicolas font-bold text-[28px] md:text-[42px]  text-coklat_tua">
            Lokasi Guest House Pondok Jepun
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-coklat_tua">
            Temukan kami di jantung kota Banyuwangi, hanya 100 meter dari Satpas
            Banyuwangi. Nikmati pengalaman menginap yang nyaman dan strategis.
          </p>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-md shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3949.2655911898546!2d114.381038!3d-8.1759768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14452095ddebd%3A0xa85f69cec782dd75!2sJl.%20Yos%20Sudarso%2C%20Klatak%2C%20Kec.%20Kalipuro%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur%2068421!5e0!3m2!1sid!2sid!4v1756556068352!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
