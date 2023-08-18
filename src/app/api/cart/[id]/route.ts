// Import required dependencies and modules
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/index";
import { cartTable } from "@/lib/schema/cart";
import { eq, sql } from "drizzle-orm";

// Handle GET request to fetch cart items by product ID
export async function GET(request: Request, context: any) {
    try {
        const { id } = context.params;
        // Fetch cart items with a matching product ID
        const res = await db.select().from(cartTable).where(eq(cartTable.product_id, id as string));

        // Check if the request method is not GET
        if (request.method !== 'GET') {
            throw new Error("Invalid GET method");
        }

        // Return a JSON response with fetched cart items
        return NextResponse.json({ Welcome: "Welcome to my E-Store", Your_Data: res });
    } catch (error) {
        console.log("Error:", error);
        // Return an error response in case of exceptions
        return new Response(JSON.stringify({ message: (error as { message: string }).message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// Handle DELETE request to remove cart items by product ID
export async function DELETE(request: NextRequest, context: any) {
    try {
        const { id } = context.params;
        console.log("id from query is", id);

        if (!id) {
            throw new Error("Invalid id");
        }

        // Delete cart items with a matching product ID and return deleted details
        const deletedUserIds = await db
            .delete(cartTable)
            .where(eq(cartTable.product_id, id as string))
            .returning({ deletedId: cartTable.product_id, withUserId: cartTable.user_id });

        // Return a JSON response indicating successful deletion
        return new Response(JSON.stringify({ Done: "Successfully deleted user", deletedDetails: deletedUserIds }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.log("Error:", error);
        // Return an error response in case of exceptions
        return new Response(JSON.stringify({ message: (error as { message: string }).message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
