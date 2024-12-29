import { getDestination } from "@/actions/actions";
import PaginationControl from "./PaginationControl";
import DestinationsMap from "./DestinationsMap";

type TypeDestinationListProps = {
  places: string;
  page?: number;
};

export default async function DestinationList({
  places,
  page = 1,
}: TypeDestinationListProps) {
  const { destinations, totalCount } = await getDestination(places, page);

  return (
    <>
      <DestinationsMap destinations={destinations} />
      <PaginationControl totalCount={totalCount} places={places} page={page} />
    </>
  );
}
