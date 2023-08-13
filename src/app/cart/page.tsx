"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import StripeCheckOutButton from "@/views/Checkout";
import {
  IProduct,
  fetchDb,
  getProductData,
  fetchSanity,
} from "@/views/utils/mock";
import { urlForImage } from "../../../sanity/lib/image";
import image from "next/image";
import { client } from "@/lib/sanityClient";
import { fetchAndDispatchCartData } from "@/components/cartUtils";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";

const CartDetail = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const dbRes = await fetchDb();
            if (dbRes && dbRes.length > 0) {
                for (const cartItem of dbRes) {
                    const sanityResponse = await fetchSanity(cartItem.product_id);
                    console.log("sanityResponse",sanityResponse)
                   dispatch(cartActions.addToCart({ product: sanityResponse[0], quantity: cartItem.quantity }));
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, [dispatch]);

  return (
    <div className="md:my-14 my-10 md:mx-24 mx-10">
      <div className="grid grid-cols-12">
        <h2 className="font-bold mb-8 text-left text-4xl">Shopping Cart</h2>
        <div className="lg:col-span-8"></div>
        {/* Order summary */}
        <div className="lg:col-span-4">
          <div className="bg-slate-100 p-2">
            <h3 className="font-bold text-3xl text-center">Order Summary</h3>
            <div className="flex justify-between"></div>
            <div className="flex justify-between"></div>
            <StripeCheckOutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
// {data.map((i: any) => (
//     <div key={i._id}>
//         {/* {image && (
//             <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[150px] h-[auto]' width={370} height={394} alt='image' />
//         )} */}
//     </div>
// ))}
