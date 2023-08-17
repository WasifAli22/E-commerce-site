"use client"
// Import necessary modules and components
import React from 'react';
import StripeCheckOutButton from '@/views/Checkout';
import { CartRootState } from '@/types/cart';
import { useSelector } from 'react-redux';
import { IProduct } from '@/views/utils/mock';
import CartItems from '@/components/cart/cartItems';
import { BsBagCheckFill } from 'react-icons/bs';

// CartDetail component to display shopping cart information
const CartDetail = () => {
    // Get cart items and related information from the Redux store
    const cartItems: IProduct[] = useSelector((state: CartRootState) => state.cart.items);
    const cartItemQuantity = useSelector(
        (state: CartRootState) => state.cart.totalQuantity
    );
    const cartTotalAmount = useSelector(
        (state: CartRootState) => state.cart.totalAmount
    );

    return (
        <div className='md:my-14 my-10 md:mx-24 mx-10'>
            {/* Shopping Cart Title */}
            <h2 className='font-bold mb-8 text-left text-4xl justify-center'>Shopping Cart</h2>

            <div className="grid grid-cols-12">

                <div className="lg:col-span-8 col-span-12 mb-5 lg:mb-0">
                    {/* Display cart items */}
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <CartItems key={item._id} product={item} />
                        ))
                    ) : (
                        <>
                            <p className='icon text-xl mb-2 text-center mx-auto '>
                                <BsBagCheckFill size={40} className='h-30 w-30' />
                            </p>
                            <h2 className='font-bold mb-8 text-center text-3xl justify-center'>Your cart is empty</h2>
                        </>
                    )}
                </div>
                {/* Order summary */}
                <div className="lg:col-span-4 col-span-12">
                    <div className="bg-slate-100 rounded-sm py-2 px-4">
                        <h3 className='font-bold text-3xl mb-3 text-center'>Order Summary</h3>
                        {/* Display total quantity */}
                        <div className="flex justify-between font-semibold mb-2">
                            <div>Quantity</div>
                            <div> {cartItemQuantity} product</div>
                        </div>
                        {/* Display total amount */}
                        <div className="flex justify-between font-semibold">
                            <div>Sub Total</div>
                            <div>${cartTotalAmount}</div>
                        </div>
                        {/* Display checkout button */}
                        <StripeCheckOutButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetail;

// Note: The commented-out section appears to be an alternative image rendering approach.
// It could be an alternative implementation for rendering images in the cart.
// However, it's currently disabled in the code.
