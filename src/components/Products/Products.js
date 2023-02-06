import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

  return (
    <div>
      <h1>I am from Products</h1>
      {
        products.map((product)=>(
          <Product
          key={product.id}
          product={product}
          />
        ))
      }
    </div>
  );
};

export default Products;
