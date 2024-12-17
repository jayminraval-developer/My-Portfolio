// src/App.js
import React, { useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

// Import AOS (if you plan to use it for animations)
// import AOS from 'aos';
// Import AOS CSS (if you plan to use it)
// import 'aos/dist/aos.css';

import Header from "./components/Header"; // Header component
import AboutMe from "./components/AboutMe"; // AboutMe component
// import Skills from "./components/Skills"; // Skills component
import Projects from "./components/Projects"; // Projects component
import Contact from "./components/Contact"; // Contact component
import Footer from "./components/Footer"; // Import Footer component

import "./App.css"; // Your global styles

function App() {
  return (
    <div className="App">
      <Header /> {/* Header with profile and navbar */}
      {/* Other Sections */}
      <section id="about">
        <AboutMe /> {/* AboutMe component */}
      </section>
      {/* <section id="skills">
        <Skills /> {/* Skills component }
      </section> */}
      <section id="projects">
        <Projects /> {/* Projects component */}
      </section>
      <section id="contact">
        <Contact /> {/* Contact component */}
      </section>
      {/* Footer */}
      <Footer /> {/* Add Footer component here */}
    </div>
  );
}

export default App;
