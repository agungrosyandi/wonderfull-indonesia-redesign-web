CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "roles" SET DATA TYPE role;--> statement-breakpoint
DROP TYPE "public"."roles";