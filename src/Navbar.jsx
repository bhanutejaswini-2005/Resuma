import React from 'react';
import logo from './assets/logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-purple-300 pt-5 pb-4 px-6 flex justify-between items-center shadow">
      
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <div className="ml-4">
          <h1 className="text-3xl text-purple-900 font-bold">Resuma</h1>
          <p className="italic font-light text-sm -mt-1">Click. Create. Conquer</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Link to="/login">
        <button className="px-4 py-2 bg-white text-purple-800 rounded hover:bg-purple-100 shadow">
          Login
        </button>
        </Link>
        <Link to="/login">
        <button className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 shadow">
          Sign Up
        </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
