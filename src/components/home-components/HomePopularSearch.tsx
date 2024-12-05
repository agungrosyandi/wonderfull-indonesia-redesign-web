import { roboto } from "@/utils/fonts";
import Link from "next/link";

export default function HomePopularSearch() {
  return (
    <section className={`${roboto.className} flex gap-5 text-base tabletMinWidth:text-lg`}>
      <p>Popular :</p>
      <div className="flex gap-2">
        <Link href={"/events/austin"}>Bali</Link>
        <Link href={"/events/seattle"}>Lombok</Link>
      </div>
    </section>
  );
}
