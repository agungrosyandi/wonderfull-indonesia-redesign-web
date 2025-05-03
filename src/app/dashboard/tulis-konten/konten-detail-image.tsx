"use client";

import { UploadDropzone } from "@/app/api/uploadthing/upload";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useFieldArray, useFormContext } from "react-hook-form";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Reorder } from "motion/react";
import { useState } from "react";
import { cn } from "@/utils/utils";
import { zKontenSchema } from "../../../../schema/konten-schema";

export default function KontenDetailsImages() {
  const { getValues, control, setError } = useFormContext<zKontenSchema>();

  const { fields, remove, append, update, move } = useFieldArray({
    control,
    name: "kontenImages",
  });

  const [active, setActive] = useState(0);

  return (
    <div>
      <FormField
        control={control}
        name="kontenImages"
        render={({}) => (
          <FormItem>
            {/* <FormLabel>Upload Image</FormLabel> */}

            <FormControl>
              <>
                <UploadDropzone
                  disabled={fields.length >= 3}
                  className={cn(
                    "ut-allowed-content:text-secondary-foreground ut-label:text-primary ut-upload-icon:text-primary-50",
                    fields.length >= 3
                      ? "opacity-50 cursor-not-allowed pointer-events-none"
                      : ""
                  )}
                  onUploadError={(error) => {
                    setError("kontenImages", {
                      type: "validate",
                      message: error.message,
                    });

                    return;
                  }}
                  // before uploading -----------------------

                  onBeforeUploadBegin={(files) => {
                    files.map((file) =>
                      append({
                        name: file.name,
                        size: file.size,
                        url: URL.createObjectURL(file),
                      })
                    );

                    return files;
                  }}
                  // after uploading complete  -----------------------

                  onClientUploadComplete={(files) => {
                    const images = getValues("kontenImages");
                    images.map((field, imgIDX) => {
                      if (field.url.search("blob:") === 0) {
                        // search images ----------------------------

                        const image = files.find(
                          (img) => img.name === field.name
                        );

                        // images find ------------------------------

                        if (image) {
                          update(imgIDX, {
                            url: image.url,
                            name: image.name,
                            size: image.size,
                            key: image.key,
                          });
                        }
                      }
                    });

                    return;
                  }}
                  config={{ mode: "auto" }}
                  endpoint={"variantUploader"}
                />

                {/* message max upload */}

                {fields.length >= 3 && (
                  <p className="text-xs text-destructive font-medium mt-2">
                    Maximum 3 images allowed.
                  </p>
                )}
              </>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <div className="rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>idx</TableHead>
              <TableHead>name</TableHead>
              <TableHead>size</TableHead>
              <TableHead>images</TableHead>
              <TableHead>action</TableHead>
            </TableRow>
          </TableHeader>

          {/* image drag order ----------------------------------------------- */}

          <Reorder.Group
            as="tbody"
            values={fields}
            onReorder={(e) => {
              const activeElement = fields[active];
              e.map((item, index) => {
                if (item === activeElement) {
                  move(active, index);
                  setActive(index);

                  return;
                }

                return;
              });
            }}
          >
            {fields.map((field, index) => {
              return (
                <Reorder.Item
                  as="tr"
                  key={field.id}
                  value={field}
                  id={field.id}
                  onDragStart={() => setActive(index)}
                  className={cn(
                    field.url.search("blob:") === 0
                      ? "animate-pulse transition-all"
                      : "",
                    "text-sm font-bold text-muted-foreground hover:text-primary"
                  )}
                >
                  <TableCell>{index}</TableCell>
                  <TableCell>{field.name}</TableCell>
                  <TableCell>
                    {(field.size / (1024 * 1024)).toFixed(2)} MB
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center">
                      <Image
                        src={field.url}
                        alt={field.name}
                        className="rounded-md"
                        width={72}
                        height={48}
                      />
                    </div>
                  </TableCell>

                  <TableCell>
                    <Button
                      variant={"ghost"}
                      onClick={(e) => {
                        e.preventDefault();
                        remove(index);
                      }}
                      className="scale-75"
                    >
                      <Trash className="h-4" />
                    </Button>
                  </TableCell>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </Table>
      </div>
    </div>
  );
}
