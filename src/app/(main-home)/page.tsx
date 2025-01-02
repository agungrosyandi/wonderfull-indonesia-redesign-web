import DestinationHighlight from "@/app/(main-home)/component/home-components/DestinationHighlight";
import HomeContainer from "@/app/(main-home)/component/home-components/HomeContainer";
import HomeDescription from "@/app/(main-home)/component/home-components/HomeDescription";
import HomeTitle from "@/app/(main-home)/component/home-components/HomeTitle";
import ContentContainer from "@/app/(main-home)/component/home-components/ContentContainer";
import AboutIndonesia from "@/app/(main-home)/component/home-components/AboutIndonesia";
import TravelGuildeCarousei from "@/app/(main-home)/component/home-components/TravelGuildeCarousei";
import VideoBackground from "./component/home-components/VideoBackground";
import { SearchForm } from "./component/home-components/search-form";

export default function Home() {
  return (
    <main className="relative gap-20 flex flex-col justify-center items-center w-full h-full desktopMinWidth:gap-1">
      <HomeContainer>
        <HomeTitle>
          Wonderful <span className="text-[#ff1f0f]">Indonesia</span>
        </HomeTitle>
        <HomeDescription>Visit our beautiful Destinations</HomeDescription>
        <SearchForm />
        <AboutIndonesia />
        <VideoBackground />
      </HomeContainer>
      <ContentContainer>
        <DestinationHighlight />
      </ContentContainer>
      <ContentContainer>
        <TravelGuildeCarousei />
      </ContentContainer>
    </main>
  );
}
