import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { accounts, users } from "./schema";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "../schema/login-schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // add database ORM to connect auth to your database, PRISMA, DRIZZLE or etc.......

  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
  }),

  // add auth secret to complete your progress auth

  secret: process.env.AUTH_SECRET,

  // add strategy auth JWT or Sessions etc .......

  session: { strategy: "jwt" },

  callbacks: {
    // add extended user session to database. dont forget create next-auth.d.ts in root directory

    async session({ session, token }) {
      if (session && token.sub) {
        session.user.id = token.sub;
      }

      if (session.user && token.role) {
        session.user.role = token.role as string;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
        session.user.image = token.image as string;
      }

      return session;
    },

    // add access to JWT token strategy

    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await db.query.users.findFirst({
        where: eq(users.id, token.sub),
      });

      if (!existingUser) return token;
      const existingAccount = await db.query.accounts.findFirst({
        where: eq(accounts.userId, existingUser.id),
      });

      token.isOAuth = !!existingAccount; // add !! to make true or false in object auth
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.twoFactorEnabled;
      token.image = existingUser.image;

      return token;
    },
  },

  // add manual registration account or third party auth like a google, github or facebook etc .....

  providers: [
    // add google auth as account login + integration to database .....--------------

    Google,

    // add credentian register account with token .....--------------

    Credentials({
      authorize: async (credentials) => {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await db.query.users.findFirst({
            where: eq(users.email, email),
          });

          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
});
