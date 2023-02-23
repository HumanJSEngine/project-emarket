/** @format */
import { useState, useEffect } from 'react';
import { ProductCard } from '../../../components';
import axios from 'axios';
import data from '../../../data/db.json';
export const FeaturedProduct = () => {
    const [products, setProducts] = useState(data.products);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const result = await axios.get(
    //                 'http://localhost:8000/products'
    //             );
    //             setProducts(result.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchProducts();
    // }, []);
    //더미데이터 연동

    return (
        <section className='my-20'>
            <h1 className='text-2xl text-center font-semibold dark:text-white mb-5 underline'>
                리스트 목록
            </h1>
            <div className='flex flex-wrap justify-center lg:flex-row'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};
