import Review from "./review";
import ReviewsForm from "./reviews-form";
import { desc, eq } from "drizzle-orm";
import { reviews } from "../../../server/schema";
import { db } from "../../../server/drizzle";
import ReviewChart from "./review-chart";

// export to parent page  --------------------------------------

export default async function Reviews({ kontenID }: { kontenID: number }) {
  const data = await db.query.reviews.findMany({
    with: { user: true },
    where: eq(reviews.kontenID, kontenID),
    orderBy: [desc(reviews.created)],
  });

  return (
    <section className="py-4">
      <div className="flex flex-col gap-2 justify-stretch desktopMinWidth:flex-row desktopMinWidth:gap-12">
        <div className="flex-1">
          <h2 className="text-lg mb-4 font-bold tabletMinWidth:text-2xl">
            Destination Reviews
          </h2>
          <ReviewsForm />
          <Review reviews={data} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <ReviewChart reviews={data} />
        </div>
      </div>
    </section>
  );
}
