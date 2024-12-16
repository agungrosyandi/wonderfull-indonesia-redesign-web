import { getEvents } from '@/utils/utils';
import Link from 'next/link';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

type PaginationControlProps = {
  city: string;
  page: number;
};

export default async function PaginationControl({
  city,
  page,
}: PaginationControlProps) {
  const { totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : '';

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
          <Link href={nextPath} className="flex items-center gap-3 px-5 py-3 bg-white/5">
            <p className="text-base">Selanjutnya</p>
            <FaLongArrowAltRight />
          </Link>
        )}
      </div>
    </section>
  );
}
