export type ChildrenProps = {
  children: React.ReactNode;
};

export type ParamsProps = {
  params: {
    city: string;
  };
};

export type EventPageParamsProps = ParamsProps & {
  searchParams: { [key: string]: string | string | string[] | undefined };
};

export type ParamsPropsSlug = {
  params: {
    slug: string;
  };
};
