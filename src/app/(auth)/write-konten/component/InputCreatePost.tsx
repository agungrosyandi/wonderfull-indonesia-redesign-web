"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { createPost } from "@/actions/actions";
import ButtonFormPublish from "./ButtonFormPublish";
import { useRef } from "react";
import {
  inputPlace,
  textAreaDescription,
  uploadImageInput,
} from "@/utils/inputMaps";

export default function InputCreatePost() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();

        const error = await createPost(formData);

        if (error) {
          toast.warning(error.message);
          return;
        }

        if (!error) {
          toast.success("post publish");
          return;
        }
      }}
      className="text-black w-full flex flex-col py-10 min-h-[90vh] gap-5"
    >
      {/* title place input  --------------------------------------------------------- */}

      <>
        {inputPlace.map((textinput) => (
          <Input
            className="placeholder:text-black/80"
            key={textinput.id}
            id={textinput.idFetch}
            name={textinput.name}
            placeholder={textinput.placeholder}
            type="text"
            required
          />
        ))}
      </>

      {/* upload image input  --------------------------------------------------------- */}

      <>
        {uploadImageInput.map((image) => (
          <div
            key={image.id}
            className="grid w-full max-w-sm items-center gap-5"
          >
            <Label className="text-black/50" htmlFor="picture">
              {image.label}
            </Label>
            <input
              className="placeholder:text-red-600"
              placeholder={image.placeholder}
              id={image.idImage}
              name={image.name}
              type="text"
            />
          </div>
        ))}
      </>

      {/* description content input  --------------------------------------------------------- */}

      <>
        {textAreaDescription.map((description) => (
          <Textarea
            className="h-[10rem] placeholder:text-black/80"
            key={description.id}
            id={description.idDescription}
            name={description.name}
            placeholder={description.placeholder}
            required
          />
        ))}
      </>

      {/* button content input  --------------------------------------------------------- */}

      <ButtonFormPublish />
    </form>
  );
}
