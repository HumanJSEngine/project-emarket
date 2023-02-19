/** @format */
import { useState, useEffect } from 'react';
import { ProductCard } from '../../../components/Elements/ProductCard';
import axios from 'axios';
export const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get('http://localhost:8000/products');
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline">
        리스트 목록
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product)=>(
          <ProductCard key={product.id} product={product}/>

        ))}
      </div>
    </section>
  );
};
