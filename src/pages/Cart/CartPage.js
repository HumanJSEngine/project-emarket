/** @format */

import React from 'react';
import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';
import { useCart } from '../../context';
export const CartPage = () => {
  const { cartList } = useCart();
  console.log(cartList.length);

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
