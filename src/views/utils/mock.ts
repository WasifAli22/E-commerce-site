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

export const allTypeOfProducts = async (productName: string) => {
    if (productName == "products") {
          const res = await client.fetch(`*[_type=="product"]{
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
            }`,
              
          );
          return res
      }else {
          const res = await client.fetch(`*[_type=="product" && category->name == $productName]{
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
              }`,{
                productName
              }
          );
          return res
      }
  };

export interface IProduct {
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