import Link from "next/link";

export function ButtonExploreDestination() {
  return (
    <Link href={"/list-destination/all"}>
      <p className=" bg-[#131313]/70 rounded-full px-10 py-5 text-xs tabletMinWidth:text-sm">
        Discover More
      </p>
    </Link>
  );
}
