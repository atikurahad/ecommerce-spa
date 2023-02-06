import React from 'react';

const Product = (props) => {
  const { name, img } = props.product;
  return (
    <>
      <div>
        <img src={img} alt="productImg" />
        <h1> Name: {name}</h1>
      </div>
    </>
  );
};

export default Product;
