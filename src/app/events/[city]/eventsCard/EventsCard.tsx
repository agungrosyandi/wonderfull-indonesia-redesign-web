import { EventoEvent } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

type EventCardProps = {
  event: EventoEvent;
};

export default function EventsCard({ event }: EventCardProps) {
  return (
    <section className="relative shadow-xl col-span-6 bg-white/10 tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
      <Image src={event.imageUrl} alt={event.name} width={500} height={500} />
      <div className="gap-3 flex flex-col justify-center items-center p-5">
        <h4 className="text-xl font-bold">{event.name}</h4>
        <p className="text-xs">{event.organizerName}</p>
        <p className="text-xs opacity-50">{event.location}</p>

        <Link href={`/event/${event.slug}`}>
          <p className="text-xs text-white bg-[#a4f839]/50 p-2">Selengkapnya</p>
        </Link>
      </div>

      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <p className="font-bold text-xl">
          {new Date(event.date).toLocaleDateString('eng-US', {
            day: '2-digit',
          })}
        </p>
        <p className="text-xs opacity-50 uppercase">
          {new Date(event.date).toLocaleDateString('eng-US', {
            month: 'short',
          })}
        </p>
      </div>
    </section>
  );
}
