import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full h-[80px] bg-white fixed top-0 left-0 z-50 px-4">
      <div className="h-full flex justify-between items-center px-8">
        <Link to="/">
          <img
            src={logo}
            className="w-1/2 h-1/2 object-contain"
            alt="logo"
            aria-label="logo"
          />
        </Link>
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:underline text-lg" aria-label="home">
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:underline text-lg"
            aria-label="projects"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:underline text-lg"
            aria-label="about"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline text-lg"
            aria-label="contact"
          >
            Contact
          </Link>
        </div>
        <button
          className="flex justify-center items-center gap-4 md:hidden z-50"
          onClick={handleMenu}
          aria-label="menu"
        >
          {!menuOpen ? (
            <AiOutlineMenu size={40} />
          ) : (
            <AiOutlineClose size={40} className="text-white" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden">
          <ul className="flex flex-col items-end p-20 gap-12 h-full">
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="hover:underline text-white text-2xl"
                aria-label="home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={handleLinkClick}
                className="hover:underline text-white text-2xl"
                aria-label="projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="hover:underline text-white text-2xl"
                aria-label="about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="hover:underline text-white text-2xl"
                aria-label="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
