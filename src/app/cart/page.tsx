import React from 'react'
import Image from 'next/image'
import StripeCheckOutButton from '@/views/Checkout'
import { IProduct, getProductData } from '@/views/utils/mock'
import { urlForImage } from '../../../sanity/lib/image'
import image from 'next/image'
import { AiOutlineDelete } from "react-icons/ai"
const CartDetail = async () => {



    return (
        <div className='md:my-14 my-10 md:mx-24 mx-10'>
            <h2 className='font-bold mb-8 text-left text-4xl'>Shopping Cart</h2>
            <div className="grid grid-cols-12">
                
                <div className="lg:col-span-8 col-span-12 mb-5 lg:mb-0">
                    <div className="flex justify-between w-[90%]">
                        <div className="">
                            <Image src="" height={250} width={250} alt='' className='rounded-[9px]' />
                        </div>
                        <div className="">
                            <div className="flex justify-between mb-3">
                                {/* product title */}
                                <h3 className='text-[#212121] text-2xl font-bold'>Hello here is the best brand</h3>
                                {/* delete icon */}
                                <button type='button' className='ml-4'>
                                    <AiOutlineDelete className='font-bold text-xl' />
                                </button>
                            </div>
                            <p className="font-semibold mb-2">Delivery Estimation</p>
                            <p className='text-[#ffc700] mb-2'>5 Working Days</p>
                            <div className="flex justify-between">
                                {/* price */}
                                <span className="font-bold"></span>
                                {/* increment and decrement counter will be below */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* Order summary */}
                <div className="lg:col-span-4 col-span-12">
                    <div className="bg-slate-100 p-2">
                        <h3 className='font-bold text-3xl mb-3 text-center'>Order Summary</h3>
                        {/* Quantity */}
                        <div className="flex justify-between font-semibold mb-2">
                            <div>Quantity</div>
                            <div>1 product</div>
                        </div>
                        {/* Total */}
                        <div className="flex justify-between font-semibold">
                            <div>Sub Total</div>
                            <div>$</div>
                        </div>
                        <StripeCheckOutButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetail
// {data.map((i: any) => (
//     <div key={i._id}>
//         {/* {image && (
//             <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[150px] h-[auto]' width={370} height={394} alt='image' />
//         )} */}
//     </div>
// ))}