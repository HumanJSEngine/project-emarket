/** @format */

import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Rating } from './Rating';
import React, { useState, useEffect } from 'react';

export const ProductCard = ({ product }) => {
  const {
    id,
    name,
    overview,
    image_local,
    price,
    rating,
    best_seller,
    in_stock,
  } = product;
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-50 text-white rounded">
            베스트셀러
          </span>
        )}
        <img
          className="rounded-t-lg w-full h-64"
          src={product.poster}
          alt={name}
        />
      </Link>
      <div className="relative p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
          {in_stock ? (
            <span className="absolute top-6 right-3 px-2 bg-orange-500 bg-opacity-50 text-white rounded">
              재고있음
            </span>
          ) : (
            <span className="absolute top-6 right-3 px-2 bg-orange-500 bg-opacity-50 text-white rounded">
              재고없음
            </span>
          )}
        </Link>
        <p className="mb-3 font-normal text-gray-700">{overview}</p>
        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>
          {!inCart && (
            <button
              onClick={() => addToCart(product)}
              className={`"inline-flex items-center py-3 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" ${
                product.in_stock ? '' : 'cursor-not-allowed'
              }`}
            >
              카트에 담기
            </button>
          )}
          {inCart && (
            <button
              onClick={() => removeFromCart(product)}
              className={`inline-flex items-center py-3 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${
                product.in_stock ? '' : 'cursor-not-allowed'
              }`}
              disabled={product.in_stock ? '' : 'disabled'}
            >
              카트에 빼기 <i className="ml-1 bi bi-trash3"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
