import React from 'react'
import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../../public/logo.webp"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"
import Link from 'next/link'
import { Input } from "@/components/ui/input"

import Image from 'next/image'
const Header = () => {
  return (
    <nav>
      <div className="my-8 mx-24">
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
          <div className="relative">
            <Input placeholder='what you looking for' className='relative h-[30px] pl-[30px]' />
            <CiSearch className='absolute top-2 left-2' />
          </div>
          <button className='relative bg-[#f1f1f1] flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
            <AiOutlineShoppingCart className='text-[18px] ' />
            <span className='absolute top-[-4px] right-0 bg-[#f02d34] rounded-full text-[13px] h-[18px] w-[18px] text-white'>0</span>
          </button>
          {/* <GiHamburgerMenu /> */}

        </div>

      </div>

    </nav>
  )
}

export default Header