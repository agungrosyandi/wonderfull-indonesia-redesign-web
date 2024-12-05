import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string, page = 1) {
  // connect data with API -------------------------------------------------

  //   const response = await fetch(
  //     `https://bytegrad.com/course-assets/projects/evento/api/events/${city}`
  //   );

  //   const events: EventoEvent[] = await response.json();

  // connect data with database -------------------------------------------------

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;

  if (city === 'all') {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return { events, totalCount };
}

export async function getEvent(slug: string) {
  // connect data with API -------------------------------------------------

  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const event: EventoEvent = await response.json();

  // connect data with database -------------------------------------------------

  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}
