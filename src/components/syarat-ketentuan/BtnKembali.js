"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BtnKembali = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  return (
    <section className="mt-6">
      <Link
        href={`${from === "contact" ? "/contact" : "/"} `}
        className="py-2 px-5 text-base bg-coklat rounded-md font-bold text-coklat_muda cursor-pointer hover:bg-coklat_tua"
      >
        Kembali
      </Link>
    </section>
  );
};

export default BtnKembali;
