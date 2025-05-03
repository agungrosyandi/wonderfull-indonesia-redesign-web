// import { prisma } from "@/prisma";
// import { sleep } from "@/utils/utils";
// import { revalidatePath } from "next/cache";

// export async function createPost(formData: FormData) {
//   await sleep(2000);

//   try {
//     await prisma.kategoriDestination.create({
//       data: {
//         name: formData.get("name") as string,
//         slug: (formData.get("name") as string)
//           .replace(/\s+/g, "-")
//           .toLowerCase(),
//         city: formData.get("city") as string,
//         location: formData.get("location") as string,
//         date: new Date(),
//         organizerName: formData.get("organizerName") as string,
//         imageUrl:
//           (formData.get("imageUrl") as string) || "/image/alor-island.jpg",
//         imageUrl1:
//           (formData.get("imageUrl1") as string) || "/image/alor-island.jpg",
//         imageUrl2:
//           (formData.get("imageUrl2") as string) || "/image/alor-island.jpg",
//         imageUrl3:
//           (formData.get("imageUrl3") as string) || "/image/alor-island.jpg",
//         description: formData.get("description") as string,
//         description2: formData.get("description2") as string,
//         description3: formData.get("description3") as string,
//       },
//     });
//   } catch (error) {
//     return {
//       message: "Could not add pet",
//     };
//   }

//   revalidatePath("/list-destination", "layout");
// }
