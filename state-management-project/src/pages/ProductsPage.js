import React from 'react';
import './pageStyles.css';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <section className='product-page-container'>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to="/products/book">Book</Link></li>
        <li><Link to="/products/carpet">Carpet</Link></li>
        <li><Link to="/products/course">Online Course</Link></li>
      </ul>
    </section>
  )
}

export default ProductsPage;