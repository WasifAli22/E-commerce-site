import React from 'react'
import feature from "../../public/feature.webp"
import Image from 'next/image'
import { client } from '@/lib/sanityClient'

import Link from 'next/link'

export const getUnique = async () => {
    const response = await client.fetch(`*[_type=='unique']{
    title,description
  }`)
    return response
}
const DifferFromOther = async () => {
    const data = await getUnique()
    return (
        <div className='md:my-12 mb-10 mt-16 md:mx-24 mx-10'>
            <div className="w-full text-end">
                <h1 className='text-[#212121] text-left text-4xl lg:w-[45%] mb-4 lg:ml-auto font-bold lg:text-end'>Unique and Authentic Vintage Designer Jewellery</h1>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="lg:col-span-4 relative md:col-span-12 col-span-12">
                    <div className="font-bold text-[#212121] text-6xl lg:text-8xl absolute opacity-[.07] z-[1]">Different from others</div>
                    <div className="grid grid-cols-12">
                        {data.map((g: any) => (
                            <div className="lg:col-span-6 col-span-12" key={g}>
                                <div className="grid grid-cols-12">
                                    <div className="mb-4 col-span-12">
                                        <h3 className='text-[#212121] text-lg font-bold'>{g.title}</h3>
                                        <p className='text-[#212121] font-[300] text-base'>{g.description}</p>
                                    </div>
                                    <div className="mb-4 col-span-12">
                                        <h3 className='text-[#212121] text-lg font-bold'>{g.title}</h3>
                                        <p className='text-[#212121] font-[300] text-base'>{g.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-4 m-auto md:col-span-6 col-span-12">
                    <Image src={feature} width={300} height={350} alt='feature' />
                </div>
                <div className="lg:col-span-4 m-auto md:col-span-6 col-span-12 h-full inline-block">
                    <p className='text-justify text-base text-[#212121]'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched
                        attention to detail and care. The Natural color is the actual natural color of the fiber,
                        undyed and 100% traceable.</p>
                    <Link href='/products' >
                        <button className="bg-[#212121] mt-8 font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black w-[150px] h-[42px] hover:border-solid px-2 py-1 rounded-md text-white">See All products</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DifferFromOther