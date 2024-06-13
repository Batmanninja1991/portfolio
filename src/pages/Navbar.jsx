import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full h-full bg-transparent">
      <div className="h-[80px] flex justify-between items-center px-8">
        <div>
          <Link to="/"><p className="text-xl lg:text-2xl font-futura">David Shaw</p></Link>
        </div>
        <div
          className="flex justify-center items-center gap-4 md:hidden"
          onClick={handleMenu}
        >
          {!menuOpen ? (
            <AiOutlineMenu size={40} />
          ) : (
            <AiOutlineClose size={40} />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="bg-transparent w-full h-full menu z-50">
          <ul className="flex flex-col justify-center items-center gap-12 p-8">
            <Link to="/">
              <li className="hover:underline">Home</li>
            </Link>
            <Link to="/projects">
              <li className="hover:underline">Projects</li>
            </Link>
            <Link to="/about">
              <li className="hover:underline">About</li>
            </Link>
            <Link to="/contact">
              <li className="hover:underline">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
