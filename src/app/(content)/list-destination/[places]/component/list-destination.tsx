import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KontenDetailsWithImagesTags } from "@/lib/infer-types";
import { roboto } from "@/utils/font";
import placehoderImage from "../../../../../../public/image/landscape-placeholder-svgrepo-com.svg";

type KontenType = {
  kontens: KontenDetailsWithImagesTags[];
};

export default async function DestinationList({ kontens }: KontenType) {
  return (
    <main className="grid relative gap-5 z-[10] grid-cols-1 tabletMinWidth:gap-10 tabletMinWidth:grid-cols-2 desktopMinWidth:grid-cols-3">
      {kontens.map((konten) => {
        const imageUrl =
          konten.kontenImages.length > 0
            ? konten.kontenImages[0].url
            : placehoderImage;

        return (
          <div key={konten.id}>
            {/* image  ----------------------------- */}

            <Image
              className="rounded-md w-full h-[50%]"
              src={imageUrl}
              width={500}
              height={500}
              alt={konten.title}
              priority={false}
              style={{ objectFit: "cover" }}
            />

            {/* title  ----------------------------- */}

            <div className="relative bg-white shadow-md text-black gap-5 flex flex-col justify-center items-center text-center p-5 tabletMinWidth:p-10">
              <h4 className="text-xl font-bold fullHdMinWidth:text-2xl">
                {konten.title}
              </h4>

              {/* description  ----------------------------- */}

              <div
                className={`${roboto.className} text-xs text-center tabletMinWidth:text-sm`}
                dangerouslySetInnerHTML={{
                  __html: konten.description.slice(0, 100),
                }}
              />

              {/* button  ----------------------------- */}

              <Button variant={"white"}>
                <Link
                  href={`/destination/${konten.id}?kontenID=${konten.id}&title=${konten.title}`}
                >
                  Selengkapnya
                </Link>
              </Button>

              <p className="text-xs">
                Create by:
                <span className="font-bold pl-2">{konten.user.name}</span>
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
