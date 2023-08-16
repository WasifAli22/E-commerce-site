"use client"
import { IProduct } from '@/views/utils/mock';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import Action from '@/sections/increDecDel';
import { I } from 'drizzle-orm/db.d-b9835153';

interface Props {
    product: IProduct;
}
const CartItems : React.FC<Props> = ({ product }) => {
  return (
    <div className='items-center flex-wrap sm:my-4 sm:py-4 px-2 border-b-2'>
        <div className="md:flex w-[90%]">
            {/* product image */}
            <div className="sm:min-w-[100px] md:min-w-[130px]">
                <Image
                src={urlForImage(product?.image).url()}
                width={200}
                height={200}
                alt={product.title}
                className="object-contain"
                />
            </div>
            {/* products portion */}
            <div className="md:ml-8 mt-5 md:mt-0">
                {/* product name */}
                <h3 className='text-[#212121] mb-5 text-2xl font-bold'>{product.title}</h3>
                <h3 className='text-xl font-semibold mb-3'>Price: 
                <span className='text-[#212121]'> ${product.price}</span>
                </h3>
                <div className="flex flex-wrap flex-grow md:items-center mb-4 sm:mb-0">
                    <div className="my-2 sm:my-0">
                        <div key={product._id} className="cursor-pointer">
                            <Action key={product._id} product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
// {/* <div className='md:my-14 my-10 md:mx-24 mx-10'>
//             <h2 className='font-bold mb-8 text-left text-4xl'>Shopping Cart</h2>
//             <div className="grid grid-cols-12">
                
//                 <div className="lg:col-span-8 col-span-12 mb-5 lg:mb-0">
//                     <div className="flex justify-between w-[90%]">
//                         <div className="">
//                             <Image src="" height={250} width={250} alt='' className='rounded-[9px]' />
//                         </div>
//                         <div className="">
//                             <div className="flex justify-between mb-3">
//                                 {/* product title */}
//                                 <h3 className='text-[#212121] text-2xl font-bold'>Hello here is the best brand</h3>
//                                 {/* delete icon */}
//                                 <button type='button' className='ml-4'>
//                                     <AiOutlineDelete className='font-bold text-xl' />
//                                 </button>
//                             </div>
//                             <p className="font-semibold mb-2">Delivery Estimation</p>
//                             <p className='text-[#ffc700] mb-2'>5 Working Days</p>
//                             <div className="flex justify-between">
//                                 {/* price */}
//                                 <span className="font-bold">$</span>
//                                 {/* increment and decrement counter will be below */}

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Order summary */}
//                 <div className="lg:col-span-4 col-span-12">
//                     <div className="bg-slate-100 p-2">
//                         <h3 className='font-bold text-3xl mb-3 text-center'>Order Summary</h3>
//                         {/* Quantity */}
//                         <div className="flex justify-between font-semibold mb-2">
//                             <div>Quantity</div>
//                             <div>1 product</div>
//                         </div>
//                         {/* Total */}
//                         <div className="flex justify-between font-semibold">
//                             <div>Sub Total</div>
//                             <div>$</div>
//                         </div>
//                         <StripeCheckOutButton />
//                     </div>
//                 </div>
//             </div>
//         </div> */}