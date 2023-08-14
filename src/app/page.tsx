import Baner from '@/views/baner'
import DifferFromOther from '@/views/differFromOther'
import NewsLetter from '@/views/newsletter'
import Product from '@/views/product'
import Promotion from '@/views/promotion'

export default async function Home() {

  
    
  return (
    <>
    {/* @ts-ignore server component */}
      <Baner />
      {/* @ts-ignore server component */}
      <Promotion/>
      {/* @ts-ignore server component */}
      <Product/>
      {/* @ts-ignore server component */}
      <DifferFromOther/>
      <NewsLetter/>
      
    </>
  )
}
