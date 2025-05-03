import * as z from "zod";

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export type zResetSchema = z.infer<typeof ResetSchema>;
