import { db } from "../../../../server/drizzle";
import { columns } from "./column";
import { DataTable } from "./data-table";
import placehoderImage from "../../../../public/image/landscape-placeholder-svgrepo-com.svg";
import { auth } from "../../../../server/auth";

export const revalidate = 5;

export default async function Product() {
  // fetch and find product prom database ----------------------------

  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  const contents = await db.query.konten.findMany({
    where: (konten, { eq }) => eq(konten.authorId, session.user.id),

    with: {
      kontenImages: true,
      kontenTags: true,
    },

    orderBy: (konten, { desc }) => [desc(konten.id)],
  });

  if (!contents) throw new Error("no content found");

  // add content into table ----------------------

  const dataTable = contents.map((content) => {
    const image = content.kontenImages?.[0]?.url ?? placehoderImage.src;

    // add content condition

    return {
      id: content.id,
      title: content.title,
      description: content.description.slice(0, 80),
      image,
    };
  });

  if (!dataTable) throw new Error("No data found !");

  // import from data-table.tsx component ------------------------------------

  return <DataTable columns={columns} data={dataTable} />;
}
