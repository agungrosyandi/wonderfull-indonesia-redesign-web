CREATE TYPE "public"."roles" AS ENUM('user', 'admin');--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "roles" SET DATA TYPE roles;--> statement-breakpoint
DROP TYPE "public"."role";