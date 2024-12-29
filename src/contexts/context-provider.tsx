"use client";

import { KategoriDestination } from "@prisma/client";
import { useRouter } from "next/navigation";

import { createContext, useState } from "react";

// type ---------------------------------------------------------------------------------

type TstateContext = {
  searchText: string;
  handleChangeSearchQuery: (newValue: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  destinations: KategoriDestination[];
  allDatabase: KategoriDestination[];
  totalCount: number;
};

type ContextProviderProps = {
  children: React.ReactNode;
  allDatabase: KategoriDestination[];
  destinations: KategoriDestination[];
  totalCount: number;
};

// function ---------------------------------------------------------------------------------

export const StateContext = createContext<TstateContext | null>(null);

export default function StateContextProvider({
  allDatabase: allDatabase,
  destinations: destinations,
  totalCount: totalCount,
  children,
}: ContextProviderProps) {
  // usestate logic ------------------------------------------------------------------

  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  // javascript logic ------------------------------------------------------------------

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    if (searchText) {
      router.push(`/list-destination/${searchText}`);
      return;
    }
  };

  const handleChangeSearchQuery = (newValue: string) => {
    setSearchText(newValue);
  };

  // const handleFilterMap = async ({
  //   places,
  //   page = 1,
  // }: TypeDestinationListProps) => {
  //   const { destinations } = await getDestination(places, page);

  //   return destinations;
  // };

  // return callback ------------------------------------------------------------------

  return (
    <StateContext.Provider
      value={{
        searchText,
        handleChangeSearchQuery,
        handleSubmit,
        destinations,
        totalCount,
        allDatabase,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
