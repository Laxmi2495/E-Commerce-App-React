import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import CategoryFilter from './CategoryFilter';
import StockFilter from './StockFilter';
import PriceFilter from './PriceFilter';
import productsData from '../data/products'; // Ensure correct import path
import './ProductList.css'; // Import CSS file

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const productsPerPage = 10;

  // Filter products based on selected filters and search query
  const filteredProducts = productsData.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    if (inStockOnly && !product.inStock) {
      return false;
    }
    if (minPrice && product.price < minPrice) {
      return false;
    }
    if (maxPrice && product.price > maxPrice) {
      return false;
    }
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Calculate the index of the first and last product to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Handle search input change
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset pagination when search query changes
  };

  return (
    <div className="product-list-container">
      <Grid container spacing={3}>
        {/* Filters Section */}
        <Grid item xs={12} md={3}>
          <div className="filters-section">
            {/* Search Filter */}
            <div className="search-filter-container">
              <h3 className="category-filter-title">Search By Product</h3>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="search-filter-input p-2"
              />
            </div>
            <CategoryFilter
              categories={['Furniture', 'Electronics', 'Sporting Goods', 'Clothing', 'Accessories', 'Home Decor', 'Home Appliances']}
              selectedCategory={selectedCategory}
              onSelectCategory={category => setSelectedCategory(category)}
            />
            <StockFilter
              onToggleStock={() => setInStockOnly(!inStockOnly)}
            />
            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              onPriceChange={(type, value) => {
                if (type === 'min') {
                  setMinPrice(value);
                } else {
                  setMaxPrice(value);
                }
              }}
            />
          </div>
        </Grid>
        
        {/* Product Listing Section */}
        <Grid item xs={12} md={9}>
          <div className="product-list-section">
            <Grid container spacing={3}>
              {currentProducts.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </div>
          
          {/* Pagination controls */}
          <div className="pagination-container">
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)} className="pagination-button">
                {index + 1}
              </button>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
