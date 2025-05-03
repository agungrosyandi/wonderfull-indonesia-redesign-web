"use client";

import { useSearch } from "@/hooks/useSearch";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchFormInput() {
  const { allDatabase, searchText, handleChangeSearchQuery } = useSearch();
  const router = useRouter();

  const filterDestinationList = allDatabase.filter(
    (destination) =>
      destination.city.toLowerCase().includes(searchText) ||
      destination.name.toLowerCase().includes(searchText)
  );

  return (
    <>
      <form className="relative" action="">
        <input
          className="flex-1 w-full text-black border rounded-md p-5"
          value={searchText.toLowerCase()}
          type="search"
          onChange={(e) => {
            handleChangeSearchQuery(e.target.value);
          }}
          placeholder={"search your destinations"}
        />
      </form>

      <div className="w-full h-[65%] text-black overflow-y-scroll border border-b-2">
        <div>
          {!searchText ? (
            <p className="text-green-600 text-xs tabletMinWidth:text-sm">
              Find your destination, Just Write keyword on above !
            </p>
          ) : filterDestinationList.length ? (
            filterDestinationList?.map((destination) => (
              <Link
                href={`/destination/${destination.slug}`}
                key={destination.id}
              >
                <section className="relative">
                  <div className="flex flex-1 gap-5 flex-row mt-5">
                    <Image
                      src={`${destination.imageUrl}`}
                      alt={destination.name}
                      style={{ objectFit: "cover" }}
                      width={150}
                      height={150}
                    />
                    <div className="flex flex-1 gap-2 flex-col justify-start text-start">
                      <h1 className="">{destination.name}</h1>
                      <p className="text-xs pr-[2rem]">{destination.city}</p>
                      <p className="text-xs pr-[2rem]">
                        {destination.description.slice(0, 100)} ....
                      </p>
                    </div>
                  </div>
                </section>
              </Link>
            ))
          ) : (
            <div>
              {searchText ? (
                <p>
                  Not match with the keyword
                  <span className="underline text-red-600"> {searchText}</span>.
                  Please try something
                </p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
