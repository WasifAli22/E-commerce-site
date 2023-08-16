"use client";
import getStipePromise from "@/lib/stripe";
import { CartRootState } from "@/types/cart";
import { useSelector } from "react-redux";
import { IProduct } from "./utils/mock";


const StripeCheckOutButton = () => {
  const cartItems: IProduct[] = useSelector((state: CartRootState) => state.cart.items);
  console.log("cartItems",cartItems)
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(cartItems),
    });

    const data = await response.json();
    console.log("checkout status",data)
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="py-5 text-center">
      <button
        className="bg-[#212121] font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black w-[155px] h-[42px] hover:border-solid px-2 py-1 rounded-md text-white"
        onClick={handleCheckout}
      >
        Check out
      </button>
    </div>
  );
};

export default StripeCheckOutButton;