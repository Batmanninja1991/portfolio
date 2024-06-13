import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<Hero />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
