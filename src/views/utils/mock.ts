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
    }
  }`)
    return res
}
// Interface for type safety

export interface Iproduct {
    title: String,
    _id: string,
    category: string,
    price: string,
    care: string,
    description: string, name: string,
    image: IImage,
}