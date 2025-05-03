import DestinationHighlight from "@/components/home/destination-highlight";
import HomeContainer from "@/components/home/home-container";
import HomeDescription from "@/components/home/home-descriptions";
import HomeTitle from "@/components/home/home-title";
import ContentContainer from "@/components/home/content-container";
import AboutIndonesia from "@/components/home/about-indonesia";
import TravelGuildeCarousei from "@/components/home/travel-guide-carousei";
import VideoBackground from "../components/home/video-background";
import Page4 from "@/components/home/page-4";

export default function Home() {
  return (
    <main className="relative gap-20 flex flex-col justify-center items-center w-full h-full desktopMinWidth:gap-20">
      {/* page 1 main home page -------------------------- */}

      <HomeContainer>
        <HomeTitle>
          Wonderful <span className="text-[#ff1f0f]">Indonesia</span>
          <span className="text-xs pl-5">Redesign</span>
        </HomeTitle>
        <HomeDescription>Visit our beautiful Destinations</HomeDescription>
        {/* <SearchForm /> */}
        <AboutIndonesia />
        <VideoBackground />
      </HomeContainer>

      {/* page 2 highlight -------------------------- */}

      <ContentContainer>
        <DestinationHighlight />
      </ContentContainer>

      {/* page 3  -------------------------- */}

      <ContentContainer>
        <Page4 />
      </ContentContainer>

      {/* page 4 guide  -------------------------- */}

      <ContentContainer>
        <TravelGuildeCarousei />
      </ContentContainer>
    </main>
  );
}
