import * as z from "zod";

export const DeleteProductSchema = z.object({
  id: z.number(),
});

// export type zContentSchema = z.infer<typeof ContentSchema>;
