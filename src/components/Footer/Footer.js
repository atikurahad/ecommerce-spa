import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-800 h-[25rem] p-[5rem]">
          <div className="grid sm:grid-cols-4 justify-center items-center ">
            <div className="flex flex-col mx-auto">
              <h1 className="text-4xl text-white">Ama Jhon</h1>
              <p className="text-2xl text-gray-300" >
                Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.{" "}
                <br /> Iste hic officia illo <br /> itaque dicta ullam iusto
                tempora <br /> cupiditate facere vitae.
              </p>
            </div>
            <div className="text-2xl font-bold text-white flex flex-col mx-auto">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Career</a>
            </div>
             <div className="text-2xl font-bold text-white flex flex-col mx-auto ">
              <a href="/" >Terms & Condition</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Partners</a>
             </div>
            <div className="flex-1 flex flex-col mx-[3rem]">
              <button className="bg-rose-500 border rounded-xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
