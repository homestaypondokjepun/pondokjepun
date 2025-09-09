"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showHide, setShowHide] = useState(false);
  const pathname = usePathname();
  const ulMenu = useRef();

  return (
    <nav className="bg-coklat_muda">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:justify-center">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse md:hidden gap-2"
        >
          <Image
            src="/logo.png"
            className="h-8 me-1"
            alt="FlowBite Logo"
            height={50}
            width={35}
          />
          <span className="teramo self-center text-2xl font-bold whitespace-nowrap text-coklat">
            Pondok Jepun
          </span>
        </Link>
        <button
          onClick={() => setShowHide(!showHide)}
          type="button"
          className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-coklat hover:text-coklat_muda rounded-lg md:hidden hover:bg-coklat_tua focus:outline-none  "
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
            className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg bg-coklat_muda md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-coklat_muda"
          >
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-coklat rounded-sm p-10 md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0"
                aria-current="page"
              >
                <p
                  className={`text-coklat border-b-2  ${
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
                href="/accomodation"
                className=" block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                <p
                  className={`text-coklat border-b-2  ${
                    pathname === "/accomodation"
                      ? "border-b-coklat"
                      : "border-b-coklat_muda hover:border-b-coklat"
                  } `}
                >
                  Accomodation
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/service-fasilitas"
                className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                <p
                  className={`text-coklat border-b-2 ${
                    pathname === "/service-fasilitas"
                      ? "border-b-coklat"
                      : "border-b-coklat_muda hover:border-b-coklat"
                  } `}
                >
                  Facilities
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                <p
                  className={`text-coklat border-b-2  ${
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
                href="/contact"
                className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                <p
                  className={`text-coklat border-b-2 ${
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
                href="/contact"
                className="block py-2 px-3 text-coklat rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                <p
                  className={`text-coklat border-b-2 ${
                    pathname === "/contact"
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
    </nav>
  );
}
