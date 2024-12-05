import H1 from './eventsCard/H1';
import EventsList from './eventsCard/EventsList';
import GridContainer from './eventsCard/GridContainer';
import EventsCityMainContainer from './eventsCard/EventsCityMainContainer';
import { EventPageParamsProps, ParamsProps } from '@/lib/type';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalize } from '@/utils/utils';
import { z } from 'zod';

export function generateMetadata({ params }: ParamsProps) {
  const city = params.city;
  return {
    title: city === 'all' ? 'Semua Event' : `Acara di ${city} `,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default function EventsCity({
  params,
  searchParams,
}: EventPageParamsProps) {
  const city = params.city;
  const parsePage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsePage.success) {
    throw new Error('Invalid page number 400');
  }

  return (
    <EventsCityMainContainer>
      <H1>
        {city === 'all' && 'Semua Event'}
        {city !== 'all' && `Rincian Event di ${capitalize(city)}`}
      </H1>

      <GridContainer>
        <Suspense key={city + parsePage.data} fallback={<Loading />}>
          <EventsList city={city} page={parsePage.data} />
        </Suspense>
      </GridContainer>
    </EventsCityMainContainer>
  );
}
