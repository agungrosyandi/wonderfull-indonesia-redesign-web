ALTER TABLE "kontenDetails" DROP CONSTRAINT "kontenDetails_productID_konten_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenImages" DROP CONSTRAINT "kontenImages_variantID_kontenDetails_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenTags" DROP CONSTRAINT "kontenTags_variantID_kontenDetails_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenDetails" ADD COLUMN "kontenID" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "kontenImages" ADD COLUMN "detailsID" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD COLUMN "detailsID" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "kontenDetails" ADD CONSTRAINT "kontenDetails_kontenID_konten_id_fk" FOREIGN KEY ("kontenID") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenImages" ADD CONSTRAINT "kontenImages_detailsID_kontenDetails_id_fk" FOREIGN KEY ("detailsID") REFERENCES "public"."kontenDetails"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD CONSTRAINT "kontenTags_detailsID_kontenDetails_id_fk" FOREIGN KEY ("detailsID") REFERENCES "public"."kontenDetails"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenDetails" DROP COLUMN "productID";--> statement-breakpoint
ALTER TABLE "kontenImages" DROP COLUMN "variantID";--> statement-breakpoint
ALTER TABLE "kontenTags" DROP COLUMN "variantID";