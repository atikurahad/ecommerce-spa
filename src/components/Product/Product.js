import React from 'react';

const Product = (props) => {
  const { name, img, category, seller, stock, ratings } = props.product;
  return (
    <>
      <div className="mx-auto text-center border rounded-sm border-gray-500	bg-[#3af1b8]">
        <img className="h-96 w-96" src={img} alt="productImg" />
        <p>Catergory: {category}</p>
        <h1 className="text-1xl text-bold"> Name: {name}</h1>
        <p>Seller: {seller}</p>
        <p>Stock:{stock}</p>
        <p>Rating {ratings}</p>
      </div>
    </>
  );
};

export default Product;
