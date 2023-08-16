import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { urlForImage } from '../../sanity/lib/image'
import React from 'react'
import { Image as IImage } from 'sanity'
import brand1 from "../../public/brands/bazar.webp"
import brand2 from "../../public/brands/brands2.webp"
import brand3 from "../../public/brands/brands3.webp"
import brand4 from "../../public/brands/brands4.webp"
import baner from "../../public/baner.webp"
import { AiOutlineShoppingCart } from "react-icons/ai"

// getting data from santiy
export const getBannerData = async () => {
  const res = await client.fetch(`*[_type=='banner']{
  title,
  description,
  _id,
  sale
}`)
  return res
}

// Interface for type safety

interface Ibanner {
  title: String,
  _id: string,
  description: string,
 // image: IImage,
  sale : string
}

const Baner = async () => {
  const data: Ibanner[] = await getBannerData()
   //console.log("banner data",data)

  return (
    <div className='md:my-12 my-6 md:mx-24 mx-10'>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12">

          {data.map((item) => (
            <div key={item._id}>
              <span className='h-[40px] w-[120px] bg-[#e1edff] text-[blue] rounded-sm flex items-center font-[600] justify-center'>{item.sale}</span>
              <h1 className="text-6xl text-[#212121] my-5 font-[700]" >{item.title}</h1>
              <p className="text-lg my-2 text-gray-500">{item.description}</p>


              <button className='bg-[#212121] font-[600] transition all mb-3 hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid p-4 mt-5 text-white'>
                <Link href="/products" className='flex items-center'><AiOutlineShoppingCart className='mr-2 text-[20px]' />Start Shopping</Link>
              </button>
              <div className="flex gap-4 mt-5 items-center">
                {/* <Image src={urlForImage(item.image).url()} width={100} height={35} alt='image' /> */}
                <Image src={brand1} alt="firtst" width={100} height={35} />
                <Image src={brand2} alt="firtst" width={100} height={35} />
                <Image src={brand3} alt="firtst" width={100} height={35} />
                <Image src={brand4} alt="firtst" width={100} height={35} />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-6 hidden lg:block">
          <div className="bg-[#ffece3] h-[600px] mt-[-35px] pl-[35px] w-[600px] rounded-full">
            <Image src={baner}  alt='baner' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Baner