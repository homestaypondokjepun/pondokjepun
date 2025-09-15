"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showHide, setShowHide] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const ulMenu = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ubah threshold sesuai kebutuhan
    };

    // set initial state (jika user membuka halaman tidak dari top)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className=" hidden items-center justify-center md:flex ">
        <section className="w-[90%] mr-30 flex justify-between items-center ">
          <section className="gap-5 hidden lg:flex ">
            <section className="flex items-center gap-2 ">
              <section className="border border-coklat w-10 h-10 rounded-full flex justify-center items-center hover:animate-contact duration-75">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-xl text-coklat_tua"
                />
              </section>
              <section className="text-coklat_tua text-sm flex flex-col gap-1 font-bold">
                <p>Q85W+R2J, Sumberrejo, Kec. Banyuwangi,</p>
                <p> Kabupaten Banyuwangi, Jawa Timur</p>
              </section>
            </section>
            <section className="flex items-center gap-2 ">
              <a
                href={"mailto:pondokjepun25@gmail.com"}
                aria-label="Kirim email ke Pondok Jepun"
                className="border border-coklat w-10 h-10 rounded-full flex justify-center items-center hover:animate-contact duration-75"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl text-coklat_tua"
                />
              </a>
              <section className="text-coklat_tua text-sm flex flex-col gap-1 font-bold">
                <p>Email Kami</p>
                <p>pondokjepun25@gmail.com</p>
              </section>
            </section>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=" h-15 p-2 mr-12"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={400}
              height={400}
              className="w-20 "
            />
          </motion.section>

          <section className="items-center gap-10 hidden sm:flex ">
            <p className="text-2xl text-coklat_tua font-bold">
              +62 821-3248-7131
            </p>
            <a
              href="https://wa.me/6282132487131"
              target="_blank"
              className="py-2 px-5 font-bold bg-coklat rounded-md text-coklat_muda cursor-pointer hover:bg-coklat_tua"
            >
              Hubungi Kami
            </a>
          </section>
        </section>
      </section>

      <motion.nav
        className={`z- fixed z-20 w-full top-0 bg-white md:bg-coklat_muda shadow-md ${
          scrolled ? "" : "md:relative"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:justify-center ">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse md:hidden gap-2 "
          >
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/logo.png"
                className="w-10 me-1"
                alt="Pondok Jepun Logo"
                height={400}
                width={400}
              />
            </motion.section>
            <span className="nicolas self-center text-2xl font-bold whitespace-nowrap text-coklat_tua">
              Pondok Jepun
            </span>
          </Link>
          <button
            onClick={() => setShowHide(!showHide)}
            type="button"
            className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-coklat_tua hover:text-coklat_muda rounded-lg md:hidden hover:bg-coklat_tua focus:outline-none  "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`w-full md:block md:w-auto ${showHide ? "" : "hidden"}`}
          >
            <ul
              ref={ulMenu}
              className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-coklat_muda"
            >
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-coklat rounded-sm p-10 md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0"
                  aria-current="page"
                >
                  <p
                    className={`text-coklat_tua border-b-2  ${
                      pathname === "/"
                        ? "  border-b-coklat"
                        : "border-b-coklat_muda hover:border-b-coklat"
                    } `}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/akomodasi"
                  className=" block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
                >
                  <p
                    className={`text-coklat_tua border-b-2  ${
                      pathname === "/akomodasi"
                        ? "border-b-coklat"
                        : "border-b-coklat_muda hover:border-b-coklat"
                    } `}
                  >
                    Akomodasi
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/service-fasilitas"
                  className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
                >
                  <p
                    className={`text-coklat_tua border-b-2 ${
                      pathname === "/service-fasilitas"
                        ? "border-b-coklat"
                        : "border-b-coklat_muda hover:border-b-coklat"
                    } `}
                  >
                    Fasilitas
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
                >
                  <p
                    className={`text-coklat_tua border-b-2  ${
                      pathname === "/gallery"
                        ? "border-b-coklat"
                        : "border-b-coklat_muda hover:border-b-coklat"
                    } `}
                  >
                    Gallery
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/cara-pemesanan"
                  className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
                >
                  <p
                    className={`text-coklat_tua border-b-2  ${
                      pathname === "/cara-pemesanan"
                        ? "border-b-coklat"
                        : "border-b-coklat_muda hover:border-b-coklat"
                    } `}
                  >
                    Cara Pemesanan
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
                >
                  <p
                    className={`text-coklat_tua border-b-2 ${
                      pathname === "/contact"
                        ? "border-b-coklat"
                        : "border-b-coklat_muda hover:border-b-coklat"
                    } `}
                  >
                    Contact
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/kost/landing-page"
                  className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
                >
                  <p
                    className={`text-coklat_tua border-b-2 ${
                      pathname === "/kost/landing-page"
                        ? "border-b-coklat"
                        : "border-b-coklat_muda hover:border-b-coklat"
                    } `}
                  >
                    Kost Arka Dewata
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
