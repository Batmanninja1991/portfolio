import React, { useEffect } from "react";
import project1 from "../assets/contractorWebsite.png";
import project2 from "../assets/qehImg.png";
import project3 from "../assets/ocp.png";
import project4 from "../assets/ns.png";
import stars from "../assets/stars.png";

const projects = [
  {
    img: project1,
    alt: "General Contractor Website",
    link: "https://contractorllc.davidshawwebdesign.com",
    code: "https://github.com/Batmanninja1991/contractorWebsite.git",
    title: "Contractor Website",
    bio: "A professional website designed for a general contractor business, providing information about services, project portfolio, and contact details. This project features a user-friendly interface with a clean layout, ensuring easy navigation and access to important information.",
  },
  {
    img: project2,
    alt: "Wordpress Website",
    link: "https://qualityexteriorhomes.davidshawwebdesign.com",
    code: "#project2",
    title: "Wordpress Portfolio",
    bio: "A professional WordPress website designed to showcase the work and services of a Exterior Remodeling Company. This site features a clean and modern layout, highlighting project portfolios, detailed service descriptions, and contact information. With a user-friendly interface, it ensures easy navigation and accessibility, providing visitors with a seamless experience to explore and connect.",
  },
  {
    img: project3,
    alt: "Company Website",
    link: "https://ocp.davidshawwebdesign.com",
    code: "https://github.com/Batmanninja1991/nailSalon",
    title: "Company Website",
    bio: "A comprehensive company website designed for an Oregon state community program, offering detailed information and resources for local residents. This project showcases a professional and user-friendly interface with easy navigation and informative content.",
  },
  {
    img: project4,
    alt: "Nail Salon Website",
    link: "https://mintnaildesign.davidshawwebdesign.com",
    code: "https://github.com/Batmanninja1991/Optimus-community-programs",
    title: "Nail Salon Website",
    bio: "An elegant and stylish website created for a nail salon, featuring services, pricing, and appointment booking. The design highlights the salon's aesthetic appeal with vibrant visuals and a clean layout, ensuring an excellent user experience.",
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32 p-2 max-w-2xl xl:max-w-7xl">
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col text-lg items-center bg-purple-400/60 p-4 rounded-xl md:hover:scale-105 transition-all duration-500"
          >
            <p className="text-center font-semibold text-xl tracking-wide text-white py-4">
              {project.title}
            </p>
            <img
              src={project.img}
              className="w-full h-96 object-cover object-top rounded"
              alt={project.alt}
            />
            <p className="text-left bg-white tracking-wide text-black py-8 px-6 w-full h-full rounded-b-xl">
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
