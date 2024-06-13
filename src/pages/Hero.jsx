import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen flex justify-center text-center">
      <div className="w-3/4 flex flex-col justify-center gap-20 text-left">
        <div>
          <p className="text-base">Hi, my name is</p>
          <h1 className="text-5xl">David Shaw.</h1>
          <p className="text-xl leading-loose">A Full Stack Web Developer</p>
          <p className="text-base leading-tight">
            My current focus is on developing user-friendly software that
            combines aesthetics with functionality.
          </p>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <a target="_blank" href="https://github.com/batmanninja1991">
            <FaGithub size={40} className="text-purple-800" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/david-shaw-385049189/"
          >
            <FaLinkedin size={40} className="text-blue-600" />
          </a>
          <a target="_blank" href="mailto:sterilemindwebdesign@gmail.com">
            <AiOutlineMail size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
