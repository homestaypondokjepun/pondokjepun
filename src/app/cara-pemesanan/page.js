"use client";

import { useEffect } from "react";

export default function Pemesanan() {
  useEffect(() => {
    document.title = "Cara Pemesanan";
  }, []);

  return (
    <>
      <h1>About Page</h1>
      <p>Ini adalah halaman tentang kami.</p>
    </>
  );
}
