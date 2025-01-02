"use server";

import prisma from "@/utils/db";
import { sleep } from "@/utils/utils";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

// kategori createPost  --------------------------------------------------------

export async function createPost(formData: FormData) {
  await sleep(2000);

  try {
    await prisma.kategoriDestination.create({
      data: {
        name: formData.get("name") as string,
        slug: (formData.get("name") as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        city: formData.get("city") as string,
        location: formData.get("location") as string,
        date: new Date(),
        organizerName: formData.get("organizerName") as string,
        imageUrl:
          (formData.get("imageUrl") as string) || "/image/alor-island.jpg",
        imageUrl1:
          (formData.get("imageUrl1") as string) || "/image/alor-island.jpg",
        imageUrl2:
          (formData.get("imageUrl2") as string) || "/image/alor-island.jpg",
        imageUrl3:
          (formData.get("imageUrl3") as string) || "/image/alor-island.jpg",
        description: formData.get("description") as string,
        description2: formData.get("description2") as string,
        description3: formData.get("description3") as string,
      },
    });
  } catch (error) {
    return {
      message: "Could not add pet",
    };
  }

  revalidatePath("/list-destination", "layout");
}

// kategori post  --------------------------------------------------------

export async function getDestination(places: string, page = 1) {
  const PAGE_SIZE = 6;

  const destinations = await prisma.kategoriDestination.findMany({
    where: {
      city: places === "all" ? undefined : places,
    },
    orderBy: {
      date: "asc",
    },
    take: PAGE_SIZE,

    skip: (page - 1) * PAGE_SIZE,
  });

  let totalCount;

  if (places === "all") {
    totalCount = await prisma.kategoriDestination.count();
  } else {
    totalCount = await prisma.kategoriDestination.count({
      where: {
        city: places,
      },
    });
  }

  return {
    destinations,
    totalCount,
  };
}

// kategori post slug  --------------------------------------------------------

export async function getDestinationSlug(slug: string) {
  const destinationSlug = await prisma.kategoriDestination.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!destinationSlug) {
    return notFound();
  }

  return destinationSlug;
}

// kategori search slug  --------------------------------------------------------

export async function searchDestinations(searchQuery: string) {
  const allDatabase = await prisma.kategoriDestination.findMany({
    where: {
      OR: [
        { name: { contains: searchQuery, mode: "insensitive" } },
        { description: { contains: searchQuery, mode: "insensitive" } },
      ],
    },
  });
  return allDatabase;
}
