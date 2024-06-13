import React from "react";
import project1 from "../assets/ocp.jpg";
import project2 from "../assets/ns.jpg";
import project3 from "../assets/todoList.jpg";
import project4 from "../assets/asteroids.jpg";

const Projects = () => {
  return (
    <div className="w-full h-full bg-black pt-28">
      <div className="flex flex-col justify-center items-center gap-6 p-4">
        <div className="flex flex-col text-lg">
          <a
            target="_blank"
            href="https://github.com/batmanninja1991/Optimus-community-programs"
          >
            <img src={project1} className="rounded-xl w-[400px]" />
            <p>Customer Company Website</p>
          </a>
        </div>
        <div className="flex flex-col text-lg">
          <a
            target="_blank"
            href="https://github.com/batmanninja1991/nailSalon"
          >
            <img src={project2} className="rounded-xl w-[400px]" />
            <p>Customer Nail Salon Website</p>
          </a>
        </div>
        <div className="flex flex-col text-lg">
          <a target="_blank" href="https://github.com/batmanninja1991/todoList">
            <img src={project3} className="rounded-xl w-[400px]" />
            <p>Todo List</p>
          </a>
        </div>
        <div className="flex flex-col text-lg">
          <a
            target="_blank"
            href="https://github.com/batmanninja1991/asteroids"
          >
            <img src={project4} className="rounded-xl w-[400px]" />
            <p>Asteroids Game</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
