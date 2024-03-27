import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import AddToCartPage from './pages/AddToCartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/add-to-cart" element={<AddToCartPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
