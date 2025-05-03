"use server";

import {
  generateEmailVerificationToken,
  generateTwoFactorToken,
  getTwoFactorTokenByEmail,
} from "./tokens";

import { actionClient } from "@/lib/safe-action";
import { LoginSchema } from "../../schema/login-schema";
import { sendTwoFactorTokenByEmail, sendVerificationEmail } from "./email";
import { AuthError } from "next-auth";
import { db } from "../drizzle";
import { twoFactorTokens, users } from "../schema";
import { eq } from "drizzle-orm";
import { signIn } from "../auth";

export const emailSignIn = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    try {
      const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
      });

      if (!existingUser) return { error: "Email not found" };

      // Check if user is verified
      if (!existingUser.emailVerified) {
        const verificationToken = await generateEmailVerificationToken(
          existingUser.email!
        );

        await sendVerificationEmail(
          verificationToken[0].email,
          verificationToken[0].token
        );

        return { success: "Confirmation email sent" };
      }

      // 👉 If 2FA is enabled, first try to login with credentials

      if (existingUser.twoFactorEnabled && existingUser.email) {
        // If user submitted the 2FA code

        if (code) {
          const twoFactorToken = await getTwoFactorTokenByEmail(
            existingUser.email
          );

          if (!twoFactorToken || twoFactorToken.token !== code) {
            return { error: "Invalid or expired 2FA token" };
          }

          const hasExpired = new Date(twoFactorToken.expires) < new Date();

          if (hasExpired) {
            return { error: "Token has expired" };
          }

          await db
            .delete(twoFactorTokens)
            .where(eq(twoFactorTokens.id, twoFactorToken.id));

          // Finally, complete login after successful 2FA

          await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
          });

          return { success: "User signed in" };
        } else {
          // Before sending 2FA token, try to login credentials WITHOUT redirect

          try {
            await signIn("credentials", {
              email,
              password,
              redirect: false, // ⬅️ Important, so it doesn't actually redirect yet
            });
          } catch (error) {
            if (
              error instanceof AuthError &&
              error.type === "CredentialsSignin"
            ) {
              return { error: "Email or password incorrect" };
            }
            throw error;
          }

          // Credentials are valid, now send 2FA token
          const token = await generateTwoFactorToken(existingUser.email);
          if (!token) {
            return { error: "Could not generate token" };
          }

          await sendTwoFactorTokenByEmail(token[0].email, token[0].token);

          return { twoFactor: "Two Factor Token Sent" };
        }
      }

      // No 2FA: Normal login

      await signIn("credentials", {
        email,
        password,
        redirectTo: "/",
      });

      return { success: "User signed in" };
    } catch (error) {
      console.log(error);

      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Email or password incorrect" };
          case "AccessDenied":
          case "OAuthSignInError":
            return { error: error.message };
          default:
            return { error: "Something went wrong" };
        }
      }

      throw error;
    }
  });
