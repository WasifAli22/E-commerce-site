import React from 'react'
import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'

import promtion2 from "../../public/promotion/promotion2.webp"
import { urlForImage } from '../../sanity/lib/image'


export const getPromoData = async () => {
    const response = await client.fetch(`*[_type=='promo']{
    title,discount,
    price,image
  }`)
    return response
}
const Promo = async () => {
    const promoData = await getPromoData()

    return (
        <>
            {
                promoData.map((i: any) => (
                    <div className="lg:col-span-3 md:col-span-6 col-span-12" key={i}>
                        <div className="bg-[#efe1c7] pt-5 w-full inline-block h-full relative">
                            <div className="text-center">
                                <p className='font-[400] text-[15px]'> {i.title} </p>
                                <div className="price mb-10 lg:mb-14 xl:mb-10"><span className='line-through'>{i.discount}</span><span className='font-[600] text-lg'>{i.price}</span></div>
                                <Image src={urlForImage(i.image).url()} className='m-auto' width={282} height={362} alt='image' />

                                {/* <Image className='m-auto' src={ } width={282} height={362} alt='d' /> */}
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Promo