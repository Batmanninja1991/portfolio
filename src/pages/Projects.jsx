import React from 'react';
import project1 from '../assets/ocp.png';
import project2 from '../assets/ns.png';
import project3 from '../assets/todoList.png';
import project4 from '../assets/asteroids.png';

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

const Projects = () => {
  return (
    <div className="w-full h-full pt-28 text-white flex justify-center items-center bg-gray-900">
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
                className="rounded-xl w-full h-96 object-cover object-top"
                alt={project.alt}
              />
              <p className="text-center bg-white tracking-wide text-[26px] text-black rounded-xl p-3 w-full">
                {project.title}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
