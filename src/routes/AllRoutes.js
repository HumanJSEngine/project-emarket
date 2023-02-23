/** @format */

import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductsList, ProductDetail } from '../pages';
import CartPage from '../pages/Cart/CartPage';
export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsList />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/products/:id' element={<ProductDetail />} />
            </Routes>
        </>
    );
};
