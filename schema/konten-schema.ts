import * as z from "zod";

export const KontenSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(4, {
    message: "Judul minimal 8 karakter",
  }),
  kota: z.string().min(4, {
    message: "Judul minimal 8 karakter",
  }),
  lokasi: z.string().min(4, {
    message: "Judul minimal 8 karakter",
  }),
  description: z
    .string()
    .min(35, { message: "Description at least 15 character" }),
  tags: z
    .array(z.string().min(1, { message: "Tag cannot be empty" }))
    .optional()
    .default([]),
  kontenImages: z
    .array(
      z.object({
        url: z.string().refine((url) => url.search("blob:") !== 0, {
          message: "Please wait for the image to upload",
        }),
        size: z.number(),
        key: z.string().optional(),
        id: z.number().optional(),
        name: z.string(),
      })
    )
    .optional()
    .default([]),
});

export type zKontenSchema = z.infer<typeof KontenSchema>;
