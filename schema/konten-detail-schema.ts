import * as z from "zod";

export const KontenDetailSchema = z.object({
  kontenID: z.number(),
  id: z.number().optional(),
  editMode: z.boolean(),
  kontenType: z
    .string()
    .min(3, { message: "product type must be at least 3 character long" })
    .optional(),
  tags: z.array(
    z.string().min(1, { message: "you must provide at least one tag" })
  ),
  kontenImages: z.array(
    z.object({
      url: z.string().refine((url) => url.search("blob:") !== 0, {
        message: "Please wait for the image to upload",
      }),
      size: z.number(),
      key: z.string().optional(),
      id: z.number().optional(),
      name: z.string(),
    })
  ),
});

export type zKontenDetailSchema = z.infer<typeof KontenDetailSchema>;
