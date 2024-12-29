import { StateContext } from "@/contexts/context-provider";
import { useContext } from "react";

export function useSearch() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("UseStateContext must be used");
  }

  return context;
}
