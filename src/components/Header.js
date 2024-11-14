import React, { useEffect } from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import jayminImage from './IMG/jaymin.JPG'; // Profile image
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

function Header() {
  useEffect(() => {
    // Initialize AOS library
    AOS.init();
  }, []);

  return (
    <header className="header">
      <div className="profile-container" data-aos="fade-up" data-aos-delay="500">
        {/* Profile Picture */}
        <img
          src={jayminImage}
          alt="Jaymin Raval"
          className="profile-pic"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <h1 className="name">Jaymin Raval</h1>
        <p className="description">Web Developer | IT Enthusiast</p>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/jayminraval7046/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1000">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/jayminraval-developer" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1300">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.instagram.com/jaymin_raval___hindu?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>

      {/* Navbar */}
      <nav className="navbar" data-aos="fade-up" data-aos-delay="2000">
        <ul>
          <li><a href="#about">About Me</a></li>
          {/* <li><a href="#skills">Skills</a></li> */}
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
