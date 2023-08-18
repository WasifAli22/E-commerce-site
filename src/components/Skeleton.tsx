import Image from 'next/image'
import React from 'react'
const Skeleton = () => {
    return (
        <div role="status" className=" lg:col-span-4 col-span-12 md:col-span-6 min-w-xl animate-pulse">
            <div className="lg:col-span-4 col-span-12 md:col-span-6" >
                <div className="max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow ">

                    <div  className='m-auto bg-gray-300 flex items-center justify-center  rounded w-auto h-[374px]  dark:bg-gray-700 '  />
                    <div className="pt-5 w-full">
                        <div className="mb-2 h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%] "></div>
                        <div className="mb-3 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50%]"></div>
                        <div className="flex  flex-auto md:gap-y-2 gap-y-0 md:flex-wrap  justify-between">
                            <div className="bg-[#414040]   pointer-events-none transition all  lg:w-[155px] w-[48%] h-[42px]  px-2 py-1 rounded-md"></div>
                            <div className="inline-flex items-center justify-center  bg-[#414040] font-[600] transition all lg:w-[155px] w-[48%] h-[42px]  px-4 py-2 rounded-md text-white">

                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton
