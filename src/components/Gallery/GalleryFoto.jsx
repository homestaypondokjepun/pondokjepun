"use client";
import { useState } from "react";
import Image from "next/image";
const images = [
  "/Gallery/gallery (1).jpg",
  "/Gallery/gallery (2).jpg",
  "/Gallery/gallery (3).jpg",
  "/Gallery/gallery (4).jpg",
  "/Gallery/gallery (5).jpg",
  "/Gallery/gallery (6).jpg",
  "/Gallery/gallery (7).jpg",
  "/Gallery/gallery (8).jpg",
  "/Gallery/gallery (10).jpg",
  "/Gallery/gallery (11).jpg",
  "/Gallery/gallery (12).jpg",
  // "/Gallery/gallery (13).jpg",
  "/Gallery/gallery (14).jpg",
  "/Gallery/gallery (15).jpg",
  "/Gallery/gallery (16).jpg",
  "/Gallery/gallery (17).jpg",
  "/Gallery/gallery (18).jpg",
  "/Gallery/gallery (19).jpg",
  "/Gallery/gallery (20).jpg",
  // "/Gallery/gallery (21).jpg",
  "/Gallery/gallery (22).jpg",
  "/Gallery/gallery (23).jpg",
  "/Gallery/gallery (24).jpg",
  // "/Gallery/gallery (25).jpg",
  "/Gallery/gallery (26).jpg",
  "/Gallery/gallery (27).jpg",
  "/Gallery/gallery (28).jpg",
  "/Gallery/gallery (29).jpg",
  "/Gallery/gallery (30).jpg",
  "/Gallery/gallery (31).jpg",
  "/Gallery/gallery (32).jpg",
  "/Gallery/gallery (33).jpg",
  "/Gallery/gallery (34).jpg",
  "/Gallery/gallery (35).jpg",
  "/Gallery/gallery (36).jpg",
  "/Gallery/gallery (37).jpg",
  "/Gallery/gallery (38).jpg",
  "/Gallery/gallery (39).jpg",
  "/Gallery/gallery (40).jpg",
  "/Gallery/gallery (41).jpg",
  "/Gallery/gallery (42).jpg",
  "/Gallery/gallery (43).jpg",
  // "/Gallery/gallery (44).jpg",
  "/Gallery/gallery (45).jpg",
  "/Gallery/gallery (46).jpg",
  "/Gallery/gallery (47).jpg",
  "/Gallery/gallery (48).jpg",
  "/Gallery/gallery (49).jpg",
  "/Gallery/gallery (50).jpg",
];

const GalleryFoto = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 p-2 md:p-0 md:grid-cols-3 gap-6 mt-10 mb-10 w-full max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index + 1}
            className="flex justify-center items-center cursor-pointer h-80 overflow-hidden"
            onClick={() => handleOpen(index)}
          >
            <Image
              src={image}
              alt={`Gallery ${index}`}
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-md"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 404px"
              blurDataURL="/placeholder.jpg" // bisa bikin 1x1 px base64 juga
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleClose} // klik background -> close
        >
          {/* Konten popup, hentikan event agar klik di dalam tidak menutup */}
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 cursor-pointer text-white text-3xl"
              onClick={handleClose}
            >
              ✕
            </button>

            <button
              className="absolute ml-4 left-5 cursor-pointer text-white text-4xl"
              onClick={handlePrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  ">
                <svg
                  className="w-4 h-4 text-white  rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            <Image
              src={images[selectedIndex]}
              alt="Selected"
              width={1200}
              height={800}
              className="max-h-[90vh] max-w-[90vw] object-contain bg-white  shadow-lg shadow-white/50"
            />

            <button
              className="absolute mr-4 right-5 cursor-pointer text-white text-4xl"
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 ">
                <svg
                  className="w-4 h-4 text-white  rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryFoto;
