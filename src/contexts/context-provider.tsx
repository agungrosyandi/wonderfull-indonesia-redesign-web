"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, Dispatch, SetStateAction } from "react";

// type ---------------------------------------------------------------------------------

type ContextProviderProps = {
  children: React.ReactNode;
};

type TstateContext = {
  // database type state ----------------------

  // handle logic type state ----------------------

  handleChangeSearchQuery: (newValue: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  // search type state ----------------------

  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;

  // open type state ----------------------

  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  // loading type state ----------------------

  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;

  // error type state ----------------------
  error: string;
  setError: Dispatch<SetStateAction<string>>;

  // success type state ----------------------
  success: string;
  setSuccess: Dispatch<SetStateAction<string>>;
};

// function ---------------------------------------------------------------------------------

export const StateContext = createContext<TstateContext | null>(null);

export default function StateContextProvider({
  children,
}: ContextProviderProps) {
  // usestate logic ------------------------------------------------------------------

  const [searchText, setSearchText] = useState<string>("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // navigation logic ------------------------------------------------------------------

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

  // return callback ------------------------------------------------------------------

  return (
    <StateContext.Provider
      value={{
        searchText,
        handleChangeSearchQuery,
        handleSubmit,
        setSearchText,
        open,
        setOpen,
        loading,
        setLoading,
        error,
        setError,
        success,
        setSuccess,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
