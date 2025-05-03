import H1 from "./component/H1";
import ListDestinationMainContainer from "./component/list-destination-main-container";

import { db } from "../../../../../server/drizzle";
import DestinationList from "./component/destination-list-wrapper";
import { notFound } from "next/navigation";
import Pagination from "./component/pagination-control";
import { sql } from "drizzle-orm";
import { konten } from "../../../../../server/schema";
import { Metadata } from "next";
import ZeroData from "./component/zero-data";

export const revalidate = 5;

export const metadata: Metadata = {
  title: "All Destinations",
  description: "Explore our Beauty",
};

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default async function ListDestination({ searchParams }: Props) {
  // limit & offshet ---------------

  const pageSize = 6;
  const page = Number(searchParams?.page) || 1;

  if (page < 1) return notFound();

  // data from database query --------------

  const data = await db.query.konten.findMany({
    with: {
      kontenImages: true,
      kontenTags: true,
      user: true,
    },

    orderBy: (konten, { desc }) => [desc(konten.id)],
    limit: pageSize,
    offset: (page - 1) * pageSize,
  });

  // 2. Get total count

  const countResult = await db
    .select({ count: sql<number>`count(*)` })
    .from(konten);

  const totalCount = countResult[0]?.count ?? 0;

  // 3. Calculate total pages

  const totalPages = Math.ceil(totalCount / pageSize);

  if (page > totalPages && totalPages > 0) return notFound();

  // main component ----------------------

  return (
    <ListDestinationMainContainer>
      {/* title ---------------------------- */}

      {data.length >= 1 ? <H1>All Destination</H1> : null}

      {/* data ---------------------------- */}

      {data.length === 0 ? <ZeroData /> : <DestinationList kontens={data} />}

      {/* Pagination ---------------------------- */}

      {data.length >= 1 ? (
        <Pagination currentPage={page} totalPages={totalPages} />
      ) : null}
    </ListDestinationMainContainer>
  );
}
