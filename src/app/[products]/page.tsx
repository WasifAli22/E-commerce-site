// Import necessary dependencies and components
"use client"
import React, { useState, useEffect } from 'react';
import { IProduct, allTypeOfProducts } from '@/views/utils/mock';
import SuspenseFallback from '@/components/loader';
import ProductCard from '@/components/productCard';

// Products component to display a list of products based on category
const Products = ({ params }: { params: { products: string } }) => {
  // State to hold product data and loading state
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  // Extract the category from the URL parameter
  const category = params.products;

  // Fetch data when the category changes
  useEffect(() => {
    async function fetchData() {
      // Fetch product data for the specified category
      const fetchedData: IProduct[] = await allTypeOfProducts(category);
      setData(fetchedData);
      setLoading(false);
    }

    fetchData();
  }, [category]);

  return (
    <div className="md:my-12 my-10 md:mx-24 mx-10">
      <div className="section-title text-center mb-14">
        <span className="text-[#0062f5] text-sm font-bold">PRODUCTS</span>
        <h2 className="text-[#212121] font-bold text-[32px]">Check What We Have</h2>
      </div>
      {/* Display a loading fallback or the ProductCard component */}
      <SuspenseFallback isLoading={loading}>
        <ProductCard data={data} />
      </SuspenseFallback>
    </div>
  );
};

export default Products;
