"use client"
import { IProduct } from '@/views/utils/mock';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import Action from '@/sections/increDecDel';

interface Props {
    product: IProduct;
}
const CartItems : React.FC<Props> = ({ product }) => {
  return (
    <div className='<div className="flex items-center flex-wrap sm:my-4 sm:py-4 px-2 border-b-2">'>
        <div className="lg:w-1/2 sm:min-w-[290px]">
            {/* product image */}
            <div className="sm:min-w-[100px] md:min-w-[130px]">
                <Image
                src={urlForImage(product?.image).url()}
                width={200}
                height={200}
                alt={product.name}
                className="object-contain"
                />
            </div>
            {/* product name */}
            <div
            className="flex-grow text-sm font-normal mb-2 sm:mb-0 mx-2 w-full"
             style={{ direction: "ltr" }}
            >
             {product.title}
            </div>
            {/* product action */}
            <div className="flex flex-wrap flex-grow md:items-center mb-4 sm:mb-0">
                <div className="flex-grow my-2 sm:my-0">
                    <div className="flex flex-col  items-center justify-start lg:justify-center cursor-pointer">
                        <Action key={product._id} product={product} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems