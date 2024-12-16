import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventsCard({ event }: EventCardProps) {
  return (
    <section className="relative shadow-2xl col-span-6 bg-none tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
      <Image
        src={`${event.imageUrl}`}
        alt={event.name}
        style={{ objectFit: "cover" }}
        width={500}
        height={500}
      />

      <div className="relative text-white gap-3 flex flex-col justify-center items-center text-center p-5 tabletMinWidth:p-10">
        <h4 className="text-xl font-bold">{event.name}</h4>
        <p className="text-xs opacity-50">{event.location}</p>
        <p className="text-xs">{event.description.slice(0, 150)}....</p>
        <Button variant={"white"}>
          <Link href={`/event/${event.slug}`}> <p className="text-black">Selengkapnya</p> </Link>
        </Button>
        <div className="absolute z-[-1] inset-0 w-full h-full blur-sm bg-black/50"></div>
      </div>

      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <p className="font-bold text-xl">
          {new Date(event.date).toLocaleDateString("eng-US", {
            day: "2-digit",
          })}
        </p>
        <p className="text-xs opacity-50 uppercase">
          {new Date(event.date).toLocaleDateString("eng-US", {
            month: "short",
          })}
        </p>
      </div>
    </section>
  );
}
