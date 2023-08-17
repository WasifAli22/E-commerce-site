import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib";
import { orderTable } from "@/lib/schema/orders";
import type { Orders , AddOrder } from "@/lib/schema/orders";


export async function POST(req: NextRequest) {
    try {
      const order = (await req.json()) as AddOrder;
      const orderRes = await db.insert(orderTable).values({
        name: order.name,
        user_id: order.user_id,
        quantity: order.quantity,
        price: order.price
      });
      return new NextResponse(JSON.stringify(orderRes));
    } catch (error: any) {
      return NextResponse.json(error.message);
    }
  }