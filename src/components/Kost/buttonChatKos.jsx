"use client";

import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FormPemesananKos from "./FormPemesananKos";

const ButtonChatKos = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="p-2 text-center fixed z-50 bottom-0 w-full bg-white shadow-lg h-15 content-center">
      <section className="flex justify-center items-center">
        <button
          onClick={() => setShowPopup(true)}
          className="w-full flex justify-center cursor-pointer items-center h-10 text-white bg-coklat_tua  font-medium rounded-lg text-sm px-5 py-2.5"
        >
          <svg
            className="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Booking Kos Via WhatsApp
        </button>
      </section>

      {/* Popup Form */}
      {showPopup && <FormPemesananKos setShowPopup={setShowPopup} />}
    </section>
  );
};

export default ButtonChatKos;
