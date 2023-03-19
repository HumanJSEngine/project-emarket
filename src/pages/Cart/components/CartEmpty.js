/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export const CartEmpty = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark">
      <div className="my-5">
        <p className="bi bi-cart text-green-600 text-7xl mb-5"></p>
        <p>장바구니가 비어 있습니다</p>
        <p>장바구니를 채워 주세요</p>
      </div>
      <Link
        to="/products"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline"
      >
        쇼핑 계속하기 <i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
};
