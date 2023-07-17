import React from 'react'
import { client } from '@/lib/sanityClient'
import Promo from '@/sections/promo'
import promtion1 from "../../public/promotion/promotion1.webp"
import promtion2 from "../../public/promotion/promotion2.webp"
import promtion3 from "../../public/promotion/promotion3.webp"
import Image from 'next/image'


const getPromotion = async () => {
    const res = await client.fetch(`*[_type=='promotion']{
        card1title,
        card1desc,
        discount,card2title,card2desc
  }`)
    return res
}

const Promotion = async () => {
    const data = await getPromotion()
    // console.log(data)
    return (
        <div className='md:my-12 my-10 md:mx-24 mx-10'>
            <div className="section-title text-center mb-14">
                <span className='text-[#0062f5] text-sm font-bold'>PROMOTIONS</span>
                <h2 className='text-[#212121] font-bold text-[32px]'>Our Promotions Events</h2>
            </div>
            <div className="grid grid-cols-12 mt-4 gap-4">
                <div className="lg:col-span-6 col-span-12">
                    {data.map((item: any) => (
                        <>
                            <div className="lftCard bg-[#d6d6d8] text-[#212121] flex items-center flex-col lg:flex-row justify-between px-8">

                                <div className="" key={item.title}>
                                    <h3 className='font-bold text-2xl'>{item.card1tFitle}
                                        <span className='font-[800] text-4xl'>{item.discount}</span>
                                    </h3>
                                    <p className='font-[400] text-lg'>{item.card1desc}</p>
                                </div>
                                <Image src={promtion1} alt="promotions" width={282} height={218} />
                            </div>
                            <div className="lftCard bg-[#212121] mt-5 text-white pt-12 pb-8 flex items-center justify-center flex-col px-8">
                                <h3 className='font-[800] text-4xl mb-4 text-white'>{item.card2title}</h3>
                                <p className='font-[400] text-sm mb-1'>{item.card2desc}</p>
                                <button className='text-[17px] font-[700] bg-[#474747] text-white mt-1 rounded-md py-2 px-9'>DINEWEEKENDSALE</button>
                            </div>
                        </>
                    ))}
                </div>
                {/* @ts-ignore server component */}
                <Promo/>

                {/* <div className="lg:col-span-3 md:col-span-6 col-span-12">
                    <div className="bg-[#d7d7d9] pt-5 w-full inline-block h-full relative">
                        <div className="text-center">
                            <p className='font-[400] text-[15px]'>Flex Push Button Bomber</p>
                            <div className="price mb-9 lg:mb-14 xl:mb-9"><span className='line-through'>$225.00</span><span className='font-[600] text-lg'>$190.00</span></div>
                            <Image className='m-auto' src={promtion3} width={282} height={368} alt='d' />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Promotion 