import type { Config } from "drizzle-kit";
 
import * as dotenv from "dotenv";
dotenv.config();
export default {
  schema: "./src/lib/schema/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL + '?sslmode=require' || '' ,
  }
} satisfies Config; 