import React from 'react';
import { Container } from '@material-ui/core';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <Container>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </Container>
  );
};

export default CartPage;
