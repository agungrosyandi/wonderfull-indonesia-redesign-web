CREATE TABLE "konten" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"kota" text NOT NULL,
	"lokasi" text NOT NULL,
	"description" text NOT NULL,
	"created" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "kontenDetails" (
	"id" serial PRIMARY KEY NOT NULL,
	"update" timestamp DEFAULT now(),
	"productID" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kontenImages" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"size" real NOT NULL,
	"name" text NOT NULL,
	"order" real NOT NULL,
	"variantID" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kontenTags" (
	"id" serial PRIMARY KEY NOT NULL,
	"tag" text NOT NULL,
	"variantID" serial NOT NULL
);
--> statement-breakpoint
ALTER TABLE "orderProduct" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "orders" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "productVarians" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "products" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "variantImages" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "variantTags" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "orderProduct" CASCADE;--> statement-breakpoint
DROP TABLE "orders" CASCADE;--> statement-breakpoint
DROP TABLE "productVarians" CASCADE;--> statement-breakpoint
DROP TABLE "products" CASCADE;--> statement-breakpoint
DROP TABLE "variantImages" CASCADE;--> statement-breakpoint
DROP TABLE "variantTags" CASCADE;--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_productID_products_id_fk";
--> statement-breakpoint
DROP INDEX "productIdx";--> statement-breakpoint
ALTER TABLE "reviews" ADD COLUMN "kontenID" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "kontenDetails" ADD CONSTRAINT "kontenDetails_productID_konten_id_fk" FOREIGN KEY ("productID") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenImages" ADD CONSTRAINT "kontenImages_variantID_kontenDetails_id_fk" FOREIGN KEY ("variantID") REFERENCES "public"."kontenDetails"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kontenTags" ADD CONSTRAINT "kontenTags_variantID_kontenDetails_id_fk" FOREIGN KEY ("variantID") REFERENCES "public"."kontenDetails"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_kontenID_konten_id_fk" FOREIGN KEY ("kontenID") REFERENCES "public"."konten"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "kontenIdx" ON "reviews" USING btree ("kontenID");--> statement-breakpoint
ALTER TABLE "reviews" DROP COLUMN "productID";--> statement-breakpoint
ALTER TABLE "public"."user" ALTER COLUMN "roles" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."roles";--> statement-breakpoint
CREATE TYPE "public"."roles" AS ENUM('user', 'admin');--> statement-breakpoint
ALTER TABLE "public"."user" ALTER COLUMN "roles" SET DATA TYPE "public"."roles" USING "roles"::"public"."roles";