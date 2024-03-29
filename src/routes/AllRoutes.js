/** @format */

import React from 'react';

import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ProductsList,
  ProductDetail,
  Register,
  Login,
  CartPage,
} from '../pages';
import { ProtectedRoute } from './ProtectedRoute';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute> 
          }
        />
      </Routes>
    </>
  );
};
