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

      {filterDestinationList.length === 0 && (
        <div className="relative w-full h-[50vh] col-span-6 ">
          <p> Not result found, try another keyword !!</p>
        </div>
      )}
    </>
  );
}
