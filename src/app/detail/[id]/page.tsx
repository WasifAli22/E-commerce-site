import React from 'react'
import { urlForImage } from '../../../../sanity/lib/image'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import Image from 'next/image'
// getting data from santiy
export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"] {
    title,
    price,
    care,
    _id,    
    description,
    image,
    category ->{
        name
    }
  }`)
    return res
}
// Interface for type safety

interface Iproduct {
    title: String,
    _id: string,
    price: string,
    care: string,
    description: string,
    image: IImage,
}
const page = async ({ params }: { params: { id: string } }) => {
    const data: Iproduct[] = await getProductData()
    const image = data.find((i) => i._id === params.id)?.image
    const title = data.find((i) => i._id === params.id)?.title
    const description = data.find((i) => i._id === params.id)?.description
    const care = data.find((i) => i._id === params.id)?.care

    // console.log('params', params)
    return (
        <>
            <div className="md:my-14 my-10 md:mx-24 mx-10">
                {/* {data.map((i: any) => (ssss
                    <div className="" key={image._id}>
                        <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[370px] h-[394px]' width={370} height={394} alt='image' />
                    </div>
                ))} */}

                <div className="flex gap-6 ">
                    {image && (
                        <div className="flex">
                            <div className="">
                                <Image src={urlForImage(image).url()} className='m-auto object-cover w-[150px] h-[auto]' width={370} height={394} alt='image' />
                            </div>
                            <div className="ml-3">
                                <Image src={urlForImage(image).url()} className='m-auto object-cover w-[370px] h-full' width={370} height={394} alt='image' />
                            </div>
                        </div>
                    )}
                    <div className="">
                        <h1 className="text-6xl text-[#212121] my-5 font-[700]">{title}</h1>
                        <div>
                            <p className="font-bold text-base navsc:text-[0.9rem] leading-5 tracking-wider text-[#212121] uppercase">Select Size</p>
                            <div className="flex gap-4 mt-5">
                                <button className="rounded-full bg-gray-100 hover:bg-gray-200 duration-150 ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center bg-gray-300">XS</button>
                                <button className="rounded-full bg-gray-100 hover:bg-gray-200 duration-150 ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center bg-gray-100">S</button>
                                <button className="rounded-full bg-gray-100 hover:bg-gray-200 duration-150 ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center bg-gray-100">M</button>
                                <button className="rounded-full bg-gray-100 hover:bg-gray-200 duration-150 ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center bg-gray-100">L</button>
                                <button className="rounded-full bg-gray-100 hover:bg-gray-200 duration-150 ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center bg-gray-100">XL</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-8 mt-16">
                    <h2 className='font-bold mb-8 text-3xl text-center'>Product Information</h2>
                    <div className="flex flex-wrap mb-4">
                        <h3 className='uppercase font-bold text-base text-[#666] leading-5 tracking-wider flex-1'>product Detail:</h3> <p className='text-lg flex-[2] text-gray-500'>{description}</p>
                    </div>
                    <div className="flex flex-wrap">
                        <h3 className='uppercase font-bold text-base text-[#666] leading-5 tracking-wider flex-1'>product Care:</h3> <p className='text-lg flex-[2]  text-gray-500'>{care}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page