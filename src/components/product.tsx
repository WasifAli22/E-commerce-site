// Import required dependencies and components
"use client"
import { IProduct } from '@/views/utils/mock';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import Link from 'next/link';
import Image from 'next/image';
import AddToCart from '@/views/AddToCart';
import { urlForImage } from '../../sanity/lib/image';

// Define the Props interface for the Product component
interface Props {
    product: IProduct[];
}

// Component to display a list of products in a Swiper slider
const Product: React.FC<Props> = ({ product }) => {

    return (
        <div className='md:my-12 my-10 md:mx-24 mx-10'>
            <div className="section-title text-center mb-14">
                <span className='text-[#0062f5] text-sm font-bold'>PRODUCTS</span>
                <h2 className='text-[#212121] font-bold text-[32px]'>Check What We Have</h2>
            </div>
            {/* Initialize the Swiper slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                {product.map((i) => (
                    <SwiperSlide key={i._id}>
                        <div className="max-w-sm bg-white border border-gray-200 p-4 rounded-lg transition-all hover:shadow-2xl hover:border hover:border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                            {/* Link to the detail page */}
                            <Link href={`/detail/${i.slug.current}`}>
                                <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[370px] h-[394px]' width={370} height={394} alt='image' />
                            </Link>
                            <div className="pt-5">
                                <Link href={`/detail/${i.slug.current}`}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate text-ellipsis">{i.title}</h5>
                                </Link>
                                <p className="mb-3 font-bold text-[#212121]">Price ${i.price}</p>
                                <div className="flex justify-between">
                                    {/* AddToCart component to add products to cart */}
                                    <AddToCart key={i.slug.current} product={i} />
                                    {/* Link to the detail page */}
                                    <Link href={`/detail/${i.slug.current}`} className=" cursor-pointer inline-flex items-center bg-[#212121] font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid px-4 py-2 rounded-md text-white">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Product;
