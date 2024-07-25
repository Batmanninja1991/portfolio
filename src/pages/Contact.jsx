import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import bgImg from "../assets/space.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="contact"
      className="w-full h-screen pt-28 bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="text-black flex justify-center items-center">
        <div className="w-full h-full max-w-3xl flex flex-col gap-4 p-4 md:p-8 justify-center text-white bg-black/80 rounded-3xl">
          <h1 className="text-4xl font-bold text-center py-2">Contact Me</h1>
          <p className="text-lg text-center">
            I'm always open to discussing web development projects, freelance
            work, or opportunities to collaborate. Feel free to reach out to me
            through any of the platforms below.
          </p>
          <div className="flex flex-row justify-center items-center gap-12 p-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/batmanninja1991"
              className="flex flex-col items-center"
              aria-label="personal github link"
            >
              <FaGithub size={50} className="text-purple-800" />
              <p className="mt-4">GitHub</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/david-shaw1991/"
              className="flex flex-col items-center"
              aria-label="personal linkedin link"
            >
              <FaLinkedin size={50} className="text-blue-600" />
              <p className="mt-4">LinkedIn</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:davidshawwebdesign@gmail.com"
              className="flex flex-col items-center"
              aria-label="business email"
            >
              <AiOutlineMail size={50} className="" />
              <p className="mt-4">Email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
