CREATE TABLE "productVarians" (
	"id" serial PRIMARY KEY NOT NULL,
	"color" text NOT NULL,
	"productType" text NOT NULL,
	"update" timestamp DEFAULT now(),
	"productID" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "variantImages" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"size" real NOT NULL,
	"name" text NOT NULL,
	"order" real NOT NULL,
	"variantID" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "variantTags" (
	"id" serial PRIMARY KEY NOT NULL,
	"tag" text NOT NULL,
	"variantID" serial NOT NULL
);
--> statement-breakpoint
ALTER TABLE "productVarians" ADD CONSTRAINT "productVarians_productID_products_id_fk" FOREIGN KEY ("productID") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variantImages" ADD CONSTRAINT "variantImages_variantID_productVarians_id_fk" FOREIGN KEY ("variantID") REFERENCES "public"."productVarians"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variantTags" ADD CONSTRAINT "variantTags_variantID_productVarians_id_fk" FOREIGN KEY ("variantID") REFERENCES "public"."productVarians"("id") ON DELETE cascade ON UPDATE no action;