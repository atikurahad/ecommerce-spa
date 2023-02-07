import React from 'react';
import './home.css'

const Home = () => {
  return (
    <>
      <div className="bg-black">
        <div className=" w-[fit-content] grid sm:grid-cols-2 items-center	">
          <div className="image-bg"></div>
          <div className='text-center'>
            {" "}
            <p className=" text-center my-auto font-serif  mx-auto text-5xl p-3 text-emerald-500	">
              Online shopping is a form of electronic commerce which allows
              consumers <br /> to directly buy goods. <br />
            </p>
            <button className="text-black m-3 font-bold text-xl mx-auto bg-yellow-400 p-2 px-3 rounded-full hover:bg-slate-600 hover:text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
