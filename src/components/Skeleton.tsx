import React from 'react'
const Skeleton = async () => {
  return (
    <div role="status" className='  md:my-12 my-10 md:mx-24 mx-10 max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700'>
    <div className="section-title text-center mb-14">
        <span className='text-[#0062f5] text-sm font-bold'></span>
        <h2 className='text-[#212121] font-bold text-[32px]'></h2>
    </div>
    <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-4 col-span-12 md:col-span-6" >
                <div className="max-w-sm bg-white border border-gray-200 p-4 transition-all hover:shadow-2xl hover:scale-[1.05] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <img src={""} className='m-auto object-cover w-[370px] h-[394px]'  alt='image' />

                    </div>
                    <div className="pt-5">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold truncate text-ellipsis tracking-tight text-gray-900 dark:text-white"></h5>
                        </div>
                        <p className="mb-3 font-bold text-[#212121]"></p>
                        <div className="flex  flex-auto md:gap-y-2 gap-y-0 md:flex-wrap  justify-between">
                            {/* @ts-ignore server component */}
                            <div className="bg-[#212121] bg-opacity-90 text-white/90 pointer-events-none transition all  font-[600]  lg:w-[155px] w-[49%] h-[42px] hover:border-solid px-2 py-1 rounded-md"></div>
                            <div className="inline-flex items-center bg-[#212121] font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid px-4 py-2 rounded-md text-white">
                                
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
  )
}

export default Skeleton
