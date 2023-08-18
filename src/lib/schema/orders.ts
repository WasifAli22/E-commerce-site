// Import necessary modules and functions
import { InferModel } from "drizzle-orm";
import { pgTable, varchar, pgEnum, integer, serial, timestamp } from "drizzle-orm/pg-core"
// Define an enum for the different order statuses
export const statusEnum = pgEnum('status', ['Pending', 'Processing', 'Approve', 'Delivered']);
// Define the structure of the order table
export const orderTable = pgTable("orderTable", {
    id: serial("id").primaryKey(),       // Unique identifier for the order
    user_id: varchar("user_id", { length: 255 }).notNull(),   // ID of the user associated with the order
    quantity: integer("quantity").notNull(),     // Quantity of items in the order
    price: integer('price').notNull(),           // Total price of the order
    status: statusEnum('Status').default("Pending"), // Status of the order (Pending, Processing, Approve, Delivered)
    name: varchar("name", { length: 100 }).notNull(),  // Name associated with the order
    order_at: timestamp('order_at').defaultNow(),    // Timestamp of when the order was placed
});



// Define the types based on the order table structure
export type Orders = InferModel<typeof orderTable>;   // Type representing a single order row
export type AddOrder = InferModel<typeof orderTable, "insert">;  // Type for inserting new order rows
