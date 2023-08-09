"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { FaChild, FaMale, FaFemale } from "react-icons/fa"
// import logo from "../../public/logo.webp"
import { useState } from 'react'
import { MdProductionQuantityLimits } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { NavbarArray, NavbarType, MobileNavbarArray } from '../utils/NavbarArrayAndTypes'
import Image from 'next/image'


const Headers = () => {
  const CartValue = useSelector((state: RootState) => state.cart.totalQuantity )
  const [isHeader, setIsHeader] = useState<boolean>(false);

  const iconComponents: { [key: string]: React.ComponentType } = {
    FaFemale: FaFemale,
    FaMale: FaMale,
    FaChild: FaChild,
    MdProductionQuantityLimits: MdProductionQuantityLimits,
  };
  return (
    <nav className='shadow-md sticky top-0 bg-white w-full z-[999] h-[60px]'>
      <div className="md:mb-8 md:mt-3 mb-4 mt-4 md:mx-24 mx-10 pt-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.webp" height={35} width={150} alt='logo' />
          </Link>

          <div className="hidden gap-12 lg:flex">
            {NavbarArray.map((item: NavbarType) => {
              return (
                <div key={item.label} className=' hover:cursor-pointer '>
                  <Link href={item.href}>{item.label}</Link>
                </div>
              )
            })}
          </div>
          <div className="relative hidden lg:flex">
            <Input placeholder='what you looking for' className='relative h-[30px] pl-[30px]' />
            <CiSearch className='absolute top-2 left-2' />
          </div>
          <a href='/cart'  className='relative hidden lg:visible bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
            <AiOutlineShoppingCart className='text-[18px] ' />
            <span className='absolute top-[-4px] right-0 bg-[#f02d34] text-center rounded-full text-[13px] h-[18px] w-[18px] text-white'>{CartValue}</span>
          </a>
              
          {/* For small screens */}
          <div className="visible lg:hidden">
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setIsHeader(!isHeader)}>
              {/* <span className="sr-only">Open sidebar</span> */}
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            {/* Side bar */}
            <aside id="default-sidebar" className={isHeader ? "fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0" : "hidden"} aria-label="Sidebar">
              <div className="h-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">
                  <li>
                    <Link href="/">
                      <Image src="/logo.webp" height={35} width={150} alt='logo' />
                    </Link>
                  </li>
                  <li className=' font-[500]'><button className='relative mt-5 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                    <AiOutlineShoppingCart className='text-[18px] ' />
                    <span className='absolute top-[-4px] right-0 bg-[#f02d34] rounded-full text-[13px] h-[18px] w-[18px] text-white'>{CartValue}</span>
                  </button><Link href="/cart" className='text-[20px]'>Cart</Link></li>
                  
                  {/* these li's are dynamic  */}
                  {MobileNavbarArray.map((i) => {
                    const IconComponent = iconComponents[i.icon];
                    return (
                      <li className='font-[500]' key={i.label}>
                        <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <IconComponent />
                        </button>
                        <Link href={i.href} className='text-[20px]'>{i.label}</Link></li>
                    )
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Headers