import Image from "next/image";
import image1 from "../../../public/image/new-gambar-baru-2.jpg";
import image2 from "../../../public/image/new-gambar-baru-1.jpg";

export default function Page4() {
  return (
    <section className="relative gap-10 py-20 flex flex-col border-y-2 mx-[5%] fullHdMinWidth:mx-[10%]">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col items-center text-center gap-10 desktopMinWidth:flex-row desktopMinWidth:gap-60 desktopMinWidth:text-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold pb-5">Rich Culture</h1>
            <p className="">
              Woven in song, dance, and ancient craft, Indonesia’s culture is a
              living tapestry of time. From island to island, each rhythm,
              ritual, and story carries the soul of generations — vibrant,
              diverse, and ever enduring. It is not just heritage; it is the
              heartbeat of the nation.
            </p>
          </div>

          <div className="flex-1">
            <Image src={image1} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col-reverse items-center text-center gap-10 desktopMinWidth:flex-row-reverse desktopMinWidth:gap-60 desktopMinWidth:text-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold pb-5">
              What About Visit Us Someday ?
            </h1>
            <p>
              Let the breeze of the tropics whisper your name, and the colors of
              our land paint your dreams. Wander where the earth sings in
              waterfalls, where traditions dance in the streets, and smiles
              greet you like old friends. Indonesia awaits — not just to be
              seen, but to be felt.
            </p>
          </div>

          <div className="flex-1">
            <Image src={image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
