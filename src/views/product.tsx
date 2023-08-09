"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AddToCart from './AddToCart'
import Link from 'next/link'
import product1 from "../../public/product/product1.png"
import product2 from "../../public/product/product2.png"
import product3 from "../../public/product/product3.png"
import { Image as IImage } from 'sanity'
import { client } from '@/lib/sanityClient'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import { IProduct, getProductData } from './utils/mock';

const Product = async () => {
    const data: IProduct[] = await getProductData()

   
    return (
        <div className='md:my-12 my-10 md:mx-24 mx-10'>
            <div className="section-title text-center mb-14">
                <span className='text-[#0062f5] text-sm font-bold'>PRODUCTS</span>
                <h2 className='text-[#212121] font-bold text-[32px]'>Check What We Have</h2>
            </div>
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
                {/* <div className="grid grid-cols-12 gap-5"> */}
                {data.map((i) => (
                    <SwiperSlide key={i._id}>
                        {/* <div className="lg:col-span-4 col-span-12 md:col-span-6" > */}
                        <div className="max-w-sm bg-white border border-gray-200 p-4 rounded-lg transition-all hover:shadow-2xl hover:border hover:border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link href={`/detail/${i.slug.current}`}>
                                <Image src={urlForImage(i.image).url()} className='m-auto object-cover w-[370px] h-[394px]' width={370} height={394} alt='image' />
                            </Link>
                            <div className="pt-5">
                                <Link href={`/detail/${i.slug.current}`}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i.title}</h5>
                                </Link>
                                <p className="mb-3 font-bold text-[#212121]">{i.price}</p>
                                <div className="flex justify-between">
                                    {/* @ts-ignore server component */}
                                    <AddToCart product={i} />
                                    <Link href={`/detail/${i.slug.current}`} className="inline-flex items-center bg-[#212121] font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid px-4 py-2 rounded-md text-white">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </SwiperSlide>
                ))}
                {/* </div> */}
            </Swiper >
        </div>


    )
}

export default Product