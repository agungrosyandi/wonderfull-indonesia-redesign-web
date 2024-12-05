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

export default function DestinationHighlight() {
  return (
    <div className="relative bg-white px-[5%] gap-10 flex flex-col text-center desktopMinWidth:px-[0%]">
      <H1Title>Favorite Destinations</H1Title>

      <div className="relative grid grid-cols-6 gap-5 desktopMinWidth:gap-1">
        {destinationList.map((destination) => (
          <DestinationProps
            key={destination.id}
            image={destination.image}
            title={destination.title}
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
};

const destinationList = [
  {
    id: 1,
    image: <Image1 />,
    title: "Bunaken",
  },
  {
    id: 2,
    image: <Image2 />,
    title: "Borobudur",
  },
  {
    id: 3,
    image: <Image3 />,
    title: "Bali Island",
  },
  {
    id: 4,
    image: <Image4 />,
    title: "Mount Bromo",
  },
  {
    id: 5,
    image: <Image5 />,
    title: "Jakarta Capital City",
  },
  {
    id: 6,
    image: <Image6 />,
    title: "Labuan Bajo",
  },
];

const DestinationProps = ({ title, image }: ParamsPropsDestination) => {
  return (
    <div className="relative col-span-6 grid-flow tabletMinWidth:col-span-3 desktopMinWidth:col-span-2  ">
      <div className="relative w-full">
        {image}
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <h1 className={`${roboto.className} text-lg tabletMinWidth:text-xl`}>{title}</h1>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black/20"></div>
      </div>
    </div>
  );
};
