import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  pgEnum,
  boolean,
  serial,
  real,
  index,
} from "drizzle-orm/pg-core";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import type { AdapterAccountType } from "next-auth/adapters";

import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

const pool = postgres(process.env.DATABASE_URL!, { max: 1 });

export const db = drizzle(pool);

// role user ------------------------

export const RoleEnum = pgEnum("roles", ["user", "admin", "user-contributor"]);

// user account ------------------------

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .notNull()
    .$defaultFn(() => createId()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  password: text("password"),
  twoFactorEnabled: boolean("twoFactorEnabled").default(false),
  role: RoleEnum("roles").default("user"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ]
);

// email registeration login & token ------------------------

export const emailTokens = pgTable(
  "email_tokens",
  {
    id: text("id")
      .notNull()
      .$defaultFn(() => createId()),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
    email: text("email").notNull(),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.id, verificationToken.token],
      }),
    },
  ]
);

export const passwordResetTokens = pgTable(
  "password_reset_tokens",
  {
    id: text("id")
      .notNull()
      .$defaultFn(() => createId()),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
    email: text("email").notNull(),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.id, verificationToken.token],
      }),
    },
  ]
);

export const twoFactorTokens = pgTable(
  "two_factor_tokens",
  {
    id: text("id")
      .notNull()
      .$defaultFn(() => createId()),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
    email: text("email").notNull(),
    userID: text("userID").references(() => users.id, { onDelete: "cascade" }),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.id, verificationToken.token],
      }),
    },
  ]
);

// konten ------------------------

export const konten = pgTable(
  "konten",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    kota: text("kota").notNull(),
    lokasi: text("lokasi").notNull(),
    description: text("description").notNull(),
    created: timestamp("created").defaultNow(),
    authorId: text("authorId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => {
    return {
      authorIdx: index("authorIdx").on(table.authorId),
    };
  }
);

export const kontenImages = pgTable("kontenImages", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  size: real("size").notNull(),
  name: text("name").notNull(),
  imagesAndTagsID: serial("konten")
    .notNull()
    .references(() => konten.id, { onDelete: "cascade" }),
});

export const kontenTags = pgTable("kontenTags", {
  id: serial("id").primaryKey(),
  tag: text("tag").notNull(),
  imagesAndTagsID: serial("konten")
    .notNull()
    .references(() => konten.id, { onDelete: "cascade" }),
});

// konten relations ------------------------

export const kontenRelations = relations(konten, ({ many, one }) => ({
  kontenImages: many(kontenImages, { relationName: "kontenImages" }),
  kontenTags: many(kontenTags, { relationName: "kontenTags" }),
  reviews: many(reviews, { relationName: "reviews" }),
  user: one(users, {
    fields: [konten.authorId],
    references: [users.id],
    relationName: "konten_user",
  }),
}));

// konten images & tags relations ------------------------

export const kontenImagesRelations = relations(kontenImages, ({ one }) => ({
  addImagesAndTags: one(konten, {
    fields: [kontenImages.imagesAndTagsID],
    references: [konten.id],
    relationName: "kontenImages",
  }),
}));

export const kontenTagsRelations = relations(kontenTags, ({ one }) => ({
  addImagesAndTags: one(konten, {
    fields: [kontenTags.imagesAndTagsID],
    references: [konten.id],
    relationName: "kontenTags",
  }),
}));

// konten review ------------------------

export const reviews = pgTable(
  "reviews",
  {
    id: serial("id").primaryKey(),
    rating: real("rating").notNull(),
    comment: text("comment").notNull(),
    created: timestamp("created").defaultNow(),
    userID: text("userID")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    kontenID: serial("kontenID")
      .notNull()
      .references(() => konten.id, { onDelete: "cascade" }),
  },
  (table) => {
    return {
      kontenIdx: index("kontenIdx").on(table.kontenID),
      userIdx: index("userIdx").on(table.userID),
    };
  }
);

// review relations ------------------------

export const reviewRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.userID],
    references: [users.id],
    relationName: "user_reviews",
  }),
  konten: one(konten, {
    fields: [reviews.kontenID],
    references: [konten.id],
    relationName: "reviews",
  }),
}));

// users relations ------------------------

export const userRelations = relations(users, ({ many }) => ({
  reviews: many(reviews, { relationName: "user_reviews" }),
  konten: many(konten, { relationName: "konten_user" }),
}));
