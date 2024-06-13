import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full h-[80px] bg-white fixed top-0 left-0 z-50">
      <div className="h-full flex justify-between items-center px-8">
        <div>
          <Link to="/">
            <p className="text-xl lg:text-2xl">David Shaw</p>
          </Link>
        </div>
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:underline text-lg">
            Home
          </Link>
          <Link to="/projects" className="hover:underline text-lg">
            Projects
          </Link>
          <Link to="/about" className="hover:underline text-lg">
            About
          </Link>
          <Link to="/contact" className="hover:underline text-lg">
            Contact
          </Link>
        </div>
        <div
          className="flex justify-center items-center gap-4 md:hidden z-50"
          onClick={handleMenu}
        >
          {!menuOpen ? (
            <AiOutlineMenu size={40} />
          ) : (
            <AiOutlineClose size={40} className="text-white" />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden">
          <ul className="flex flex-col justify-center items-center gap-12 p-8 h-full">
            <Link to="/" onClick={handleLinkClick}>
              <li className="hover:underline text-white text-2xl">Home</li>
            </Link>
            <Link to="/projects" onClick={handleLinkClick}>
              <li className="hover:underline text-white text-2xl">Projects</li>
            </Link>
            <Link to="/about" onClick={handleLinkClick}>
              <li className="hover:underline text-white text-2xl">About</li>
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <li className="hover:underline text-white text-2xl">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
