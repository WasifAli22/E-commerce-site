"use client"
import { size } from '@/views/utils/size'
import React from 'react'
import { useState } from 'react'
const Size = () => {
    const [selectSize, setSelectSize] = useState(null)
    const handleSizeClick = (item:any) => {
        setSelectSize(item.id);
      };
    
    return (
        <div className='flex gap-4 mt-5'>
            {size.map((item: any) => {
                return (
                    <button key={item.id} onClick={() => handleSizeClick(item)}
                        className={`rounded-full bg-gray-100 hover:bg-gray-600 hover:text-white duration-150 ${selectSize === item.id ? 'bg-gray-600 text-white' : 'bg-gray-100'}  ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center`}>
                        {item.name}
                    </button>
                )
            })}

        </div>
    )
}

export default Size