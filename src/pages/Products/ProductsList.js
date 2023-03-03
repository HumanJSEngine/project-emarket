/** @format */
import { ProductCard } from '../../components/';
import { FilterBar } from './components/FilterBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../../data/db.json';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import { useFilter } from '../../context';

export const ProductsList = () => {
    // const { productList, onlyInStock } = useFilter();

    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    const search = useLocation().search;
    const searchTerm = new URLSearchParams(search).get('title');
    console.log('서치', search);
    console.log('서치텀', searchTerm);
    useTitle('bmj');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await axios.get(
                    `http://localhost:8000/products?name_like=${
                        searchTerm ? searchTerm : ''
                    }`
                );
                setProducts(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);
    return (
        <main>
            <section className='my-5'>
                <div className='my-5 flex justify-between'>
                    <span className='text-2xl font-semibold dark:text-slate-100 mb-5'>
                        모든 책 종류({products.length})
                    </span>
                    <span>
                        <button
                            onClick={() => setShow(!show)}
                            id='dropdownMenuIconButton'
                            data-dropdown-toggle='dropdownDots'
                            className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700'
                            type='button'
                        >
                            누르기
                        </button>
                    </span>
                </div>
                <div className='flex flex-wrap justify-center lg:flex-row'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
            {show && <FilterBar setShow={setShow} />}
        </main>
    );
};
