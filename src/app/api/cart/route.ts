// Import required dependencies and modules
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/index";
import { cartTable } from "@/lib/schema/cart";
import type { Cart, AddCart } from "@/lib/schema/cart";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

// Handle GET request to fetch cart items
export const GET = async (request: NextRequest, response: NextResponse) => {
    try {
        const user_id: string | any = cookies().get("user_id")?.value;
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, user_id));
        return NextResponse.json(res);
    } catch (error) {
        console.log((error as { message: string }).message);
        return NextResponse.json({ msg: "Something went wrong" });
    }
};

// Handle POST request to add an item to the cart
export const POST = async (request: NextRequest) => {
    const req: AddCart = await request.json();
    const uid = uuid(); // Generate a random string using UUID
    const setCookies = cookies(); // Access cookies using Next.js headers
    const user_id = cookies().get("user_id");
    
    // Set a user_id cookie if not already present
    if (!user_id) {
        setCookies.set("user_id", uid);
    }

    try {
        if (req) {
            const res = await db.insert(cartTable).values({
                product_id: req.product_id,
                quantity: 1,
                user_id: cookies().get("user_id")?.value as string
            }).returning();
            return NextResponse.json({ message: "Product added successfully", result: res });
        } else {
            throw new Error("Some fields are missing like: {product_id, quantity}");
        }
    } catch (error) {
        return NextResponse.json({ message: (error as { message: string }).message });
    }
};

// Handle DELETE request to remove cart items
export const DELETE = async (request: NextRequest) => {
    try {
        const user_id: string | any = cookies().get("user_id")?.value;
        const res = await db.delete(cartTable).where(eq(cartTable.user_id, user_id)).returning();
        return NextResponse.json(res);
    } catch (error) {
        console.log((error as { message: string }).message);
        return NextResponse.json({ msg: "Something went wrong" });
    }
};
