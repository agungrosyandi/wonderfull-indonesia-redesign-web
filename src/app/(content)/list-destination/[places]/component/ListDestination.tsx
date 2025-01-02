import { getDestination } from "@/actions/actions";
import DestinationsMap from "./DestinationsMap";
import { PaginationComponent } from "./PaginationControl2";

type TypeDestinationListProps = {
  places: string;
  page?: number;
};

export default async function DestinationList({
  places,
  page = 1,
}: TypeDestinationListProps) {
  const { destinations } = await getDestination(places, page);

  return (
    <>
      <DestinationsMap destinations={destinations} />
      <PaginationComponent pageCount={2} />
    </>
  );
}
