import { roboto } from "@/utils/fonts";
import H1Title from "./H1Title";
import { TravelGuideImage1, TravelGuideImage2 } from "./ImageDestinations";
import Link from "next/link";
import Image from "next/image";
import bgTravelGuide from "../../../public/image/background-home-2.jpg";

export default function DestinationHighlight() {
  return (
    <div className="relative px-[5%] gap-10 flex flex-col text-center py-20 fullHdMinWidth:px-[10%]">
      <H1Title>
        <span className="text-white">Travel Guide</span>
      </H1Title>
      <div className="relative grid grid-cols-4 gap-10">
        {destinationList.map((destination) => (
          <DestinationProps
            key={destination.id}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            button={destination.button}
            link={destination.link}
          />
        ))}
      </div>

      <div className=" z-[-1] absolute inset-0 w-full h-full object-cover">
        <Image src={bgTravelGuide} fill alt="" />
        <div className="absolute inset-0 w-full h-full bg-black/30"></div>
      </div>
    </div>
  );
}

type ParamsPropsDestination = {
  key: number;
  image: JSX.Element;
  title: string;
  description: string;
  button: string;
  link: string;
};

const destinationList = [
  {
    id: 1,
    image: <TravelGuideImage1 />,
    title: "E-Visa",
    description:
      "Make sure to learn about all the immigration requirements that should be fulfilled before visiting Indonesia, including e-passport and e-visa.",
    button: "More detail",
    link: "/e-visa",
  },

  {
    id: 2,
    image: <TravelGuideImage2 />,
    title: "General Information",
    description:
      "Find everything you need to know about how to get here, what regulations that should be noted, and many other things vital in arranging your travel plan",
    button: "More detail",
    link: "/",
  },
];

const DestinationProps = ({
  title,
  image,
  description,
  button,
  link,
}: ParamsPropsDestination) => {
  return (
    <div className="relative col-span-4 grid-flow tabletMinWidth:col-span-4">
      <div className="flex flex-col shadow-xl desktopMinWidth:flex-row">
        <div className="relative flex-1 w-full shadow-xl">{image}</div>
        <div className="flex flex-1 flex-col gap-5 py-10 px-5 backdrop-blur-sm bg-white/30 desktopMinWidth:justify-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <p
            className={`${roboto.className} text-base tabletMinWidth:text-lg`}
          >
            {description}
          </p>
          <div className="flex justify-center items-center text-center">
            <Link href={link}>
              <p className="text-sm border p-5 tabletMinWidth:text-base">
                {button}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
