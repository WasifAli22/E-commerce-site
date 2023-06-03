import Image from 'next/image'
import Baner from '@/siteComponents/baner'
import Promotion from '@/siteComponents/promotion'
import Product from '@/siteComponents/product'
import NewsLetter from '@/siteComponents/newsletter'
import DifferFromOther from '@/siteComponents/differFromOther'
export default function Home() {
  return (
    <>
    {/* @ts-ignore server component */}
      <Baner />
      {/* @ts-ignore server component */}
      <Promotion/>
      <Product/>
      <DifferFromOther/>
      <NewsLetter/>
      
    </>
  )
}
