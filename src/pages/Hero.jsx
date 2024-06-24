import React from "react";
import project1 from "../assets/ocp.png";
import project2 from "../assets/ns.png";
import project3 from "../assets/todoList.png";
import project4 from "../assets/asteroids.png";
import profileImg from "../assets/profileImg.jpeg";
import bgImg from "../assets/futuristicHome.webp";
import space from "../assets/space.png";
import stars from "../assets/stars.png";

const projects = [
  {
    img: project1,
    alt: "Customer Company Website",
    link: "https://ocp.davidshawwebdesign.com",
    code: "https://github.com/Batmanninja1991/Optimus-community-programs",
    title: "Company Website",
    bio: "A comprehensive company website designed for an Oregon state community program, offering detailed information and resources for local residents. This project showcases a professional and user-friendly interface with easy navigation and informative content.",
  },
  {
    img: project2,
    alt: "Customer Nail Salon Website",
    link: "https://batmanninja1991.github.io/nailSalon",
    code: "https://github.com/Batmanninja1991/nailSalon",
    title: "Nail Salon Website",
    bio: "An elegant and stylish website created for a nail salon, featuring services, pricing, and appointment booking. The design highlights the salon's aesthetic appeal with vibrant visuals and a clean layout, ensuring an excellent user experience.",
  },
  {
    img: project3,
    alt: "Todo List",
    link: "https://batmanninja1991.github.io/todoList",
    code: "https://github.com/Batmanninja1991/todoList",
    title: "Todo List",
    bio: "A simple yet efficient todo list application designed to help users manage their daily tasks. This project demonstrates functionality for adding, editing, and deleting tasks, with a minimalist design for easy use and organization.",
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

const Hero = () => {
  return (
    <div className="w-full h-full text-white flex flex-col rounded-3xl">
      <header
        id="hero"
        className="w-full h-screen flex flex-col justify-center items-center text-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center gap-10 text-left">
          <div className="w-full bg-black/90 p-8 rounded-3xl">
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
      </header>

      <main>
        {/* About Me Section */}
        <section
          id="about-section"
          className="relative w-full h-screen flex md:flex-row flex-col justify-center items-center text-center bg-gray-800 bg-cover bg-top"
          style={{ backgroundImage: `url(${space})` }}
        >
          <div className="absolute inset-0 z-10 flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="py-3 px-2 bg-transparent border-black border-4 rounded-e-full w-[300px] h-[300px] rotate-135">
              <div className="bg-transparent border-gray-700 border-4 rounded-e-full w-[300px] h-[300px]">
                <div className="p-6">
                  <img
                    src={profileImg}
                    className="rounded-3xl -translate-x-6"
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center p-4 bg-black/80 rounded-3xl">
              <h2 className="text-4xl text-white underline underline-offset-4 my-6">
                About Me
              </h2>
              <p className="text-lg text-blue-300 text-center mb-4 leading-relaxed tracking-wide md:pl-10">
                A Full Stack Web Developer with a passion for creating web
                applications that are both functional and visually appealing.
                Big passion with Sci-fi || Outer Space.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects-section"
          className="w-full h-full flex flex-col justify-center items-center text-center bg-center bg-cover bg-fixed"
          style={{ backgroundImage: `url(${stars})` }}
        >
          <div className="mx-auto py-10">
            <h2 className="text-4xl text-white underline underline-offset-4">
              Projects
            </h2>
          </div>
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
                <p className="text-left bg-white tracking-wide text-black pt-8 px-4 w-full h-[250px] rounded-b-xl">
                  {project.bio}
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="flex flex-col items-center gap-4 md:hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-full h-full bg-white hover:bg-gray-200 text-black rounded p-2 m-4">
                      Website
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.code}
                    className="flex flex-col items-center gap-4 md:hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-full h-full bg-white hover:bg-gray-200 text-black rounded p-2 m-4">
                      Code
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
