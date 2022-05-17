import React from 'react';
import './pageStyles.css';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className='product-details-container'>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </div>
  )
}

export default ProductDetails;