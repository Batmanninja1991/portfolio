import React from "react";
import project1 from "../assets/ocp.png";
import project2 from "../assets/ns.png";
import project3 from "../assets/todoList.png";
import project4 from "../assets/asteroids.png";

const Projects = () => {
  return (
    <div className="w-full h-full pt-28 text-white flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 p-10 max-w-6xl">
        <div className="flex flex-col text-lg items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/batmanninja1991/Optimus-community-programs"
            className="flex flex-col items-center gap-4"
          >
            <img
              src={project1}
              className="rounded-xl w-3/4 md:w-full"
              alt="Customer Company Website"
            />
            <p className="text-center bg-white text-black rounded-xl p-2">
              Customer Company Website
            </p>
          </a>
        </div>
        <div className="flex flex-col text-lg items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/batmanninja1991/nailSalon"
            className="flex flex-col items-center gap-4"
          >
            <img
              src={project2}
              className="rounded-xl w-3/4 md:w-full"
              alt="Customer Nail Salon Website"
            />
            <p className="text-center bg-white text-black rounded-xl p-2">
              Customer Nail Salon Website
            </p>
          </a>
        </div>
        <div className="flex flex-col text-lg items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/batmanninja1991/todoList"
            className="flex flex-col items-center gap-4"
          >
            <img
              src={project3}
              className="rounded-xl w-3/4 md:w-full"
              alt="Todo List"
            />
            <p className="text-center bg-white text-black rounded-xl p-2">
              Todo List
            </p>
          </a>
        </div>
        <div className="flex flex-col text-lg items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/batmanninja1991/asteroids"
            className="flex flex-col items-center gap-4"
          >
            <img
              src={project4}
              className="rounded-xl w-3/4 md:w-full"
              alt="Asteroids Game"
            />
            <p className="text-center bg-white text-black rounded-xl p-2">
              Asteroids Game
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
