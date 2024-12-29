"use client";

import { useSearch } from "@/hooks/useSearch";

export default function SearchForm() {
  const { allDatabase, handleSubmit, handleChangeSearchQuery, searchText } =
    useSearch();

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-[100%] h-16 rounded-lg bg-black/50 px-16 outline-none ring-[#3b1212] transition focus:ring-2 focus:bg-black/50 tabletMinWidth:w-full"
        placeholder="Explore Destinations"
        type="search"
        spellCheck={false}
        value={searchText}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
      />
    </form>
  );
}
