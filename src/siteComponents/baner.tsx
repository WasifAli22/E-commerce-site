import React from 'react'

const Baner = () => {
  return (
    <div className='md:my-12 my-6 md:mx-24 mx-10'>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
        <span className='h-[40px] w-[120px] bg-[#e1edff] text-[blue] rounded-sm flex items-center font-[600] justify-center'>Sale 70%</span>
          <h1 className="text-6xl text-[#212121]  font-[700] ">An Industrial Take on Streetwear</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sodales nunc, sodales nunc sodales.
          </p>
        </div>
        <div className="col-span-6">
          
        </div>
      </div>
    </div>
  )
}

export default Baner