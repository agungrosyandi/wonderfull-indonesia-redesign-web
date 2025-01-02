import { Search } from "lucide-react";

export default function SearchFormsIcon() {
  return (
    <div className="flex mt-5 gap-4 flex-row items-center">
      <Search className="w-[2rem] h-[2rem]" />
      <h1 className="border border-white p-3 text-xs">
        Discover our destinations
      </h1>
    </div>
  );
}
