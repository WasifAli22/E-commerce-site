import { InferModel } from "drizzle-orm";
import { pgTable, varchar, pgEnum, integer, serial , timestamp , text } from "drizzle-orm/pg-core"


// id
// user_id
// quantity, // * stripe
// total Price // * stripe
// status      
// PayBy   // * stripe visa
// Iban // * stripe
// name // * from clerk session
// orderAt // cartTable
export const statusEnum = pgEnum('status', ['Pending' , 'Processing' , 'Approve' , 'Delivered'  ]);
export const orderTable = pgTable("orderTable",{
    id: serial("id").primaryKey(),
    user_id: varchar("user_id",{length:255}).notNull(),
    quantity: integer("quantity").notNull(),
    price :integer('price').notNull() ,
    status : statusEnum('Status').default("Pending"),
    name : varchar("name",{length : 100}).notNull(),
    order_at: timestamp('order_at').defaultNow(),
});


export type Orders = InferModel<typeof orderTable>
export type AddOrder= InferModel<typeof orderTable , "insert">