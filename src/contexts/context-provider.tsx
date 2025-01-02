"use client";

import { KategoriDestination } from "@prisma/client";
import { useRouter } from "next/navigation";
import { createContext, useState, Dispatch, SetStateAction } from "react";

// type ---------------------------------------------------------------------------------

type ContextProviderProps = {
  totalCount: number;
  children: React.ReactNode;
  allDatabase: KategoriDestination[];
  destinations: KategoriDestination[];
};

type TstateContext = {
  totalCount: number;
  searchText: string;
  handleChangeSearchQuery: (newValue: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  destinations: KategoriDestination[];
  allDatabase: KategoriDestination[];
  setSearchText: Dispatch<SetStateAction<string>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
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

  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
        setSearchText,
        open,
        setOpen,
        loading,
        setLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
