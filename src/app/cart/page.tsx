import React from 'react'
import Image from 'next/image'
import StripeCheckOutButton from '@/views/Checkout'

const CartDetail = () => {
    return (
        <div className='md:my-14 my-10 md:mx-24 mx-10'>
            <div className="grid grid-cols-12">
                <h2 className='font-bold mb-8 text-left text-4xl'>Shopping Cart</h2>
                <div className="lg:col-span-8">
                    {/* <Image src={urlForImage(image).url()} className='m-auto object-cover w-[150px] h-[auto]' width={370} height={394} alt='image' /> */}
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