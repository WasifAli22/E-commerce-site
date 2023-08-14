import React, { useState } from 'react'
import { urlForImage } from '../../../../sanity/lib/image'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import Image from 'next/image'
import Size from '@/sections/size'
import AddToCart from '@/views/AddToCart'
import { getProductData } from '@/views/utils/mock'
import { IProduct } from '@/views/utils/mock'
import Action from '@/sections/increDecDel'
// dynamic data getting  from santiy
const productDdata = async (productSlug: string) => {
    const res = await client.fetch(`*[_type == "product" && slug.current == $productSlug] {
        title,
        price,
        care,
        _id,    
        description,
        image,
        category ->{
            name
        },
        slug,
    }`, {
      productSlug
  });
    return res
}

const page = async ({ params }: { params: { id: string } }) => {
    const slug = params.id;
    const data: IProduct[] = await productDdata(slug);
    console.log("data of object is",data)

    return (
        <>
            {
                data && data.map((i) => (
                    <div key={i._id} className="md:my-14 my-10 md:mx-24 mx-10">
    
                    <div className="flex flex-wrap lg:flex-nowrap gap-6 ">
                        <div className="flex">
                            <div className="">
                                <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[150px] h-[auto]' width={370} height={394} alt={i.name} />
                            </div>
                            <div className="ml-3">
                                <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[370px] h-full' width={370} height={394} alt={i.name} />
                            </div>
                        </div>
                        <div className="">
                            <h1 className="text-6xl text-[#212121] mb-5 font-[700]">{i.title}</h1>
                            <div>
                                <p className="font-bold text-base navsc:text-[0.9rem] leading-5 tracking-wider text-[#212121] uppercase">Select Size</p>
                                <div className="">
                                    {/* size component */}
                                    <Size />
                                </div>
                                <p className='font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-8'>Price : ${i.price}</p>
                                <div className="mt-8">
                                    <span className='font-semibold'>Category:</span> {i.category.name}
                                </div>
                                {/* increse or decrease product action here */}
                                <div className="mt-4 flex max-w-none md:max-w-sm  justify-between  items-center">
                                    <Action key={i._id} product={i}/>
                                </div>
                                <div className="mt-8">
                                    <AddToCart product={i}/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mb-8 mt-16">
                        <h2 className='font-bold mb-8 text-3xl text-center'>Product Information</h2>
                        <div className="md:flex flex-wrap mb-4">
                            <h3 className='uppercase font-bold mb-3 md:mb-0 text-base text-[#666] leading-5 tracking-wider flex-1'>product Detail:</h3> <p className='text-lg flex-[2] text-gray-500'>{i.description}</p>
                        </div>
                        <div className="md:flex flex-wrap">
                            <h3 className='uppercase font-bold mb-3 md:mb-0 text-base text-[#666] leading-5 tracking-wider flex-1'>product Care:</h3> <p className='text-lg flex-[2]  text-gray-500'>{i.care}</p>
                        </div>
                    </div>
                </div>
                ))
            }
            
        </>
    )
}

export default page