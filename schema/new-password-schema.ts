import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Password at least 8 character",
  }),
  token: z.string().nullable().optional(),
});

export type zNewPasswordSchema = z.infer<typeof NewPasswordSchema>;
