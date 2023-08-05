import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/index";
import { cartTable } from "@/lib/schema/cart";
import { eq, sql } from "drizzle-orm";


export async function GET(request : Request , context : any) {

  const { id } = context.params;
    const res = await db.select().from(cartTable).where(eq(cartTable.product_id, id as string));
    if(request.method !== 'GET') {
        throw new Error("Invalid Get mettod");
    }
    console.log()
    return NextResponse.json({ Welcome : "Welcome in my E-Store", Your_Data : res})
}

export async function DELETE( request: NextRequest , context : any) {
    try {
        const { id } = context.params;
        console.log("id from query is",id)
    
    
        if (!id) {
          throw new Error("Invalid id");
        }
    
        const deletedUserIds = await db
          .delete(cartTable)
          .where(eq(cartTable.product_id, id as string))
          .returning({ deletedId: cartTable.product_id, withUserId: cartTable.user_id });
    
       // return NextResponse.json(deletedUserIds);
       return new Response(JSON.stringify({Done : "Successfully deleted user",deletedDetails : deletedUserIds}), {
        headers: { 'Content-Type': 'application/json' },
      });
      } catch (error) {
        console.log("Error:", error);
        //return NextResponse.json({ message: (error as { message: string }).message });
        return new Response(JSON.stringify({ message: (error as { message: string }).message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
    }
}