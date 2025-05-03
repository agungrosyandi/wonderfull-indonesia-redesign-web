ALTER TABLE "kontenImages" DROP CONSTRAINT "kontenImages_imagesAndTagsID_konten_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenTags" DROP CONSTRAINT "kontenTags_imagesAndTagsID_konten_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenImages" ADD COLUMN "konten" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD COLUMN "konten" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "kontenImages" ADD CONSTRAINT "kontenImages_konten_konten_id_fk" FOREIGN KEY ("konten") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD CONSTRAINT "kontenTags_konten_konten_id_fk" FOREIGN KEY ("konten") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenImages" DROP COLUMN "imagesAndTagsID";--> statement-breakpoint
ALTER TABLE "kontenTags" DROP COLUMN "imagesAndTagsID";