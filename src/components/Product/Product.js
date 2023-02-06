import React from 'react';

const Product = (props) => {
  const { name, img } = props.product;
  return (
    <>
      <div className="mx-auto text-center border rounded-sm border-gray-500	">
        <img className="h-96 w-96" src={img} alt="productImg" />
        <h1 className="text-1xl text-bold"> Name: {name}</h1>
      </div>
    </>
  );
};

export default Product;
