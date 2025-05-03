ALTER TABLE "konten" ALTER COLUMN "authorId" SET NOT NULL;--> statement-breakpoint
CREATE INDEX "authorIdx" ON "konten" USING btree ("authorId");