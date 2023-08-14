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
};
export interface Db  {
  id : number,
  product_id: string,
  quantity : number,
  user_id : string
}
export const fetchSanity = async (pId : string) => {
  const res = await client.fetch(`*[_type=="product" && _id == $pId]{
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
      pId
    }
  );
    return res
}
export const fetchDb = async () => {
  try {
      const res = await fetch(`http://localhost:3000/api/cart`, {
          method: 'GET',
          cache : "no-store",
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });

      if (res.ok) {
          const data = await res.json();
          return data
      } else {
          console.log("failed to fetch data");
          return null
      }
  } catch (error) {
      console.error("Error fetching data:", error);
  }
};


