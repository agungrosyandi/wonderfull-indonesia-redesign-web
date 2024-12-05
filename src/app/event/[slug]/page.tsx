import { ParamsPropsSlug } from '@/lib/type';
import { getEvent } from '@/utils/utils';

import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: ParamsPropsSlug): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

export default async function EventPage({ params }: ParamsPropsSlug) {
  const slug = params.slug;
  const event = await getEvent(slug);

  return (
    <main className="">
      <section className="relative min-h-[360px] overflow-hidden flex flex-col justify-center items-center">
        <Image
          className="z-0 object-cover blur-xl"
          src={event.imageUrl}
          alt={event.name}
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />

        <div className="relative z-1 flex flex-col py-10 justify-center items-center gap-5 tabletMinWidth:flex-row desktopMinWidth:gap-10">
          <Image
            className="border"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={300}
          />

          <div className="flex flex-col justify-center items-center gap-2 tabletMinWidth:text-start tabletMinWidth:items-start">
            <div className="text-xs">
              {new Date(event.date).toLocaleDateString('eng-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </div>

            <h1 className="text-2xl font-bold">{event.name}</h1>
            <p className="text-sm opacity-50">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <p className="text-xs bg-black/50 border py-2 px-5">Get Ticket</p>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col justify-center items-center text-center gap-2 py-5
      "
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">About this Event</h2>
          <p className="text-xs px-3 tabletMinWidth:text-sm">
            {event.description}
          </p>
          <h2 className="text-xs font-bold">Location</h2>
          <p className="text-xs font-bold">{event.location}</p>
        </div>
      </section>
    </main>
  );
}
