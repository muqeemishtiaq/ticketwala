import React, { useState } from 'react';
import { CiGlobe } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-14 bg-black text-white sticky top-0 z-50 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
        
     
        <div className="flex items-center cursor-pointer">
        <Link to="/">  <img src="/logo.png" alt="logo" href="/" className="md:w-60 w-40 h-20 sm:w-50" /> </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
          <Link to="/" className="hover:text-[#2ECC71]">Explore</Link>
<Link to="/screens/Artist" className="hover:text-[#2ECC71]">Artist Bookings</Link>
<Link to="/screens/Event" className="hover:text-[#2ECC71]">Event Management</Link>


          <a
            href="#"
            className="bg-[#2ECC71] text-black font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#2ECC71] transition duration-300 text-sm"
          >
            List Your Event
          </a>

          <CiGlobe className="text-2xl" />
          <CgProfile className="text-2xl" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 font-medium text-sm">
          <a href="/" className="block hover:text-[#2ECC71]">Explore</a>
          <a href="/" className="block hover:text-[#2ECC71]">Artist Bookings</a>
          <a href="/" className="block hover:text-[#2ECC71]">Event Management</a>
          <a
            href="#"
            className="block text-center bg-[#2ECC71] text-black font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#2ECC71] transition duration-300"
          >
            List Your Event
          </a>
          <div className="flex space-x-4 text-2xl pt-2">
            <CiGlobe />
            <CgProfile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
