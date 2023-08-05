import { client } from "@/lib/sanityClient"
import { Image as IImage } from 'sanity'
export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"] {
    title,
    price,
    care,
    _id,    
    description,
    image,
    category ->{
        name
    },
    slug,
  }`)
    return res
}
// Interface for type safety

export interface Iproduct {
    title: string,
    _id: string,
    category: {name : string},
    price: number ,
    care: string,
    description: string, 
    name: string,
    image: IImage,
    slug: { current : string },
}