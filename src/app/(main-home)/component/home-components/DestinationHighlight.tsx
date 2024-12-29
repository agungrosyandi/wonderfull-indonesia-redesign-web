import { roboto } from "@/utils/fonts";
import H1Title from "./H1Title";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
} from "./ImageDestinations";
import Link from "next/link";

export default function DestinationHighlight() {
  return (
    <div className="relative bg-white px-[5%] gap-10 flex flex-col text-center desktopMinWidth:px-0">
      <H1Title>Favorite Destinations</H1Title>

      <div className="relative grid grid-cols-6 gap-5 desktopMinWidth:gap-1">
        {destinationList.map((destination) => (
          <DestinationProps
            key={destination.id}
            image={destination.image}
            title={destination.title}
            path={destination.path}
          />
        ))}
      </div>
    </div>
  );
}

type ParamsPropsDestination = {
  key: number;
  image: JSX.Element;
  title: string;
  path: string;
};

const destinationList = [
  {
    id: 1,
    image: <Image1 />,
    title: "Bunaken",
    path: "/destination/bunaken#",
  },
  {
    id: 2,
    image: <Image2 />,
    title: "Borobudur",
    path: "/destination/borobudur-temple",
  },
  {
    id: 3,
    image: <Image3 />,
    title: "Tegallang Rice Field",
    path: "/destination/tegallang-rice-field",
  },
  {
    id: 4,
    image: <Image4 />,
    title: "Mount Bromo",
    path: "/destination/mount-bromo",
  },
  {
    id: 5,
    image: <Image5 />,
    title: "Jakarta Capital City",
    path: "/destination/jakarta",
  },
  {
    id: 6,
    image: <Image6 />,
    title: "Labuan Bajo",
    path: "/destination/labuan-bajo",
  },
];

const DestinationProps = ({ title, image, path }: ParamsPropsDestination) => {
  return (
    <div className="relative col-span-6 grid-flow tabletMinWidth:col-span-3 desktopMinWidth:col-span-2  ">
      <Link href={path}>
        <div className="relative w-full">
          {image}
          <div className="absolute inset-0 z-20 flex justify-center items-center">
            <h1
              className={`${roboto.className} text-sm tabletMinWidth:text-base`}
            >
              {title}
            </h1>
          </div>
          <div className="absolute inset-0 w-full h-full bg-black/20"></div>
        </div>
      </Link>
    </div>
  );
};
