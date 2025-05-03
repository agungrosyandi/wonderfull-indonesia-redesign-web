import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  avatarUploader: f({ image: { maxFileSize: "2MB" } }).onUploadComplete(
    async ({ metadata, file }) => {}
  ),

  variantUploader: f({
    image: { maxFileCount: 3, maxFileSize: "2MB" },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log(file);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
