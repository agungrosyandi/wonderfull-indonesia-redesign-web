"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { forwardRef, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { createKonten } from "../../../../server/actions/create-konten";
import { useContextAPI } from "@/hooks/useContextAPI";
import { useRouter, useSearchParams } from "next/navigation";

import { toast } from "sonner";

import Tiptap from "./tiptap";
import { KontenSchema, zKontenSchema } from "../../../../schema/konten-schema";
import { getKonten } from "../../../../server/actions/get-konten";
import KontenDetailsImages from "./konten-detail-image";
import { InputTags } from "./input-tag";
import { KontenDetailsWithImagesTags } from "@/lib/infer-types";

type DetailsProps = {
  children?: React.ReactNode;
  kontenID?: number;
  details?: KontenDetailsWithImagesTags;
};

// export to page.tsx tulis-konten main folder ---------------------------

export const ContentForm = forwardRef<HTMLDivElement, DetailsProps>(
  ({ children, details }, ref) => {
    const form = useForm<zKontenSchema>({
      resolver: zodResolver(KontenSchema),
      defaultValues: {
        title: "",
        kota: "",
        lokasi: "",
        description: "",
        id: undefined,
        kontenImages: [],
        tags: [],
      },
      mode: "onChange",
    });

    const router = useRouter();
    const editMode = useSearchParams().get("id");

    // edit konten logic --------------------------------------

    const checkKonten = async (id: number) => {
      if (editMode) {
        const data = await getKonten(id);

        if (data.error) {
          toast.error(data.error);
          router.push("/dashboard/tulis-konten");
          return;
        }

        if (data.success) {
          const id = parseInt(editMode);
          form.setValue("title", data.success.title);
          form.setValue("kota", data.success.kota);
          form.setValue("lokasi", data.success.lokasi);
          form.setValue("description", data.success.description);
          form.setValue("id", id);
          form.setValue(
            "tags",
            data.success.kontenTags.map((tag) => tag.tag) ?? []
          );
          form.setValue(
            "kontenImages",
            data.success.kontenImages.map((img) => ({
              name: img.name,
              size: img.size,
              url: img.url,
            })) ?? []
          );
        }
      }
    };

    useEffect(() => {
      if (editMode) checkKonten(parseInt(editMode));
    }, []);

    // execute server actions to create product -----------------------

    const { error, success, setError, setSuccess } = useContextAPI();

    const { execute, status } = useAction(createKonten, {
      onSuccess(data) {
        if (data.data?.error) {
          toast.error(data.data.error);
        }

        if (data.data?.success) {
          router.push("/dashboard/konten-publish");
          toast.success(data.data.success);
        }

        return;
      },

      onExecute: (data) => {
        // edit konten mode sonner ------------------

        if (editMode) {
          const promise = () =>
            new Promise((resolve) =>
              setTimeout(() => resolve({ name: "Sonner" }), 1000)
            );

          toast.promise(promise, {
            loading: "Loading...",
            success: () => {
              return `Editing Konten`;
            },
            error: "Error",
          });
        }

        // create konten mode sonner ------------------

        if (!editMode) {
          const promise = () =>
            new Promise((resolve) =>
              setTimeout(() => resolve({ name: "Sonner" }), 1000)
            );

          toast.promise(promise, {
            loading: "Loading...",
            success: () => {
              return `Creating Konten`;
            },
            error: "Error",
          });
        }
      },

      onError: () => console.log(error),
    });

    // form submit button execute ----------------------------

    const onSubmit = async (values: zKontenSchema) => {
      const isValid = await form.trigger(); // force validation
      if (!isValid) return;

      execute(values);
    };

    // form component & UI ----------------------------

    return (
      <Card className="mx-[5%] mb-20  fullHdMinWidth:mx-[10%]">
        <CardHeader className="w-full items-center">
          <CardTitle>
            {editMode ? <span>Edit Konten</span> : <span>Buat Konten</span>}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* destinasti wisata title --------------------- */}

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="py-2">
                    <FormLabel>Nama Destinasi Wisata</FormLabel>
                    <FormControl>
                      <Input placeholder="Add title" {...field} />
                    </FormControl>
                    <FormDescription>
                      Example: Borobudur, Mandalika, etc
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* kota title --------------------- */}

              <FormField
                control={form.control}
                name="kota"
                render={({ field }) => (
                  <FormItem className="py-2">
                    <FormLabel>Nama Kota</FormLabel>
                    <FormControl>
                      <Input placeholder="Add city" {...field} />
                    </FormControl>
                    <FormDescription>
                      Example: Bandung, Jakarta, etc
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* lokasi title --------------------- */}

              <FormField
                control={form.control}
                name="lokasi"
                render={({ field }) => (
                  <FormItem className="py-2">
                    <FormLabel>Letak Lokasi</FormLabel>
                    <FormControl>
                      <Input placeholder="Add location" {...field} />
                    </FormControl>
                    <FormDescription>
                      Example: Jawa Barat, Bali, etc
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* main description --------------------------- */}

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi</FormLabel>
                    <FormControl>
                      {/* import from tiptap.tsx ------------------------ */}

                      <Tiptap val={field.value} />
                    </FormControl>
                    <FormDescription>
                      Add description about your content
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* content tags ---------------------------- */}

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <InputTags
                        {...field}
                        onChange={(e) => field.onChange(e)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* content images ---------------------------- */}

              <KontenDetailsImages />

              {/* button submit form -------------------------- */}

              <Button
                disabled={
                  status === "executing" ||
                  !form.formState.isValid ||
                  !form.formState.isDirty
                }
                type="submit"
              >
                {editMode ? "Save Changes" : "Create Content"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  }
);

ContentForm.displayName = "ContentForm";
