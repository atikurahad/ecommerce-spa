import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-base-100 text-black flex items-center justify-between px-10 h-16'>
      <h1 className='text-2xl font-bold'>Amazon Prime</h1>
  <ul>
    <li className='text-lg'>
      <Link to={'/'} >Home</Link>
    </li>
  </ul>
    </nav>
  );
};

export default Navbar;
