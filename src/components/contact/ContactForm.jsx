import Link from "next/link";
import { useState } from "react";

const ContactForm = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const sendWhatsapp = (e) => {
    e.preventDefault();

    const whatsappMessage = `Halo, saya: ${nama}\nemail: ${email}\n${pesan}`;
    const url = `https://wa.me/6282247739704?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="p-1 md:p-4  flex items-center">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 w-full  ">
        <section className="p-2">
          <section className="p-2">
            <h1 className="teramo font-semibold md:text-[24px] text-[24px] text-coklat_tua">
              Jangan Ragu untuk Menghubungi Kami !
            </h1>
          </section>

          <section className="p-2 mt-2">
            <p className="teramo md:text-[16px] text-[16px] text-coklat_tua">
              Kami selalu siap membantu Anda jika ada pertanyaan, permintaan
              khusus, atau informasi lebih lanjut yang Anda butuhkan. Jangan
              ragu untuk menghubungi kami kapan saja — kami akan dengan senang
              hati merespons dan memastikan pengalaman menginap Anda berjalan
              lancar dan menyenangkan.
            </p>
          </section>

          <section className="p-2 mt-4">
            <p className="teramo md:text-[16px] text-[16px] text-coklat_tua">
              Jl. Brawijaya, Kebalenan, Kec. Banyuwangi, Kabupaten Banyuwangi,
              Jawa Timur 68417
            </p>
          </section>

          <section className=" mt-5  p-2">
            <section className=" p-2">
              <Link
                href={"https://wa.me/6285732225227"}
                target="_blank"
                className="cursor-pointer flex gap-5 hover:text-coklat_muda hover:fill-coklat_muda"
              >
                <section className="w-[25px] content-center  ml-4">
                  <svg
                    className="fill-coklat"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                  </svg>
                </section>
                <section className="teramo md:text-[20px] text-[18px] text-coklat_tua">
                  <p>09077687589</p>
                </section>
              </Link>
            </section>

            <section className=" p-2">
              <Link
                href={"https://wa.me/6285732225227"}
                className="cursor-pointer flex gap-5 hover:text-coklat_muda hover:fill-coklat_muda"
              >
                <section className="w-[25px] content-center  ml-4">
                  <svg
                    className="fill-coklat"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                  </svg>
                </section>
                <section className="teramo md:text-[20px] text-[18px] text-coklat_tua">
                  <p>WhatsApp</p>
                </section>
              </Link>
            </section>

            <section className=" p-2">
              <Link
                href={"mailto:rhmymfdy@gmail.com"}
                className="cursor-pointer flex gap-5 hover:text-coklat_muda hover:fill-coklat_muda"
              >
                <section className="w-[25px] content-center  ml-4">
                  <svg
                    className="fill-coklat"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
                  </svg>
                </section>
                <section className="teramo md:text-[20px] text-[18px] text-coklat_tua">
                  <p>Mail</p>
                </section>
              </Link>
            </section>

            <section className=" p-2">
              <Link
                href={"https://www.instagram.com/rhmymfdy/"}
                className="cursor-pointer flex gap-5 hover:text-coklat_muda hover:fill-coklat_muda"
              >
                <section className="w-[25px] content-center  ml-4">
                  <svg
                    className="fill-coklat"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                </section>
                <section className="teramo md:text-[20px] text-[18px] text-coklat_tua">
                  <p>Instagram</p>
                </section>
              </Link>
            </section>
          </section>
        </section>

        <section className=" content-center">
          <form className="w-full mx-auto" onSubmit={sendWhatsapp}>
            <section className="  p-4 w-full">
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-gray-300 focus:border-gray-300 w-full p-2.5 "
                placeholder="Nama Anda"
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </section>

            <section className="  p-4">
              <section className="relative">
                <section className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </section>
                <input
                  type="email"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  placeholder="Email Anda"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </section>
            </section>

            <section className="  p-4">
              <textarea
                id="message"
                rows="10"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Pesan Anda"
                onChange={(e) => setPesan(e.target.value)}
                required
              ></textarea>
            </section>

            <section
              className="  p-4
                        "
            >
              <button
                type="submit"
                className=" text-coklat cursor-pointer bg-coklat_muda  hover:bg-coklat hover:text-white  font-medium text-sm px-5 py-2.5 text-center 
                            transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
              >
                Kirim ke Whatsapp
              </button>
            </section>
          </form>
        </section>
      </section>
    </section>
  );
};

export default ContactForm;
