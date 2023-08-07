import { client } from '@/lib/sanityClient'
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