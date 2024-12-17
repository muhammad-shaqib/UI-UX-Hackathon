import React from "react";
import {  FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const MainHeader = () => {
  return (
    <nav className="bg-white text-[#252B42] py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="text-4xl font-bold">
          <a href="#" className="hover:text-[#252B42]">Bandage</a>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-8 text-[#737373] font-bold">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Shop</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Pages</a>
        </div>

        {/* Right Side: Login/Register and Icons */}
        <div className="flex items-center space-x-4 ml-8"> {/* Added margin-left to push right */}
          {/* Login Icon */}
          <FiUser className="text-lg" />
          {/* Login and Register Links */}
          <div className="flex items-center space-x-2 text-[#23A6F0] font-bold ml-6">
            <a href="#" className="hover:text-gray-400">Login</a>
            <span className="text-gray-500">/</span>
            <a href="#" className="hover:text-gray-400">Register</a>
          </div>

          {/* Icons with individual divs */}
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4">
            <CiSearch className="text-lg text-[#23A6F0]" />
          </div>
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4">
            <RiShoppingCart2Line className="text-lg text-[#23A6F0]" />
            <span className="text-[#23A6F0] px-[5px]">1</span> 
          </div>
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4">
            <FaRegHeart className="text-lg text-[#23A6F0]" />
            <span className="text-[#23A6F0] px-[5px]">1</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
