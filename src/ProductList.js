import React, { useState, useEffect } from 'react';
import './ProductListingPage.css'; // Import CSS file

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9); // Display 9 products per page (3 per row)

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <header className="header">
        <h1>My Shop</h1>
      </header>
      <div className="container">
        <h2>Product Listing</h2>
        <div className="row">
          {currentProducts.map(product => (
            <div key={product.id} className="col-lg-4 mb-4">
              <div className="card h-100">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt={product.name} />
                
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <footer className="footer">
        <p>&copy; 2024 My Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductListingPage;
