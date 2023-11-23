import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='px-52 bg-[#E9EBE7] font-display flex justify-between items-center py-3 border'>
      <div>
        <NavLink to="/">
          <img className='h-28' src={logo}  alt="" />
        </NavLink>
      </div>
      <div>
        <ul className='flex justify-center items-center space-x-10 text-sm font-semibold text-[#385529] '>
          <li>
            <NavLink to="/learn">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/Aboutus">About us</NavLink>
          </li>
          <li>
            <NavLink to="/market">Members</NavLink>
          </li>
          <li>
            <NavLink to="/Alumniawards">Alumni awards </NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul>
      </div>
      <div className='flex justify-center space-x-5 font-semibold'>
        <button className='border border-black bg-[#971B1E] py-[0.5em] px-6 rounded-lg text-white'>
          login
        </button>
        <button className='border border-black bg-[#971B1E] py-[0.5em] px-6 rounded-lg text-white'>
          signup
        </button>
      </div>
    </div>
  );
}

export default Navbar;
