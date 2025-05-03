"use server";

import { actionClient } from "@/lib/safe-action";

import bcrypt from "bcrypt";

import { NewPasswordSchema } from "../../schema/new-password-schema";
import { getPasswordResetByToken } from "./tokens";
import { passwordResetTokens, users } from "../schema";
import { eq } from "drizzle-orm";
import { db } from "../drizzle";

import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

export const newPassword = actionClient
  .schema(NewPasswordSchema)
  .action(async ({ parsedInput: { password, token } }) => {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });

    const dbPool = drizzle(pool);

    // check token avaibility

    if (!token) return { error: "Missing Token" };

    // check token if its valid

    const existingToken = await getPasswordResetByToken(token);

    if (!existingToken) return { error: "Token not found" };

    // check token if its expires

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) return { error: "Token has expired" };

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, existingToken.email),
    });

    if (!existingUser) return { error: "user not found" };

    const hashedPassword = await bcrypt.hash(password, 10);

    await dbPool.transaction(async (tx) => {
      await tx
        .update(users)
        .set({
          password: hashedPassword,
        })
        .where(eq(users.id, existingUser.id));

      await tx
        .delete(passwordResetTokens)
        .where(eq(passwordResetTokens.id, existingToken.id));
    });

    return { success: "Password update" };
  });
