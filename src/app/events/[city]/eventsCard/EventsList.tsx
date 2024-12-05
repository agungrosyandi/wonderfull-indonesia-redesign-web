import EventsCard from './EventsCard';
import { getEvents } from '@/utils/utils';
import PaginationControl from './PaginationControl';

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventListProps) {
  const { events } = await getEvents(city, page);

  return (
    <>
      {events.map((event) => (
        <EventsCard key={event.id} event={event} />
      ))}
      <PaginationControl city={city} page={page} />
    </>
  );
}
