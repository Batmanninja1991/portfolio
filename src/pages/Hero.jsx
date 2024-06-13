import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen flex justify-center text-center pt-28 bg-gray-900">
      <div className="w-3/4 flex flex-col justify-center gap-20 text-left">
        <div>
          <p className="text-base text-white">Hi, my name is</p>
          <h1 className="pl-4 text-5xl text-blue-600">David Shaw.</h1>
          <p className="pl-4 text-2xl leading-loose text-blue-300">A Full Stack Web Developer</p>
          <p className="text-base leading-tight text-white">
            My current focus is on developing user-friendly software that
            combines aesthetics with functionality.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/batmanninja1991"
            className="flex flex-col items-center"
          >
            <FaGithub size={50} className="text-purple-800" />
            <p className="mt-4 text-white">GitHub</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/david-shaw-385049189/"
            className="flex flex-col items-center"
          >
            <FaLinkedin size={50} className="text-blue-600" />
            <p className="mt-4 text-white">LinkedIn</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:sterilemindwebdesign@gmail.com"
            className="flex flex-col items-center"
          >
            <AiOutlineMail size={50} className="text-white" />
            <p className="mt-4 text-white">Email</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
