import React, { useEffect } from "react";
import project1 from "../assets/ocp.png";
import project2 from "../assets/ns.png";
import project3 from "../assets/plumbingWebsite.png";
import project4 from "../assets/asteroids.png";
import stars from "../assets/stars.png";

const projects = [
  {
    img: project1,
    alt: "Company Website",
    link: "https://ocp.davidshawwebdesign.com",
    code: "https://github.com/Batmanninja1991/nailSalon",
    title: "Company Website",
    bio: "A comprehensive company website designed for an Oregon state community program, offering detailed information and resources for local residents. This project showcases a professional and user-friendly interface with easy navigation and informative content.",
  },
  {
    img: project2,
    alt: "Nail Salon Website",
    link: "https://ocp.davidshawwebdesign.com",
    code: "https://github.com/Batmanninja1991/Optimus-community-programs",
    title: "Nail Salon Website",
    bio: "An elegant and stylish website created for a nail salon, featuring services, pricing, and appointment booking. The design highlights the salon's aesthetic appeal with vibrant visuals and a clean layout, ensuring an excellent user experience.",
  },
  {
    img: project3,
    alt: "Plumbing Website",
    link: "https://salemplumbing.davidshawwebdesign.com",
    code: "https://github.com/Batmanninja1991/plumbingWebsite.git",
    title: "Plumbing Website",
    bio: "A professional website designed for a plumbing business, providing information about services, pricing, and contact details. This project features a user-friendly interface with a clean layout, ensuring easy navigation and access to important information. The design emphasizes the business's reliability and expertise in plumbing services.",
  },
  {
    img: project4,
    alt: "Asteroids Game",
    link: "https://batmanninja1991.github.io/asteroids",
    code: "https://github.com/Batmanninja1991/asteroids",
    title: "Asteroids Game",
    bio: "A fun and engaging browser-based game inspired by the classic Asteroids arcade game. This project highlights game development skills with smooth animations, interactive controls, and challenging gameplay, providing an entertaining user experience.",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full h-full pt-28 text-white flex justify-center items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${stars})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-20 p-10 max-w-6xl">
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col text-lg items-center bg-purple-400 p-4 rounded-xl hover:scale-105 transition-all duration-500"
          >
            <p className="text-center font-semibold text-xl tracking-wide text-black py-4">
              {project.title}
            </p>
            <img
              src={project.img}
              className="w-full h-96 object-cover object-top rounded"
              alt={project.alt}
            />
            <p className="text-left bg-white tracking-wide text-black py-8 px-4 w-full h-full rounded-b-xl">
              {project.bio}
            </p>
            <div className="flex gap-2 mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
                className="flex flex-col items-center gap-4 md:hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full text-center bg-white hover:bg-gray-200 text-black rounded p-2 m-4">
                  Website
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.code}
                className="flex flex-col items-center gap-4 md:hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full text-center bg-white hover:bg-gray-200 text-black rounded p-2 m-4">
                  Code
                </div>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
