import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
 
export const db = drizzle(sql);
// const result = await db.select().from(...);
 
// const allUsers = await db.select().from(cartTable);