export type ChildrenProps = {
  children: React.ReactNode;
};

export type PaginationControlProps = {
  places: string;
  page: number;
  totalCount: number
};

export type ParamsProps = {
  params: {
    places: string;
  };
};

export type PlacesPageParamsProps = ParamsProps & {
  searchParams: { [key: string]: string | string | string[] | undefined };
};

export type ParamsPropsSlug = {
  params: {
    slug: string;
  };
};
