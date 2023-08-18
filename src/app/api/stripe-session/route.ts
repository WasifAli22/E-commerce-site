// Import required dependencies and modules
import { IProduct } from "@/views/utils/mock";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Get the Stripe secret key from environment variables
const key = process.env.STRIPE_SECRET_KEY || "";

// Initialize the Stripe instance
const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

// Handle GET request to retrieve the Stripe checkout session
export async function GET(req: NextRequest) {
  try {
    // Retrieve the customer session ID from cookies
    const customer_session = cookies().get("customer_session")?.value;

    // Retrieve the Stripe checkout session using the customer session ID
    const session = await stripe.checkout.sessions.retrieve(
      customer_session as string
    );
    
    return NextResponse.json({ session });
  } catch (error) {
    // Return an error response in case of exceptions
    return NextResponse.json({ message: "Some error occurred with customerSession" });
  }
}

// Handle POST request to create a new Stripe checkout session
export async function POST(request: NextRequest) {
  // Parse the JSON body of the request
  const body = await request.json();
  const setCookies = cookies();
  const customer_session = cookies().get("customer_session");

  try {
    if (body.length > 0) {
      // Create a new Stripe checkout session using the provided product data
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "required",
        shipping_options: [
          { shipping_rate: "shr_1Ng0OmHNdM7cJCS3TIIm3hIv" },  
          { shipping_rate: "shr_1Ng0NXHNdM7cJCS30S6SVQCn" },
        ],
        invoice_creation: {
          enabled: true,
        },
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/canceled`,
      });

      // Set the customer session cookie if not already present
      if (!customer_session) {
        setCookies.set("customer_session", session.id);
      }
      
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);
    // Return an error response in case of exceptions
    return NextResponse.json(err.message);
  }
}
