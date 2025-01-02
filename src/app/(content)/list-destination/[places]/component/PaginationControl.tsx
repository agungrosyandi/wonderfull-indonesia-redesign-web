"use client";

import { PaginationControlProps } from "@/utils/type";
import Link from "next/link";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function PaginationControl({
  places,
  page,
  totalCount,
}: PaginationControlProps) {
  const previousPath =
    page > 1 ? `/list-destination/${places}?page=${page - 1}` : "";

  const nextPath =
    totalCount > 6 * page ? `/list-destination/${places}?page=${page + 1}` : "";

  return (
    <section className="relative col-span-6">
      <div className="flex text-white font-bold gap-5 justify-center">
        {previousPath ? (
          <Link
            href={previousPath}
            className="flex items-center gap-3 px-5 py-3 bg-white/5 "
          >
            <FaLongArrowAltLeft />
            <p className="text-base">Sebelumnya</p>
          </Link>
        ) : null}

        {nextPath && (
          <Link
            href={nextPath}
            className="flex items-center gap-3 px-5 py-3 bg-white/5"
          >
            <p className="text-base">Selanjutnya</p>
            <FaLongArrowAltRight />
          </Link>
        )}
      </div>
    </section>
  );
}
