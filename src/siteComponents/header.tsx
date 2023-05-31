"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi"
import {FaChild,FaMale,FaFemale} from "react-icons/fa"
import logo from "../../public/logo.webp"
import { useState } from 'react'
import { MdProductionQuantityLimits } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"
import Link from 'next/link'
import { Input } from "@/components/ui/input"

import Image from 'next/image'
const Headers = () => {
  const [isHeader, setIsHeader] = useState<boolean>(false);

  return (
    <nav className='shadow-md static top-0 w-full z-[999] h-[60px]'>

      <div className="md:my-8 mb-4 mt-4 md:mx-24 mx-10">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={logo} height={35} width={150} alt='logo' />
          </Link>

          <div className="hidden gap-12 lg:flex">
            <Link href="#">Female</Link>
            <Link href="#">Male</Link>
            <Link href="#">Kids</Link>
            <Link href="#">All Products</Link>
          </div>
          <div className="relative hidden lg:flex">
            <Input placeholder='what you looking for' className='relative h-[30px] pl-[30px]' />
            <CiSearch className='absolute top-2 left-2' />
          </div>
          <button className='relative hidden lg:visible bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
            <AiOutlineShoppingCart className='text-[18px] ' />
            <span className='absolute top-[-4px] right-0 bg-[#f02d34] rounded-full text-[13px] h-[18px] w-[18px] text-white'>0</span>
          </button>

          {/* For small screens */}
          <div className="visible lg:hidden">
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setIsHeader(!isHeader)}>
              {/* <span className="sr-only">Open sidebar</span> */}
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            {/* Side bar */}
            <aside id="default-sidebar" className={isHeader ? "fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0" : "hidden"} aria-label="Sidebar">
              <div className="h-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">
                  <li>
                    <Link href="/">
                      <Image src={logo} height={35} width={150} alt='logo' />
                    </Link>
                  </li>
                  <li className=' font-[500]'><button className='relative mt-5 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                    <AiOutlineShoppingCart className='text-[18px] ' />
                    <span className='absolute top-[-4px] right-0 bg-[#f02d34] rounded-full text-[13px] h-[18px] w-[18px] text-white'>0</span>
                  </button><Link href="#" className='text-[20px]'>Cart</Link></li>
                  <li className='font-[500]'>
                    <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                    <MdProductionQuantityLimits className='text-[18px] ' /></button>
                    <Link href="#" className='text-[20px]'>All Products</Link></li>
                  <li className=' font-[500]'>
                  <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                    <FaChild className='text-[18px] ' /></button>
                    <Link href="#" className='text-[20px]'>Kids</Link></li>
                  <li className=' font-[500]'>
                  <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                    <FaMale className='text-[18px] ' /></button>
                    <Link href="#" className='text-[20px]'>Male</Link></li>
                  <li className=' font-[500]'>
                  <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                    <FaFemale className='text-[18px] ' /></button>
                    <Link href="#" className='text-[20px]'>Female</Link></li>
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