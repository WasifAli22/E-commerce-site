CREATE TABLE IF NOT EXISTS "cart" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"product_id" varchar(255) NOT NULL,
	"quantity" integer NOT NULL
);
