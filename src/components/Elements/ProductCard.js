/** @format */

import { Link } from 'react-router-dom';
import { Rating } from './Rating';

export const ProductCard = ({ product }) => {
  const {
    id,
    name,
    overview,
    long_description,
    image_local,
    price,
    rating,
    poster,
    best_seller,
  } = product;
  console.log(best_seller)
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            베스트셀러
          </span>
        )}
        <img
          className="rounded-t-lg w-full h-64"
          src={image_local}
          alt={name}
        />
      </Link>
      <div className="p-5">
        <Link to={`products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{overview}</p>
        <div className="flex items-center my-2">
          <Rating rating={rating}/>
        </div>
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            카트에 담기
          </button>
        </p>
      </div>
    </div>
  );
};
