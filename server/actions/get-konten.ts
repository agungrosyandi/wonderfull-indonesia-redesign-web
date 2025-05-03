"use server";

import { eq } from "drizzle-orm";
import { db } from "../drizzle";
import { konten } from "../schema";

export async function getKonten(id: number) {
  try {
    const content = await db.query.konten.findFirst({
      where: eq(konten.id, id),
      with: {
        kontenImages: true,
        kontenTags: true,
      },
    });

    if (!content) throw new Error("Product not found");

    return { success: content };
  } catch (error) {
    return { error: "Failed to get product" };
  }
}
