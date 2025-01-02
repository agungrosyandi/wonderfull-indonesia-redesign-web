import H1 from "./component/H1";
import GridContainer from "./component/GridContainer";
import ListDestinationMainContainer from "./component/ListDestinationMainContainer";
import { ParamsProps, PlacesPageParamsProps } from "@/utils/type";
import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";
import ImageBackgroundListDestination from "./component/ImageBackgroundListDestination";

import DestinationList from "./component/ListDestination";

export function generateMetadata({ params }: ParamsProps) {
  const places = params.places;
  return {
    title: places === "all" ? "All Destination" : `Searching in ${places} `,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function ListDestination({
  params,
  searchParams,
}: PlacesPageParamsProps) {
  const places = params.places;
  const parsePage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsePage.success) {
    throw new Error("Invalid page number 400");
  }

  return (
    <ListDestinationMainContainer>
      <ImageBackgroundListDestination />
      <H1>
        {places === "all" && "All Destination"}
        {places !== "all" && `The result destination in ${places}`}
      </H1>

      <GridContainer>
        <Suspense key={places + parsePage.data} fallback={<Loading />}>
          <DestinationList places={places} page={parsePage.data} />
        </Suspense>
      </GridContainer>
    </ListDestinationMainContainer>
  );
}
