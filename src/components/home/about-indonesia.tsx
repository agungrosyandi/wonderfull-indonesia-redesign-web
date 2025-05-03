import { ADLam, roboto } from "@/utils/font";

export default function AboutIndonesia() {
  return (
    <div className="relative hidden desktopMinWidth:gap-32 desktopMinWidth:top-[5rem] desktopMinWidth:flex desktopMinWidth:flex-row desktopMinWidth:justify-around desktopMinWidth:items-center desktopMinWidth:text-start fullHdMinWidth:top-[8rem]">
      <h1 className={`${ADLam.className} flex-1 text-3xl text-white`}>About Us</h1>
      <p
        className={`${roboto.className} flex-1 text-white text-xs tabletMinWidth:text-sm`}
      >
        The history of Indonesia can be marked as the dawn of mankind since it
        is where the remains of the early man were unearthed. During the ancient
        age of kingdoms and empires, Indonesia saw the rise of the great empires
        that ruled over almost all of South-East Asia and regarded to play a key
        role in the history of the region. After gaining independence from
        foreign colonization and the wave of both World Wars, Indonesia emerged
        as one united country and continued to thrive amongst the top nations of
        the world to this very day.
      </p>
    </div>
  );
}
