import React from 'react';

const StockFilter = ({ inStockOnly, onToggleStock }) => {
  const handleChange = (e) => {
    onToggleStock(e.target.checked);
  };

  return (
    <div>
      <h3>Stock</h3>
      <label>
        <input type="checkbox" checked={inStockOnly} onChange={handleChange} />
        In Stock Only
      </label>
    </div>
  );
};

export default StockFilter;
