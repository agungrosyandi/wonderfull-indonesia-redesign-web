import { KategoriDestination } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type EventCardProps = {
  destination: KategoriDestination;
};

export default function EventsCard({ destination }: EventCardProps) {
  return (
    <section className="relative shadow-2xl col-span-6 bg-none tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
      <Image
        src={`${destination.imageUrl}`}
        alt={destination.name}
        style={{ objectFit: "cover" }}
        width={500}
        height={500}
      />

      <div className="relative text-white gap-3 flex flex-col justify-center items-center text-center p-5 tabletMinWidth:p-10">
        <h4 className="text-xl font-bold">{destination.name}</h4>
        <p className="text-xs">{destination.location}</p>
        <p className="text-xs">{destination.description.slice(0, 150)}....</p>
        <Button variant={"white"}>
          <Link href={`/destination/${destination.slug}`}>Selengkapnya</Link>
        </Button>
        <div className="absolute z-[-1] inset-0 w-full h-full blur-sm bg-black/50"></div>
      </div>

      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <p className="font-bold text-xl">
          {new Date(destination.date).toLocaleDateString("eng-US", {
            day: "2-digit",
          })}
        </p>
        <p className="text-xs opacity-50 uppercase">
          {new Date(destination.date).toLocaleDateString("eng-US", {
            month: "short",
          })}
        </p>
      </div>
    </section>
  );
}
