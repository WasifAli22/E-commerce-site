import Image from 'next/image'
import Baner from '@/siteComponents/baner'
import Promotion from '@/siteComponents/promotion'
import Product from '@/siteComponents/product'
export default function Home() {
  return (
    <>

      <Baner />
      <Promotion/>
      <Product/>
    </>
  )
}
