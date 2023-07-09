// import { Client } from "@vercel/postgres";
// import { client } from "@/lib/sanityClient";


// export type ProductsData = Product[];
// export const fetchSingleProduct = async (id: string) => {
//     try {
//       const query = `*[_type == "product"&& _id == $id]`;
  
//       // Fetch data using the query
//       const data = await client.fetch<ProductsData>(query, { id });
  
//       // Return the fetched data
//       return data[0];
//     } catch (error) {}
//   };