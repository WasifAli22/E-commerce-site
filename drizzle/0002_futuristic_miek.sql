ALTER TABLE "orders" RENAME COLUMN "Pending" TO "Status";--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "Status" SET DEFAULT 'Pending';