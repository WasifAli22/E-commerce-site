"use client"
import React from 'react'
import Image from 'next/image'
import StripeCheckOutButton from '@/views/Checkout'
import { CartRootState } from '@/types/cart';
import { useSelector } from 'react-redux';
import { IProduct } from '@/views/utils/mock';
import { urlForImage } from '../../../sanity/lib/image';
import CartItems from '@/components/cart/cartItems';

const CartDetail = async () => {
    const cartItems : IProduct[] = useSelector((state: CartRootState) => state.cart.items);
    const cartItemQuantity = useSelector(
     (state: CartRootState) => state.cart.totalQuantity
    );

    const cartTotalAmount = useSelector(
        (state: CartRootState) => state.cart.totalAmount
    );
    
    return (
        <div className='md:my-14 my-10 md:mx-24 mx-10'>
            <div className="">
                <h2 className='font-bold mb-8 text-left text-4xl  justify-center '>Shopping Cart</h2>
               <div className="flex flex-col">
                {
                        cartItems.length > 0 ? (
                            cartItems.map((i) => (
                                <CartItems key={i._id} product={i} />
                            ))
                        ) : null
                    }
               </div>
                {/* Order summary */}
                <div className="lg:col-span-4">
                    <div className="bg-slate-100 p-2">
                        <h3 className='font-bold text-3xl text-center'>Order Summary</h3>
                        <div className="flex justify-between"></div>
                        <div className="flex justify-between"></div>
                        <StripeCheckOutButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetail
/*
<div className="flex justify-center flex-col md:flex-row items-start relative max-w-[2100px] mx-auto">
                    { cartItems.length > 0 && 
                        cartItems.map((i) => (
                            <div key={i._id}  className="">
                                 <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[150px] h-[auto]' width={370} height={394} alt='image' />
                            </div>
                        )) 
                    }
                </div>
*/