import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import brand1 from "../../public/brands/bazar.webp"
import brand2 from "../../public/brands/brands2.webp"
import brand3 from "../../public/brands/brands3.webp"
import brand4 from "../../public/brands/brands4.webp"
import baner from "../../public/baner.webp"
import { AiOutlineShoppingCart } from "react-icons/ai"
const Baner = () => {
  return (
    <div className='md:my-12 my-6 md:mx-24 mx-10'>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12">
          <span className='h-[40px] w-[120px] bg-[#e1edff] text-[blue] rounded-sm flex items-center font-[600] justify-center'>Sale 70%</span>
          <h1 className="text-6xl text-[#212121] my-5 font-[700] ">An Industrial Take on Streetwear</h1>
          <p className="text-lg my-2 text-gray-500">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
          <button className='bg-[#212121] font-[600] transition all mb-3 hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid p-4 mt-5 text-white'>
            <Link href="/products" className='flex items-center'><AiOutlineShoppingCart className='mr-2 text-[20px]' />Start Shopping</Link>
          </button>
          <div className="flex gap-4 mt-5 items-center">
            <Image src={brand1} alt="firtst" width={100} height={35} />
            <Image src={brand2} alt="firtst" width={100} height={35} />
            <Image src={brand3} alt="firtst" width={100} height={35} />
            <Image src={brand4} alt="firtst" width={100} height={35} />
          </div>
        </div>
        <div className="lg:col-span-6 hidden lg:block">
          <div className="bg-[#ffece3] h-[600px] mt-[-35px] pl-[35px] w-[600px] rounded-full">
            <Image src={baner} alt='baner' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Baner