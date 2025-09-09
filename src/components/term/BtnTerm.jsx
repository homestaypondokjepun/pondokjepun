"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BtnTerm = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  return (
    <Link
      href={from}
      className="px-4 py-2 bg-coklat text-white rounded-md text-sm hover:bg-coklat_tua"
    >
      Kembali
    </Link>
  );
};

export default BtnTerm;
