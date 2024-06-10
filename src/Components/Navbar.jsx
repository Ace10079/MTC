import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
    <div className='relative'>
      {/* Button to toggle options visibility */}
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <button className="focus:outline-none" onClick={toggleOptions}>
          {/* Three line button (commonly known as hamburger menu) */}
          <div className={`w-6 h-0.5 bg-gray-500 mb-1 transition-transform ${optionsVisible ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-500 mb-1 transition-transform ${optionsVisible ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-500 ${optionsVisible ? 'rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      
      {/* Options */}
      {optionsVisible && (
        <div className="absolute top-0 left-0 mt-12 ml-4 bg-gray-800 rounded shadow-md">
          <p className="text-white py-2 px-4 cursor-pointer hover:bg-gray-700 transition-colors">Quotation</p>
          <p className="text-white py-2 px-4 cursor-pointer hover:bg-gray-700 transition-colors">Enquiry</p>
          <p className="text-white py-2 px-4 cursor-pointer hover:bg-gray-700 transition-colors">T.T.S</p>
        </div>
      )}

      {/* Cart icon at the right corner */}
      <div className="absolute top-0 right-0 mt-4 mr-4">
      <Link to="/cart">
          <FaShoppingCart className="text-gray-500 text-2xl cursor-pointer hover:text-gray-700 transition-colors" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
