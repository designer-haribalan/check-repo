import React from 'react';
import './ProductPage.css';


const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>Price: ${product.price}</h3>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;