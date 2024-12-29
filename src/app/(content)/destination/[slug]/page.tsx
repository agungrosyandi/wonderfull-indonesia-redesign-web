import { getDestinationSlug } from "@/actions/actions";
import { ParamsPropsSlug } from "@/utils/type";

import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: ParamsPropsSlug): Promise<Metadata> {
  const slug = params.slug;

  const destinationSlug = await getDestinationSlug(slug);

  return {
    title: destinationSlug.name,
  };
}

export default async function EventPage({ params }: ParamsPropsSlug) {
  const slug = params.slug;
  const destinationSlug = await getDestinationSlug(slug);

  return (
    <main className="relative">
      <section className="relative pt-[5vh] min-h-[560px] overflow-hidden flex flex-col justify-center items-center">
        <Image
          className="z-0 object-cover blur-sm"
          src={destinationSlug.imageUrl}
          alt={destinationSlug.name}
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />

        <div className="relative z-1 flex flex-col py-10 justify-center items-center gap-5 px-[5%] tabletMinWidth:flex-row desktopMinWidth:gap-10">
          <Image
            className="border"
            src={destinationSlug.imageUrl}
            alt={destinationSlug.name}
            width={500}
            height={500}
          />

          <div className="flex flex-col justify-center items-center gap-2 tabletMinWidth:text-start tabletMinWidth:items-start">
            <div className="text-xs">
              {new Date(destinationSlug.date).toLocaleDateString("eng-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>

            <h1 className="text-2xl font-bold">{destinationSlug.name}</h1>
            <p className="text-sm text-center opacity-50 px-[5%] tabletMinWidth:text-start tabletMinWidth:px-[0]">
              <span className="italic">{destinationSlug.location}</span>
            </p>
            <p className="text-xs bg-black/50 border py-2 px-5">
              Find on the Map
            </p>
          </div>
        </div>
      </section>

      <section
        className=" text-black flex flex-col justify-center items-center text-center py-10 px-[5%] fullHdMinWidth:px-[10%]
      "
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-bold">About Destinations</h2>
          <div className="flex gap-1 flex-row items-center justify-center">
            <h2 className="text-xs font-bold">Location :</h2>
            <p className="text-xs font-bold">{destinationSlug.city}, </p>
            <p className="text-xs font-bold">{destinationSlug.location}</p>
          </div>
          <p className="text-xs text-start tabletMinWidth:text-sm">
            <span>{destinationSlug.description}</span>
          </p>

          <div className="relative flex flex-col gap-5 tabletMinWidth:flex-row-reverse tabletMinWidth:flex-1 tabletMinWidth:items-center">
            <div className="relative">
              <Image
                src={destinationSlug.imageUrl1}
                alt={destinationSlug.name}
                width={500}
                height={500}
              />
            </div>
            <div className="relative">
              <Image
                src={destinationSlug.imageUrl2}
                alt={destinationSlug.name}
                width={500}
                height={500}
              />
            </div>
            <div className="relative">
              <Image
                src={destinationSlug.imageUrl3}
                alt={destinationSlug.name}
                width={500}
                height={500}
              />
            </div>
          </div>
          <p className="text-xs text-start tabletMinWidth:text-sm tabletMinWidth:flex-1">
            {destinationSlug.description2}
          </p>
          <p className="text-xs text-start tabletMinWidth:text-sm tabletMinWidth:flex-1">
            {destinationSlug.description3}
          </p>
        </div>
      </section>
    </main>
  );
}
