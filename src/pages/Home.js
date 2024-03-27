import React from 'react';
import { Container } from '@material-ui/core';
import ProductList from '../components/ProductList';
import productsData from '../data/products';

const Home = () => {
  return (
    <Container>
      <ProductList products={productsData} />
    </Container>
  );
};

export default Home;
