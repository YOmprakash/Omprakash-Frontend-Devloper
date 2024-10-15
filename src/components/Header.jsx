import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import Logo from '../assets/logo.svg';  
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0C2B2F] md:bg-transparent backdrop-blur-sm border md:border-none border-[#0F373C] border-solid text-white  py-4">
      <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8" />
          <span className="hidden ml-2 text-xl font-semibold md:block">EthAi</span>
        </div>

        {/* Desktop Menu */}
        <nav className=" font-medium leading-[32px] text-[16px] md:bg-[#0C2B2F] p-2 items-center hidden space-x-6 md:flex md:rounded-full text-[#b0faffb3]  md:px-12 md:border-[#0F373C] border ">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#why-us" className="hover:text-gray-300">Why Us</a>
          <a href="#tokenomics" className="hover:text-gray-300">Tokenomics</a>
          <a href="#roadmap" className="hover:text-gray-300">Roadmap</a>
          
        </nav>
        <div className='font-medium leading-[32px] text-[16px] hidden md:block'>
          <button className='p-1 mt-4 mr-2 text-white rounded-md '>Log in</button>
          <button className='bg-[#CDFCFF] px-4 py-2  text-black rounded-[12px] '>White paper</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-white" /> // Close Icon
            ) : (
              <FaBars className="w-6 h-6 text-white" /> // Menu Icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full px-4 py-4 space-y-4 md:hidden bg-dark">
          <a href="#features" className="block text-white">Features</a>
          <a href="#why-us" className="block text-white">Why Us</a>
          <a href="#tokenomics" className="block text-white">Tokenomics</a>
          <a href="#roadmap" className="block text-white">Roadmap</a>
          <a href="#login" className="block text-white">Log in</a>
          <a href="#whitepaper" className="block px-4 py-2 text-black bg-white rounded-full">Whitepaper</a>
        </div>
      )}
    </header>
  );
};

export default Header;
