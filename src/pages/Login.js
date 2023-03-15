/** @format */

import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    const authDetail = {
      email: email.current.value,
      password: password.current.value,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(authDetail),
    };
    const response = await fetch('http://localhost:8000/login', requestOptions);
    const data = await response.json();
    data.accessToken ? navigate('/products') : toast.error(data);
    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
    console.log(data);
  };

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 underline-offset-1"></p>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray"
          >
            이메일 입력
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-800"
          >
            비밀번호 입력
          </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-400 border-r-6"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4"
        >
          로그인
        </button>
      </form>
    </main>
  );
};
