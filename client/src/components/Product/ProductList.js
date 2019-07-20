import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ id, name, description, price, stock }) => (
  <>
    <li><Link to={{ pathname: `../product/${id}`, state: { id, name, description, price, stock } }} >{ name }</Link></li>
  </>
)

export default ProductList;