// import { prisma } from "@/prisma";

// export async function getDestination(places: string, page = 1) {
//   const PAGE_SIZE = 6;

//   const destinations = await prisma.kategoriDestination.findMany({
//     where: {
//       city: places === "all" ? undefined : places,
//     },
//     orderBy: {
//       date: "asc",
//     },
//     take: PAGE_SIZE,

//     skip: (page - 1) * PAGE_SIZE,
//   });

//   let totalCount;

//   if (places === "all") {
//     totalCount = await prisma.kategoriDestination.count();
//   } else {
//     totalCount = await prisma.kategoriDestination.count({
//       where: {
//         city: places,
//       },
//     });
//   }

//   return {
//     destinations,
//     totalCount,
//   };
// }
