"use server";

import { actionClient } from "@/lib/safe-action";
import { RegisterSchema } from "../../schema/register-schema";

import bcrypt from "bcrypt";
import { generateEmailVerificationToken } from "./tokens";
import { sendVerificationEmail } from "./email";
import { users } from "../schema";
import { eq } from "drizzle-orm";
import { db } from "../drizzle";

export const emailRegister = actionClient
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    // create hashed password for user register --------------------------------

    const hashedPassword = await bcrypt.hash(password, 10);

    // check existing user --------------------------------

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    //Check existing user

    if (existingUser) {
      if (!existingUser.emailVerified) {
        const verificationToken = await generateEmailVerificationToken(email);

        await sendVerificationEmail(
          verificationToken[0].email,
          verificationToken[0].token
        );

        return { success: "Email confirmation resend" };
      }

      return { error: "Email already in use" };
    }
    // Logic for when the user is not registered

    await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
    });

    const verificationToken = await generateEmailVerificationToken(email);

    await sendVerificationEmail(
      verificationToken[0].email,
      verificationToken[0].token
    );

    return { success: "Confirmation Email Send!" };
  });
