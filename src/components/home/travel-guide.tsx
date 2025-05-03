import { roboto } from "@/utils/fonts";
import H1Title from "./h1-title";
import { TravelGuideImage1, TravelGuideImage2 } from "./image-destinations";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function DestinationHighlight() {
  return (
    <div className="relative bg-white border-t-8  px-[5%] gap-10 flex flex-col text-center py-20 desktopMinWidth:p-0 desktopMinWidth:border-none">
      <H1Title>
        <span className="text-black">Travel Guide</span>
      </H1Title>
      <div className="relative grid grid-cols-4 gap-10 desktopMinWidth:gap-1">
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
        <div className="flex flex-1 flex-col gap-5 p-10 bg-[#2a2424] desktopMinWidth:justify-center desktopMinWidth:px-32">
          <h1 className="text-xl font-bold tabletMinWidth:text-3xl">{title}</h1>
          <p className={`${roboto.className} text-sm tabletMinWidth:text-base`}>
            {description}
          </p>

          <Link href={link}>
            <Button variant={"link"}>
              <FaArrowRight /> {button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
