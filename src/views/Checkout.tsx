"use client";
import getStipePromise from "@/lib/stripe";

const products = [
  {
    product: 1,
    name: "Stripe Product",
    price: 400,
    quantity: 3,
  },
  {
    product: 2,
    name: "Stripe Product2",
    price: 40,
    quantity: 2,
  },
  {
    product: 3,
    name: "Stripe Product23",
    price: 4000,
    quantity: 1,
  },
];

const StripeCheckOutButton = () => {
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
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