import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import aboutImg from "../assets/astronaut2.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="about"
      className="w-full h-full pt-28 text-white flex justify-center items-center"
    >
      <div
        className="mx-auto p-8 bg-cover lg:bg-bottom bg-right-bottom rounded-3xl"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="md:w-2/3 lg:w-1/2 rounded-3xl bg-black/70 text-center p-6">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <p className="text-lg">
            Hello! I'm David Shaw, I have had a passion for coding since I was a
            young teenager. It all started when I decided to find out how to
            brute force game saves on PlayStation to get modded items.
          </p>

          <div className="flex justify-center items-center py-4">
            <hr className="w-full border-1 border-gray-600" />
          </div>

          <p className="text-lg">
            Since then, I have grown more passionate about becoming a software
            engineer. I have chosen this path of web development to develop a
            solid understanding of the basics.
          </p>

          <div className="flex justify-center items-center py-4">
            <hr className="w-3/4 border-1 border-gray-600" />
          </div>

          <p className="text-lg">
            I am proficient in HTML, Tailwind/CSS, JavaScript, and have
            experience working with modern frameworks and libraries like React
            and Node.js.
          </p>

          <div className="flex justify-center items-center py-4">
            <hr className="w-1/2 border-1 border-gray-600" />
          </div>

          <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaHtml5 size={40} className="text-orange-600" />
              <p className="mt-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt size={40} className="text-blue-600" />
              <p className="mt-2">CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <IoLogoJavascript size={40} className="text-yellow-400" />
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FaReact size={40} className="text-blue-500" />
              <p className="mt-2">React</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs size={40} className="text-green-600" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <RiTailwindCssFill size={40} className="text-blue-400" />
              <p className="mt-2">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
