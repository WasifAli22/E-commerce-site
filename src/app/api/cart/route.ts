import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzel";
import { v4 as uuid } from "uuid"
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

cookies().get("user_id")?.value
fetch(`http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`)
export const GET = async (request: NextRequest) => {
    const req = request.nextUrl
    const uid = req.searchParams.get("user_id") as string
    if (!uid) {
        return NextResponse.json("There is no item in the cart")
    }
    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid))
        return NextResponse.json({ res })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong" })
    }
}

export const POST = async (request: NextRequest) => {
    const req = await request.json()
    const uid = uuid() // it is next.js by default function for generating random string
    const setCookies = cookies() // cookies is also by default next.js function
    // console.log(cookies().get("user_id")?.value)
    const user_id = cookies().get("user_id")
    if (!user_id) {
        setCookies.set("user_id", uid)
    }

    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get("user_id")?.value as string
        }).returning();
        return NextResponse.json({ res })
    } catch (error) {

    }
}
