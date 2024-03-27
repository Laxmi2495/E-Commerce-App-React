// CategoryFilter.js
import React from 'react';
import './ProductList.css';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const handleChange = (e) => {
    onSelectCategory(e.target.value);
  };

  return (
    <div className="category-filter-container">
      <h3 className="category-filter-title">Category</h3>
      <select 
        value={selectedCategory} 
        onChange={handleChange} 
        className="category-filter-select"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
