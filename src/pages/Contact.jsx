import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact" className="w-full h-screen pt-28">
      <div className="w-full h-full text-black flex justify-center items-center">
        <div className="w-3/4 md:w-1/2 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
          <p className="text-lg mb-8 text-center">
            I'm always open to discussing web development projects, freelance
            work, or opportunities to collaborate. Feel free to reach out to me
            through any of the platforms below.
          </p>
          <div className="flex flex-row justify-center items-center gap-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/batmanninja1991"
              className="flex flex-col items-center"
            >
              <FaGithub size={50} className="text-purple-800" />
              <p className="mt-4">GitHub</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/david-shaw1991/"
              className="flex flex-col items-center"
            >
              <FaLinkedin size={50} className="text-blue-600" />
              <p className="mt-4">LinkedIn</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:davidshawwebdesign@gmail.com"
              className="flex flex-col items-center"
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
