CREATE TABLE "addImagesAndTags" (
	"id" serial PRIMARY KEY NOT NULL,
	"color" text NOT NULL,
	"productType" text NOT NULL,
	"updated" timestamp DEFAULT now(),
	"kontenID" serial NOT NULL
);
--> statement-breakpoint
ALTER TABLE "kontenImages" DROP CONSTRAINT "kontenImages_detailsID_konten_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenTags" DROP CONSTRAINT "kontenTags_detailsID_konten_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenImages" ADD COLUMN "imagesAndTagsID" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD COLUMN "imagesAndTagsID" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "addImagesAndTags" ADD CONSTRAINT "addImagesAndTags_kontenID_konten_id_fk" FOREIGN KEY ("kontenID") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenImages" ADD CONSTRAINT "kontenImages_imagesAndTagsID_addImagesAndTags_id_fk" FOREIGN KEY ("imagesAndTagsID") REFERENCES "public"."addImagesAndTags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD CONSTRAINT "kontenTags_imagesAndTagsID_addImagesAndTags_id_fk" FOREIGN KEY ("imagesAndTagsID") REFERENCES "public"."addImagesAndTags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenImages" DROP COLUMN "detailsID";--> statement-breakpoint
ALTER TABLE "kontenTags" DROP COLUMN "detailsID";