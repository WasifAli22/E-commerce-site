import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/lib/schema/*",
  out: "./drizzle",
} satisfies Config; 