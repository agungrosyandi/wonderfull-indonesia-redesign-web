"use client";

import { useSearch } from "@/hooks/useSearch";
import EventsCard from "./EventsCard";
import { KategoriDestination } from "@prisma/client";

type TypeDestinationListData = {
  destinations: KategoriDestination[];
};

export default function DestinationsMap({
  destinations,
}: TypeDestinationListData) {
  const { searchText } = useSearch();

  const filterDestinationList = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchText)
  );

  return (
    <>
      {filterDestinationList.map((destination) => (
        <EventsCard key={destination.id} destination={destination} />
      ))}
    </>
  );
}
