/** @format */

import { Link } from 'react-router-dom';

export const ProductCard = () => {
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/" className="relative">
        <span className="absolute top-4 left-2 px-2 bg-orange-300 bg-opacity-90 text-white rounded" />
        <img className="rounded-t-lg w-full h-64" src="/assets/images/10001.avif" alt="" />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            베스트셀러
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          praesentium tempore cupiditate iusto placeat in. Quae perferendis
          repudiandae ipsam aliquam cumque distinctio nulla, adipisci blanditiis
          a aperiam ullam, autem maiores?
        </p>
        <div className="flex items-center my-2">
          <i className="text-lg bi bi-star-fill text-yellow-300 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-300 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-300 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-300 mr-1"></i>
          <i className="text-lg bi bi-star text-yellow-300 mr-1"></i>
        </div>
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>price</span>
          </span>
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            카트에 담기
          </button>
        </p>
      </div>
    </div>
  );
};
