import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-coklat">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-1">
              <section className="w-11 h-11 flex justify-center items-center bg-white rounded-full">
                <Image
                  src="/logo.png"
                  className="h-8 me-1"
                  alt="FlowBite Logo"
                  height={50}
                  width={35}
                />
              </section>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Jepun
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                TENTANG KAMI
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/service-fasilitas" className="hover:underline">
                    Layanan
                  </Link>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Kontak Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                IKUTI KAMI
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/pondok_jepun25"
                    target="_blank"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <Link
                    href="/syarat-dan-ketentuan"
                    className="hover:underline"
                  >
                    Syarat &amp; Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-coklat_muda sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-coklat_muda sm:text-center ">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              Pondok Jepun Banyuwangi™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
            <a
              href="https://www.instagram.com/pondok_jepun25"
              target="_blank"
              className="text-coklat_muda hover:text-white"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
              <span className="sr-only">Instagram page</span>
            </a>

            <a href="#" className="text-coklat_muda hover:text-white">
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span className="sr-only">Whatsapp page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
