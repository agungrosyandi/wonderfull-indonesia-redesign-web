"use server";

import { actionClient } from "@/lib/safe-action";
import { eq } from "drizzle-orm";
import { db } from "../drizzle";

import { revalidatePath } from "next/cache";
import { KontenSchema } from "../../schema/konten-schema";
import { konten, kontenImages, kontenTags } from "../schema";
import { auth } from "../auth";

export const createKonten = actionClient
  .schema(KontenSchema)
  .action(
    async ({
      parsedInput: {
        id,
        title,
        kota,
        lokasi,
        description,
        tags,
        kontenImages: newImgs,
      },
    }) => {
      try {
        const session = await auth();

        if (!session) return { error: "Please sign in" };

        // edit mode -----------------------------------

        if (id) {
          const currentKonten = await db.query.konten.findFirst({
            where: eq(konten.id, id),
          });

          if (!currentKonten) return { error: "Content not found" };

          const editedKonten = await db
            .update(konten)
            .set({ description, kota, title, lokasi })
            .where(eq(konten.id, id))
            .returning();

          const kontenId = editedKonten[0].id;

          // delete old tags and insert new (only if tags exist)

          await db
            .delete(kontenTags)
            .where(eq(kontenTags.imagesAndTagsID, kontenId));

          if (tags && tags.length > 0) {
            await db.insert(kontenTags).values(
              tags.map((tag) => ({
                tag,
                imagesAndTagsID: kontenId,
              }))
            );
          }

          // delete old images and insert new (only if images exist)

          await db
            .delete(kontenImages)
            .where(eq(kontenImages.imagesAndTagsID, kontenId));

          if (newImgs && newImgs.length > 0) {
            await db.insert(kontenImages).values(
              newImgs.map((img) => ({
                name: img.name,
                size: img.size,
                url: img.url,
                imagesAndTagsID: kontenId,
              }))
            );
          }

          revalidatePath("/dashboard/konten-publish");

          return { success: `Konten ${editedKonten[0].title} berhasil diedit` };
        }

        // create mode -----------------------------------

        if (!id) {
          const newKonten = await db
            .insert(konten)
            .values({
              description,
              title,
              kota,
              lokasi,
              authorId: session.user.id,
            })
            .returning();

          const kontenId = newKonten[0].id;

          if (tags && tags.length > 0) {
            await db.insert(kontenTags).values(
              tags.map((tag) => ({
                tag,
                imagesAndTagsID: kontenId,
              }))
            );
          }

          if (newImgs && newImgs.length > 0) {
            await db.insert(kontenImages).values(
              newImgs.map((img) => ({
                name: img.name,
                size: img.size,
                url: img.url,
                imagesAndTagsID: kontenId,
              }))
            );
          }

          revalidatePath("/dashboard/konten-publish");

          return { success: `Konten ${newKonten[0].title} berhasil dibuat` };
        }
      } catch (error) {
        console.error(error);
        return { error: "Failed to make content, Check your data" };
      }
    }
  );
