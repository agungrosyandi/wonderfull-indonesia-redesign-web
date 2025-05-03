"use server";

import { actionClient } from "@/lib/safe-action";

import { eq } from "drizzle-orm";

import { DeleteProductSchema } from "../../schema/delete-product-schema";
import { revalidatePath } from "next/cache";
import { db } from "../drizzle";
import { konten } from "../schema";
import { auth } from "../auth";

export const deleteProduct = actionClient
  .schema(DeleteProductSchema)
  .action(async ({ parsedInput: { id } }) => {
    try {
      const session = await auth();

      if (!session?.user) {
        return { error: "Unauthorized" };
      }

      // 1. First, find the content

      const content = await db.query.konten.findFirst({
        where: (konten, { eq }) => eq(konten.id, id),
      });

      if (!content) {
        return { error: "Content not found" };
      }

      // 2. Check if user is the owner
      
      if (content.authorId !== session.user.id) {
        // or compare email
        return { error: "You are not allowed to delete this content" };
      }

      const data = await db.delete(konten).where(eq(konten.id, id)).returning();

      revalidatePath("/dashboard/main-dashboard");

      return { success: `Konten ${data[0].title} has been deleted` };
    } catch (error) {
      return { error: "failed to delete konten" };
    }
  });
