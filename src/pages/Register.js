/** @format */

import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import axios from 'axios';

export const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const authDetail = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(authDetail),
    };

    const res = await fetch('http://localhost:8000/register', requestOptions);
    const data = await res.json();
    data.accessToken ? navigate('/products') : toast.error(data);
    if (data.accessToken) {
      sessionStorage.setItem('token', JSON.stringify(data.accessToken));
      sessionStorage.setItem('cbid', JSON.stringify(data.user.id));
    }
    console.log(data);
  };

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          회원등록
        </p>
      </section>
      <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            이름
          </label>
          <input
            type="name"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            minLength="7"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          등록
        </button>
      </form>
    </main>
  );
};
