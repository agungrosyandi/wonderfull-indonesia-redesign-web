ALTER TABLE "kontenDetails" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "kontenDetails" CASCADE;--> statement-breakpoint
ALTER TABLE "kontenImages" DROP CONSTRAINT "kontenImages_detailsID_kontenDetails_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenTags" DROP CONSTRAINT "kontenTags_detailsID_kontenDetails_id_fk";
--> statement-breakpoint
ALTER TABLE "kontenImages" ADD CONSTRAINT "kontenImages_detailsID_konten_id_fk" FOREIGN KEY ("detailsID") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD CONSTRAINT "kontenTags_detailsID_konten_id_fk" FOREIGN KEY ("detailsID") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenImages" DROP COLUMN "order";