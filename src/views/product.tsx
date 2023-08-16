import React from 'react'
import { IProduct, getProductData  } from './utils/mock';
import Product from '@/components/product';

const Products = async () => {
   const data: IProduct[] = await getProductData();//allTypeOfProducts("products")

   
    return (
        <Product product={data} />
    )
}

export default Products