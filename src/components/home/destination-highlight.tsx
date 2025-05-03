import Link from "next/link";
import { Button } from "../ui/button";
import { Image2, Image3 } from "./image-destinations";

export default function DestinationHighlight() {
  return (
    <div className="relative mx-[5%] gap-10 flex flex-col text-center fullHdMinWidth:mx-[10%] ">
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <h1 className="font-bold text-2xl">Our Nature is Our Beauty</h1>
        <p>
          In every leaf, wave, and mountain, Indonesia tells a story — a tale of
          harmony between earth and spirit. With emerald forests, sapphire seas,
          and golden shores, the land breathes life into its people, just as its
          people protect the soul of the land. Here, nature is not just a
          backdrop, but the very essence of beauty, culture, and identity.
        </p>
        <Button
          className="text-black font-medium italic text-sm"
          variant={"link"}
        >
          <Link href={"/list-destination/all"}>Explore here</Link>
        </Button>
      </div>

      <div className="relative grid grid-cols-6 gap-5 desktopMinWidth:gap-1">
        {destinationList.map((destination) => (
          <DestinationProps key={destination.id} image={destination.image} />
        ))}
      </div>
    </div>
  );
}

// map highlight -----------------------------------------------

type ParamsPropsDestination = {
  key: number;
  image: JSX.Element;
};

const destinationList = [
  {
    id: 1,
    image: <Image2 />,
  },
  {
    id: 2,
    image: <Image3 />,
  },
];

const DestinationProps = ({ image }: ParamsPropsDestination) => {
  return (
    <div className="relative col-span-6 grid-flow desktopMinWidth:col-span-3">
      <div className="relative w-full">
        {image}
        <div className="absolute inset-0 w-full h-full bg-black/20"></div>
      </div>
    </div>
  );
};
