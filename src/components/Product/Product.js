import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const { name, img, category, seller, stock, ratings,id } = props.product;
  const navigate = useNavigate()
  const handleId =()=>{
    navigate(`/idHunter/${id}`)
  }
  return (
    <>
      <div className="mx-auto text-center border rounded-sm border-gray-500	bg-[#3af1b8] h-96 w-96">
        <img className="h-[15rem] w-[100%]" src={img} alt="productImg" />
        <p>Catergory: {category}</p>
        <h1 className=" text-bold">Name: {name}</h1>
        <p>Seller: {seller}</p>
        <p>Stock:{stock}</p>
        <p>Rating {ratings}</p>
        <button onClick={handleId}> Id Hunter</button>
      </div>
    </>
  );
};

export default Product;
