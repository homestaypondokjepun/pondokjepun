"use client";

export default function GoogleMapsEmbed() {
  return (
    <div className="bg-coklat_muda">
      <div className="w-5/6 md:w-5xl mx-auto h-[400px] md:h-[500px]  pb-8 pt-5">
        <div className="overflow-hidden rounded-md w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3949.2655911898546!2d114.381038!3d-8.1759768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14452095ddebd%3A0xa85f69cec782dd75!2sJl.%20Yos%20Sudarso%2C%20Klatak%2C%20Kec.%20Kalipuro%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur%2068421!5e0!3m2!1sid!2sid!4v1756556068352!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
