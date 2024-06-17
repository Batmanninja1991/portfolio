import React from 'react';
import project1 from '../assets/ocp.png';
import project2 from '../assets/ns.png';
import project3 from '../assets/todoList.png';
import project4 from '../assets/asteroids.png';
import profileImg from '../assets/profileImg.jpeg';

const projects = [
  {
    img: project1,
    alt: "Customer Company Website",
    link: "https://batmanninja1991.github.io/Optimus-community-programs",
    title: "Company Website",
  },
  {
    img: project2,
    alt: "Customer Nail Salon Website",
    link: "https://batmanninja1991.github.io/nailSalon",
    title: "Nail Salon Website",
  },
  {
    img: project3,
    alt: "Todo List",
    link: "https://batmanninja1991.github.io/todoList",
    title: "Todo List",
  },
  {
    img: project4,
    alt: "Asteroids Game",
    link: "https://batmanninja1991.github.io/asteroids",
    title: "Asteroids Game",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-full text-white">
      <div
        id="hero"
        className="w-full h-screen flex flex-col justify-center items-center text-center bg-gray-900"
      >
        <div className="w-3/4 flex flex-col justify-center gap-10 text-left">
          <div>
            <p className="text-base text-white">Hi, my name is</p>
            <h1 className="pl-4 text-5xl text-blue-600">David Shaw.</h1>
            <p className="pl-8 text-xl leading-loose text-blue-300">
              A Full Stack Web Developer
            </p>
            <p className="text-base pt-2 leading-tight text-white">
              My current focus is on developing user-friendly software that
              combines aesthetics with functionality.
            </p>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div
        id="about-section"
        className="w-full h-screen flex md:flex-row flex-col justify-center items-center bg-gray-800 text-center"
      >
        <div className="py-3 px-2 bg-transparent border-gray-700 border-4 rounded-e-full w-[300px] h-[300px] rotate-135">
          <div className="bg-transparent border-black border-4 rounded-e-full w-[300px] h-[300px] rotate-135">
            <div className="p-6">
              <img src={profileImg} className="rounded-3xl -rotate-135" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center p-4">
          <h2 className="text-3xl text-white underline underline-offset-4 my-10">About Me</h2>
          <p className="text-lg text-blue-300 text-center mb-4 leading-relaxed tracking-wide">
            Hello! I'm David Shaw, a junior full stack web developer with a
            passion for creating web applications that are both functional and
            visually appealing.
          </p>
        </div>
        <img src={profileImg} className="hidden md:w-[400px]" />
      </div>

      {/* Projects Section */}
      <div
        id="projects-section"
        className="w-full h-full flex flex-col justify-center items-center bg-gray-700 text-center"
      >
        <div className="mx-auto py-10">
          <h2 className="text-3xl text-white underline underline-offset-4">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-20 p-10 max-w-6xl">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col text-lg items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
                className="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.img}
                  className="rounded-xl w-full h-96 object-cover"
                  alt={project.alt}
                />
                <p className="text-center bg-white text-black rounded-xl p-3 w-full">
                  {project.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
