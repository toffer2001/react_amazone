import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndex from './ProductIndex';

// need to fix indexing (activeIndex, index)
// will need to do some state/props shennanigans to get it all working

const ProductList = ({ id, name, description, price, stock }) => (
  <>
    <li><Link to={{ pathname: `../product/${id}`, state: { id, name, description, price, stock } }} >{ name }</Link></li>
  </>
)

export default ProductList;