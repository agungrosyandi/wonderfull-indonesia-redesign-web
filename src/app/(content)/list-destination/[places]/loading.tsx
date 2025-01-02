import Image from "next/image";

import spinnerLoading from "../../../../../public/svg/spinner.svg";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const array = new Array(6).fill(null);

  return (
    <>
      <div className="relative w-full h-full col-span-6">
        <div className="flex flex-row justify-center items-center gap-2">
          <Image src={spinnerLoading} alt="loading" width={50} height={50} />
          <p className="text-xl"> Fetch from server, Wait !! ....</p>
        </div>
      </div>

      {array.map((_, i) => (
        <section
          key={i}
          className="relative overflow-hidden col-span-6 bg-none tabletMinWidth:col-span-3 desktopMinWidth:col-span-2"
        >
          <>
            <Skeleton className="h-[20rem] w-[45rem] rounded-xl " />

            <div className="space-y-2 mt-5">
              <Skeleton className="h-4 w-[20rem]" />
              <Skeleton className="h-4 w-[20rem]" />
              <Skeleton className="h-4 w-[20rem]" />
            </div>
          </>
        </section>
      ))}
    </>
  );
}
