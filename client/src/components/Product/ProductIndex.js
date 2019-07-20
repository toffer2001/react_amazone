import React, { Component } from 'react';
import ProductList from './ProductList';

const ProductIndex = ({products}) => (

  <div>
  <h1>All Products</h1>
    <ul>
      {
        products.map( product => <ProductList key={product.id} {...product} /> )
      }
    </ul>
</div>
)

export default ProductIndex;