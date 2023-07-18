import React from 'react'
import Image from 'next/image'
import StripeCheckOutButton from '@/views/Checkout'
import { Iproduct, getProductData } from '@/views/utils/mock'
import { urlForImage } from '../../../sanity/lib/image'
import image from 'next/image'

const CartDetail = async () => {
    const data: Iproduct[] = await getProductData()
    const image = data.find((i) => i._id)?.image    
    return (
        <div className='md:my-14 my-10 md:mx-24 mx-10'>
            <div className="grid grid-cols-12">
                <h2 className='font-bold mb-8 text-left text-4xl'>Shopping Cart</h2>
                <div className="lg:col-span-8">
                    {data.map((i: any) => (
                        <div key={i._id}>
                            {/* {image && (
                                <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[150px] h-[auto]' width={370} height={394} alt='image' />
                            )} */}
                        </div>
                    ))}
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