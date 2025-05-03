import ZeroDataLottie from "@/components/lottie-file-motion/zero-data-lottie";

export default function ZeroData() {
  return (
    <section className="relative w-full h-[70vh]">
      <div className="w-full h-full flex-col text-center  justify-center items-center">
        <h1 className="pb-20 text-xs font-bold">Waiting Data, Create your content</h1>
        <ZeroDataLottie />
      </div>
    </section>
  );
}
