import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <section className="relative w-full h-full mt-[10vh] px-[5%] fullHdMinWidth:px-[10%]">
      <h1 className="text-2xl text-black flex items-center justify-center my-5 font-bold" >Buat Konten</h1>
      <div className="flex flex-col w-full min-h-[90vh] items-center">
        <form action="" className="text-black w-full flex flex-col gap-5">
          <Input type="text" placeholder="Masukan Judul Title" />
          <div className="grid w-full max-w-sm items-center gap-5">
            <Label className="text-black/50" htmlFor="picture">
              Upload gambar utama
            </Label>
            <input type="file" />
          </div>
          <Textarea className="h-[20rem]" placeholder="Tulis Deskripsi" />
          <Button>Publish</Button>
        </form>
      </div>
    </section>
  );
}
