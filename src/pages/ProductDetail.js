/** @format */
import { Rating } from '../components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../data/db.json';
import { useParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context';

export const ProductDetail = () => {
  useTitle('배민준');
  const { cartList, addToCart, removeFromCart } = useCart();
  const [product, setProducts] = useState({});
  const [inCart, setInCart] = useState(false);
  console.log('프로덕트', product);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get(`http://localhost:8000/products/${id}`);
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-full my-3">
            <img
              className="rounded w-80 object-fill"
              src={product.poster}
              alt="사진"
            />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  베스트셀러
                </span>
              )}
              {product.in_stock ? (
                <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  재고있음
                </span>
              ) : (
                <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  재고없음
                </span>
              )}

              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product.size}
              </span>
            </p>
            <p className="my-3">
              {!inCart && (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium bg-blue-700 rounded-xl ${
                    product.in_stock ? '' : 'cursor-not-allowed'
                  }`}
                  disabled={product.in_stock ? '' : 'disabled'}
                >
                  카트에 추가
                </button>
              )}
              {inCart && (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium bg-red-700 rounded-xl ${
                    product.in_stock ? '' : 'cursor-not-allowed'
                  }`}
                  disabled={product.in_stock ? '' : 'disabled'}
                >
                  카트에서 제거
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
