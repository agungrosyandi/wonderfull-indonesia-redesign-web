import DestinationHighlight from "@/components/home-components/DestinationHighlight";
import TravelGuide from "@/components/home-components/TravelGuide";
import HomeContainer from "@/components/home-components/HomeContainer";
import HomeDescription from "@/components/home-components/HomeDescription";
import HomeTitle from "@/components/home-components/HomeTitle";
import SearchForm from "@/components/home-components/search-form";
import VideoBackground from "@/components/VideoBackground";
import ContentContainer from "@/components/home-components/ContentContainer";

export default function Home() {
  return (
    <main className="relative gap-20 flex flex-col justify-center items-center w-full h-full desktopMinWidth:gap-1">
      <HomeContainer>
        <HomeTitle>
          Wonderful <span className="text-[#ff1f0f]">Indonesia</span>
        </HomeTitle>
        <HomeDescription>Visit our beautiful Destinations</HomeDescription>
        <SearchForm />
        <VideoBackground />
      </HomeContainer>

      <ContentContainer>
        <DestinationHighlight />
      </ContentContainer>

      <ContentContainer>
        <TravelGuide />
      </ContentContainer>
    </main>
  );
}
