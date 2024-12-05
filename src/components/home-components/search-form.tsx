'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
  const [searchText, setSearchText] = useState('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} action="w-full">
      <input
        className="w-[80%] h-16 rounded-lg bg-black/50 px-16 outline-none ring-[#ffffff] transition focus:ring-2 focus:bg-black/50 tabletMinWidth:w-full"
        placeholder="Explore Destinations"
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
