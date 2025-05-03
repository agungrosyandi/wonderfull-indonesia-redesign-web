ALTER TABLE "kontenDetails" ADD COLUMN "kontenType" text NOT NULL;--> statement-breakpoint
ALTER TABLE "konten" DROP COLUMN "kontenType";