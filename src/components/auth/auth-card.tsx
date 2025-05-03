import { AuthCardProps } from "@/utils/type";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Socials from "./socials";
import BackButton from "./back-button";
import ImageCoverAuth from "./image-cover-auth";
import CardAuthParent from "./card-login-container";
import CardContainer from "./card-container";

export default function AuthCard({
  children,
  cardTitle,
  backButtonHref,
  backbuttonLabel,
  showSocials,
}: AuthCardProps) {
  return (
    <Card className="relative w-[90vw] mx-auto my-[20vh] bg-black/30 border-none tabletMinWidth:w-[70vw]">
      <CardContainer>
        <ImageCoverAuth />
        <CardAuthParent>
          <CardHeader>
            <CardTitle className="text-white text-center">
              {cardTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
          {showSocials && (
            <CardFooter>
              <Socials />
            </CardFooter>
          )}
          <CardFooter>
            <BackButton href={backButtonHref} label={backbuttonLabel} />
          </CardFooter>
        </CardAuthParent>
      </CardContainer>
    </Card>
  );
}
