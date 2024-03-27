// PriceFilter.js
import React from 'react';
import './ProductList.css';

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }) => {
  const handleMinPriceChange = (e) => {
    onPriceChange('min', e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    onPriceChange('max', e.target.value);
  };

  return (
    <div className="price-filter-container">
      <h3 className="price-filter-title">Price</h3>
      <div className="price-filter-input-container">
        <label className="price-filter-label">Min Price:</label>
        <input 
          type="number" 
          value={minPrice} 
          onChange={handleMinPriceChange} 
          className="price-filter-input" 
        />
      </div>
      <div className="price-filter-input-container">
        <label className="price-filter-label">Max Price:</label>
        <input 
          type="number" 
          value={maxPrice} 
          onChange={handleMaxPriceChange} 
          className="price-filter-input" 
        />
      </div>
    </div>
  );
};

export default PriceFilter;
