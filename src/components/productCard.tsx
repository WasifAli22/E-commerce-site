// Import required dependencies and components
import AddToCart from '@/views/AddToCart'
import { IProduct } from '@/views/utils/mock'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'
import Skeleton from './Skeleton'

// Define the interface for the Card component props
interface Card {
  data: IProduct[]
}

// ProductCard component to display individual product cards
const ProductCard: React.FC<Card> = ({ data }) => {

  return (
    <div className="grid grid-cols-12 gap-5">
      {data.map((i) => (
        <div className="lg:col-span-4 col-span-12 md:col-span-6" key={i._id}>

          {/* Product card container */}
          <div className="max-w-sm bg-white border border-gray-200 p-4 transition-all hover:shadow-2xl hover:scale-[1.05] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* Link to product detail page */}
            <Link href={`/detail/${i.slug.current}`}>
              {/* Product image */}
              <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[370px] h-[394px]' width={370} height={394} alt='image' />
            </Link>
            <div className="pt-5">
              {/* Product title */}
              <Link href={`/detail/${i.slug.current}`}>
                <h5 className="mb-2 text-2xl font-bold truncate text-ellipsis tracking-tight text-gray-900 dark:text-white">{i.title}</h5>
              </Link>
              {/* Product price */}
              <p className="mb-3 font-bold text-[#212121]">Price ${Number(i.price)}</p>
              {/* Product action buttons */}
              <div className="flex flex-col xl:flex-row flex-auto space-y-2 sm:space-y-0 md:gap-y-2 gap-y-0 md:flex-wrap justify-between">
                {/* Add to Cart button */}
                <AddToCart key={i._id} product={i} />
                {/* Read more button */}
                <Link href={`/detail/${i.slug.current}`} className="inline-flex w-[64%] xl:w-[48%] justify-center sm:justify-normal items-center bg-[#212121] font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid px-4 py-2 rounded-md text-white">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCard;
