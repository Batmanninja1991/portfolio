import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-black h-full p-10">
        <div className="flex justify-around items-center gap-4 text-white text-[22px]">
          <Link to="/">
            <p className="hover:underline">Home</p>
          </Link>
          <Link to="/projects">
            <p className="hover:underline">Projects</p>
          </Link>
          <Link to="/about">
            <p className="hover:underline">About</p>
          </Link>
          <Link to="/contact">
            <p className="hover:underline">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
