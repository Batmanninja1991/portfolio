import React, { useEffect } from "react";
import project1 from "../assets/contractorWebsite.png";
import project2 from "../assets/DSWebDesign Screenshot.png";
import project3 from "../assets/ocp.png";
import project4 from "../assets/ns.png";
import profileImg from "../assets/profileImg.jpeg";
import bgImg from "../assets/futuristicHome.webp";
import space from "../assets/space.png";
import stars from "../assets/stars.png";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

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
    alt: "Wordpress Portfolio",
    link: "https://davidshawwebdesign.checkpowercord.com",
    code: "",
    title: "Wordpress Portfolio",
    bio: "A professional WordPress portfolio website designed to showcase the work and services of a creative professional. This site features a clean and modern layout, highlighting project portfolios, detailed service descriptions, and contact information. With a user-friendly interface, it ensures easy navigation and accessibility, providing visitors with a seamless experience to explore and connect.",
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

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <button
            onClick={scrollToAbout}
            className="w-[200px] mx-auto bg-white text-black text-lg font-bold py-2 px-4 rounded-xl md:hover:scale-125 transition-all duration-500"
            aria-label="scroll to about"
          >
            About Me
          </button>
        </div>
      </header>

      <main>
        {/* About Me Section */}
        <section
          id="about-section"
          className="w-full h-full md:h-screen py-4 flex md:flex-row flex-col justify-center items-center text-center bg-gray-800 bg-cover bg-top"
          style={{ backgroundImage: `url(${space})` }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="flex flex-col gap-8 justify-center items-center">
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
              <button
                onClick={scrollToProjects}
                className="w-[200px] bg-white text-black text-lg font-bold py-2 px-4 rounded-xl md:hover:scale-125 transition-all duration-500"
                aria-label="scroll to projects"
              >
                Projects
              </button>
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

              <hr className="w-2/3 border-1 border-gray-600 py-2" />

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
        </section>
      </main>
    </div>
  );
};

export default Hero;
