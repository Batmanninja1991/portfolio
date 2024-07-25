import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-black h-full p-10">
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-16 xl:gap-32 text-white text-[22px]">
          <Link to="/">
            <p className="hover:underline" aria-label="home">Home</p>
          </Link>
          <Link to="/projects">
            <p className="hover:underline" aria-label="projects">Projects</p>
          </Link>
          <Link to="/about">
            <p className="hover:underline" aria-label="about">About</p>
          </Link>
          <Link to="/contact">
            <p className="hover:underline" aria-label="contact">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
