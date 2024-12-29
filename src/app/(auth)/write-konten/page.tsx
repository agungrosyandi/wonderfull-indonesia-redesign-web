import ImageBackgroundCreatePost from "./component/ImageBackgroundCreatePost";
import H1CreatePost from "./component/H1CreatePost";
import InputCreatePost from "./component/InputCreatePost";
import { auth } from "@/auth";
import RedirectLoginMenu from "../component/RedirectLoginMenu";

export default async function FormKonten() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  return user ? (
    <>
      <ImageBackgroundCreatePost />
      <section className="relative w-full h-full mt-[10vh] py-10 px-[5%] fullHdMinWidth:px-[10%] ">
        <div className="relative w-[100%] flex flex-col desktopMinWidth:w-[50%] desktopMinWidth:justify-center">
          <H1CreatePost>Create Content</H1CreatePost>
          <InputCreatePost />
        </div>
      </section>
    </>
  ) : (
    <>
      <RedirectLoginMenu />
    </>
  );
}
