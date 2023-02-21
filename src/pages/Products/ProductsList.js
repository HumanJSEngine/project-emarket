/** @format */
import { ProductCard } from '../../components/';
import { FilterBar } from './components/FilterBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../../data/db.json';

export const ProductsList = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState(data.products);

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
  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            모든 책 종류({products.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};
