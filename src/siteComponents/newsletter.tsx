import React from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const NewsLetter = () => {
    return (
        <div className='md:my-12 mb-10 mt-16 md:mx-24 mx-10'>
            <div className="grid grid-cols-6 m-auto">
                <div className="col-span-12 m-auto relative">
                    <div className="absolute text-[#f2f3f7] text-5xl lg:text-9xl font-extrabold top-[50px] left-0 lg:top-0 right-0 lg:right-[-20%] z-[-1]">Newsletter</div>
                    <h1 className='text-[#212121] text-3xl font-bold mb-4'>Subscribe Our Newsletter</h1>
                    <p className='text-[#212121] text-base font-[300] mb-4'>Get the latest information and promo offers directly</p>
                    <div className="flex items-center">
                        <Input type="email" placeholder='Input email address' className='relative border focus:border-0 focus:outline-none border-[gray] border-solid h-[42px] py-[10px] pr-0 lg:pr-[120px] pl-[20px]' />
                        <button className="bg-[#212121] ml-4 font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black w-[155px] h-[42px] hover:border-solid px-2 py-1 rounded-md text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewsLetter