import Image from "next/image";
import { db } from "../../../../../server/drizzle";
import { konten } from "../../../../../server/schema";
import { eq } from "drizzle-orm";
import Reviews from "@/components/reviews/reviews";
import Stars from "@/components/reviews/stars";
import { getReviewAverage } from "@/lib/review-average";
import { Metadata } from "next";

export const revalidate = 5;

// generate metadata slug ----------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const kontenSlug = await db.query.konten.findFirst({
    where: eq(konten.id, Number(params.slug)),
  });

  if (!kontenSlug) {
    return {
      title: "Content not found | My Website",
      description: "The content you are looking for could not be found.",
    };
  }

  return {
    title: `${kontenSlug.title} | Wonderful Indonesia`,
    description:
      kontenSlug.description?.substring(0, 150) || "Discover amazing content.",
    openGraph: {
      title: kontenSlug.title,
    },
  };
}

export async function generateStaticParams() {
  // find data in database ----------------------------------------------

  const data = await db.query.konten.findMany({
    with: {
      kontenImages: true,
      kontenTags: true,
    },
    orderBy: (konten, { desc }) => [desc(konten.id)],
  });

  return data.map((konten) => ({ slug: konten.id.toString() }));
}

// main page ----------------------------------------------

export default async function DestinationSlug({
  params,
}: {
  params: { slug: string };
}) {
  // find konten data in database -------------------------------

  const kontenSlug = await db.query.konten.findFirst({
    where: eq(konten.id, Number(params.slug)),
    with: {
      reviews: true,
      kontenImages: true,
      kontenTags: true,
    },
  });

  if (kontenSlug) {
    const reviewAvg = getReviewAverage(
      kontenSlug?.reviews.map((r) => r.rating)
    );

    const placeholderImage = "/image/landscape-placeholder-svgrepo-com.svg";

    const imageUrls = [
      kontenSlug.kontenImages[0]?.url || placeholderImage,
      kontenSlug.kontenImages[1]?.url || placeholderImage,
      kontenSlug.kontenImages[2]?.url || placeholderImage,
    ];

    return (
      <main className="relative mt-[10vh] mx-[5%] fullHdMinWidth:mx-[10%] ">
        <section className="border-b-2 gap-3 py-5 flex flex-col justify-between tabletMinWidth:flex-row tabletMinWidth:items-end">
          <div className=" text-black flex flex-col gap-2 ">
            <h1 className="text-lg font-bold tabletMinWidth:text-2xl">
              {kontenSlug.title}
            </h1>

            <div className="flex flex-row gap-1">
              <p className="text-xs font-bold">Location: </p>
              <p className="text-xs font-normal">{kontenSlug.kota}, </p>
              <p className="text-xs font-normal">{kontenSlug.lokasi}</p>
            </div>

            <p className="text-xs font-bold">
              Last Update :
              {kontenSlug.created?.toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div>
            <Stars
              rating={reviewAvg}
              totalReviews={kontenSlug.reviews.length}
            />
          </div>
        </section>

        {/* image slug  ------------------------ */}

        <section className=" text-black flex flex-col py-5">
          <div className="relative flex w-full flex-col gap-5 tabletMinWidth:flex-row-reverse tabletMinWidth:flex-1 tabletMinWidth:items-center">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className={`relative w-full h-[25rem] tabletMinWidth:h-[30rem] ${
                  index > 0 ? "hidden tabletMinWidth:block" : ""
                }`}
              >
                <Image
                  className="absolute inset-0 w-full h-full"
                  src={url}
                  alt={`${kontenSlug.title} image ${index + 1}`}
                  width={500}
                  height={500}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Description slug  ------------------------------------- */}

        <section className=" text-black flex flex-col justify-center items-center text-center py-5">
          <h2 className="text-lg font-bold tabletMinWidth:text-2xl">
            About Destinations
          </h2>
        </section>

        <section className=" text-black flex flex-col py-5">
          <div
            className="flex flex-col gap-2 text-base"
            dangerouslySetInnerHTML={{ __html: kontenSlug.description }}
          />
        </section>

        {/* review variant  ------------------------ */}

        {/* import from reviews.tsx component ------------------------ */}

        <section className="py-5">
          <Reviews kontenID={kontenSlug.id} />
        </section>
      </main>
    );
  }
}
