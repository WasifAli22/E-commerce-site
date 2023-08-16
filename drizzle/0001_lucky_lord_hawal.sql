DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('Pending', 'Processing', 'Approve', 'Delivered');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"quantity" integer NOT NULL,
	"price" integer NOT NULL,
	"Pending" "status",
	"name" varchar(100) NOT NULL,
	"order_at" timestamp DEFAULT now(),
	"order_Type" text NOT NULL
);
