import H1 from "./eventsCard/H1";
import EventsList from "./eventsCard/EventsList";
import GridContainer from "./eventsCard/GridContainer";
import EventsCityMainContainer from "./eventsCard/EventsCityMainContainer";
import { EventPageParamsProps, ParamsProps } from "@/lib/type";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/utils/utils";
import { z } from "zod";
import Image from "next/image";

import imageBackground from "../../../../public/image/background-home-1.jpg";

export function generateMetadata({ params }: ParamsProps) {
  const city = params.city;
  return {
    title: city === "all" ? "Semua Event" : `Acara di ${city} `,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default function EventsCity({
  params,
  searchParams,
}: EventPageParamsProps) {
  const city = params.city;
  const parsePage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsePage.success) {
    throw new Error("Invalid page number 400");
  }

  return (
    <EventsCityMainContainer>
      <div className="fixed z-[-1] inset-0 w-full h-screen">
        <Image
          src={imageBackground}
          alt="imgpng"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 w-full h-screen bg-black/30"></div>
      </div>
      <H1>
        {city === "all" && "All Destinations"}
        {city !== "all" && `Rincian Event di ${capitalize(city)}`}
      </H1>

      <GridContainer>
        <Suspense key={city + parsePage.data} fallback={<Loading />}>
          <EventsList city={city} page={parsePage.data} />
        </Suspense>
      </GridContainer>
    </EventsCityMainContainer>
  );
}
