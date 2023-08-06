import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/index";
import { cartTable } from "@/lib/schema/cart";
import type { Cart , AddCart } from "@/lib/schema/cart";
import { v4 as uuid } from "uuid"
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";


export const GET = async (request : NextRequest , response: NextResponse) => {
    try {
      const user_id : string | any = cookies().get("user_id")?.value;
      // const res = await db.select().from(cartTable);
      const res = await db.select().from(cartTable).where(eq(cartTable.user_id, user_id ));
      return NextResponse.json( res  );
    } catch (error) {
      console.log((error as { message: string }).message);
      return NextResponse.json({ msg: "something went wrong" });
    }
  };

export const POST = async (request: NextRequest) => {
    const req : AddCart = await request.json()
    const uid = uuid() // it is next.js by default function for generating random string
    const setCookies = cookies() // cookies is also by default next.js function
    // console.log(cookies().get("user_id")?.value)
    const user_id = cookies().get("user_id")
    if (!user_id) {
        setCookies.set("user_id", uid)
    }

    try {
        if(req) {
           const res = await db.insert(cartTable).values({
                product_id: req.product_id,
                quantity: 1,
                user_id: cookies().get("user_id")?.value as string
            }).returning();
            return NextResponse.json({ message : "Product added successfully",result : res })
        }else {
            throw new Error("Some fields are missing like : {product_id,quantity} ")
        }
    } catch (error) {
        return NextResponse.json({ message : (error as {message : string}).message })
    }
}
export const DELETE = async (request : NextRequest) => {
    try {
        
      const user_id : string | any = cookies().get("user_id")?.value;
      
      const res = await db.delete(cartTable).where(eq(cartTable.user_id ,user_id )).returning()
      return NextResponse.json( res  );
    } catch (error) {
      console.log((error as { message: string }).message);
      return NextResponse.json({ msg: "something went wrong" });
    }
  
  }
