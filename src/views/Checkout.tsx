// Import necessary modules and components
"use client";
import getStipePromise from "@/lib/stripe";
import { CartRootState } from "@/types/cart";
import { useSelector } from "react-redux";
import { IProduct } from "./utils/mock";
import toast from "react-hot-toast";

// Component for the Stripe checkout button
const StripeCheckOutButton = () => {
  // Get cart items from Redux store
  const cartItems: IProduct[] = useSelector((state: CartRootState) => state.cart.items);

  // Function to handle the checkout process
  const handleCheckout = async () => {
    try {
      // Initialize Stripe using the getStipePromise function
      const stripe = await getStipePromise();
      
      // Send cart items to the server to create a Stripe session
      const response = await fetch("/api/stripe-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(cartItems),
      });
      
      // Parse the response data
      const data = await response.json();

      // If session is created, redirect to Stripe checkout
      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      } else {
        // Display an error toast if session creation fails
        toast.error(data.message)
      }
    } catch (error) {
      console.log("stripe error",error)
    }
  }
  
  // Render the Stripe checkout button
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

// Export the StripeCheckOutButton component
export default StripeCheckOutButton;
