import React from 'react'
import promtion1 from "../../public/promotion/promotion1.webp"
import promtion2 from "../../public/promotion/promotion2.webp"
import promtion3 from "../../public/promotion/promotion3.webp"
import Image from 'next/image'
const Promotion = () => {
    return (
        <div className='md:my-12 my-10 md:mx-24 mx-10'>
            <div className="section-title text-center mb-14">
                <span className='text-[#0062f5] text-sm font-bold'>PROMOTIONS</span>
                <h2 className='text-[#212121] font-bold text-[32px]'>Our Promotions Events</h2>
            </div>
            <div className="grid grid-cols-12 mt-4 gap-4">
                <div className="lg:col-span-6 col-span-12">
                    <div className="lftCard bg-[#d6d6d8] text-[#212121] flex items-center flex-col lg:flex-row justify-between px-8">
                        <div className="">
                            <h3 className='font-bold text-2xl'>GET UP TO <span className='font-[800] text-4xl'>60%</span></h3>
                            <p className='font-[400] text-lg'>For the summer season</p>
                        </div>
                        <Image src={promtion1} alt="promotions" width={282} height={218} />
                    </div>
                    <div className="lftCard bg-[#212121] mt-5 text-white pt-12 pb-8 flex items-center justify-center flex-col px-8">
                        <h3 className='font-[800] text-4xl mb-4 text-white'>GET 30% Off</h3>
                        <p className='font-[400] text-sm mb-1'>USE PROMO CODE</p>
                        <button className='text-[17px] font-[700] bg-[#474747] text-white mt-1 rounded-md py-2 px-9'>DINEWEEKENDSALE</button>
                    </div>
                </div>
                <div className="lg:col-span-3 md:col-span-6 col-span-12">
                    <div className="bg-[#efe1c7] pt-5 w-full inline-block h-full relative">
                        <div className="text-center">
                            <p className='font-[400] text-[15px]'>Flex Sweatshirt</p>
                            <div className="price mb-10 lg:mb-14 xl:mb-10"><span className='line-through'>$100.00</span><span className='font-[600] text-lg'>$75.00</span></div>
                            <Image className='m-auto' src={promtion2} width={282} height={362} alt='d'/>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 md:col-span-6 col-span-12">
                    <div className="bg-[#d7d7d9] pt-5 w-full inline-block h-full relative">
                        <div className="text-center">
                            <p className='font-[400] text-[15px]'>Flex Push Button Bomber</p>
                            <div className="price mb-9 lg:mb-14 xl:mb-9"><span className='line-through'>$225.00</span><span className='font-[600] text-lg'>$190.00</span></div>
                            <Image className='m-auto' src={promtion3} width={282} height={368} alt='d'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion 