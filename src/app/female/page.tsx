import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'
import AddToCart from '@/views/AddToCart'

// getting data from santiy
export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product" && category->name == "Female" ] {
    title,
    price,
    _id,
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
    image: IImage,
}
const Female = async () => {
    const data: Iproduct[] = await getProductData()

    return (
        <div>
            <div className='md:my-12 mb-10 mt-16 md:mx-24 mx-10'>
                <div className="grid grid-cols-12 gap-5">
                    {data.map((i: any) => (
                        <div className="lg:col-span-4 col-span-12 md:col-span-6" key={i._id}>
                            <div className="max-w-sm bg-white border border-gray-200 p-4 transition-all hover:shadow-2xl hover:scale-[1.05] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link href={`/detail/${i._id}`}>
                                    <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[370px] h-[394px]' width={370} height={394} alt='image' />

                                </Link>
                                <div className="pt-5">
                                    <Link href={`/detail/${i._id}`}>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i.title}</h5>
                                    </Link>
                                    <p className="mb-3 font-bold text-[#212121]">{i.price}</p>
                                    <div className="flex justify-between">
                                        {/* @ts-ignore server component */}
                                        <AddToCart />
                                        <Link href={`/detail/${i._id}`} className="inline-flex items-center bg-[#212121] font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid px-4 py-2 rounded-md text-white">
                                            Read more
                                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Female