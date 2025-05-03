ALTER TABLE "addImagesAndTags" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "addImagesAndTags" CASCADE;--> statement-breakpoint
ALTER TABLE "kontenImages" DROP CONSTRAINT "kontenImages_imagesAndTagsID_addImagesAndTags_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenTags" DROP CONSTRAINT "kontenTags_imagesAndTagsID_addImagesAndTags_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenImages" ADD CONSTRAINT "kontenImages_imagesAndTagsID_konten_id_fk" FOREIGN KEY ("imagesAndTagsID") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD CONSTRAINT "kontenTags_imagesAndTagsID_konten_id_fk" FOREIGN KEY ("imagesAndTagsID") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;