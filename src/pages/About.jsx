import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full pt-28 text-white flex justify-center items-center"
    >
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <p className="text-lg mb-8">
          Hello! I'm David Shaw, a junior full stack web developer with a
          passion for creating web applications that are both functional and
          visually appealing. I have a strong foundation in both front-end and
          back-end technologies and enjoy working on projects that challenge me
          to learn and grow as a developer.
        </p>
        <p className="text-lg mb-8">
          My journey in web development began with a curiosity about how
          websites are built and a desire to create my own. Since then, I have
          developed a wide range of skills and have worked on various projects,
          from simple landing pages to full-fledged web applications.
        </p>
        <p className="text-lg mb-8">
          I am proficient in HTML, CSS, JavaScript, and have experience working
          with modern frameworks and libraries like React and Node.js. I am also
          familiar with Tailwind CSS for building responsive and modern designs
          quickly.
        </p>
        <p className="text-lg mb-8">
          I am constantly learning and staying up-to-date with the latest trends
          and technologies in web development to ensure that I am always
          delivering the best possible solutions for my projects.
        </p>
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
  );
};

export default About;
