"use server";

import { actionClient } from "@/lib/safe-action";
import { reviews } from "../schema";
import { and, eq } from "drizzle-orm";
import { db } from "../drizzle";
import { revalidatePath } from "next/cache";
import { reviewSchema } from "../../schema/review-schema";
import { auth } from "../auth";

export const addReview = actionClient
  .schema(reviewSchema)
  .action(async ({ parsedInput: { kontenID, rating, comment } }) => {
    try {
      const session = await auth();

      if (!session) return { error: "Please sign in" };

      const reviewExists = await db.query.reviews.findFirst({
        where: and(
          eq(reviews.kontenID, kontenID),
          eq(reviews.userID, session.user.id)
        ),
      });

      if (reviewExists)
        return { error: "You have already reviewed this product" };

      const newReview = await db
        .insert(reviews)
        .values({
          kontenID,
          rating,
          comment,
          userID: session.user.id,
        })
        .returning();

      revalidatePath(`/destination/${kontenID}`);

      return { success: newReview[0] };
    } catch (err) {
      return { error: JSON.stringify(err) };
    }
  });
