// src/components/Projects.js
import React, { useEffect } from 'react';
import { FaCode, FaLaptopCode, FaBook, FaFilm } from 'react-icons/fa'; // Movie icon added here
import './Projects.css'; // Import your CSS file

const projects = [
  {
    title: 'Portfolio Website',
    description: 'This portfolio website where you can see my work and skills.',
    icon: <FaLaptopCode size={40} color="#007bff" />, // Laptop code icon
    link: '#', // Replace with actual link if available
  },
  {
    title: 'Online Attendance System',
    description: 'A Java-based system to manage attendance for schools and colleges.',
    icon: <FaCode size={40} color="#28a745" />, // Code icon
    link: '#', // Replace with actual link if available
  },
  {
    title: 'Library Management System',
    description: 'A Java-based system for managing books in a library.',
    icon: <FaBook size={40} color="#ffc107" />, // Book icon
    link: '#', // Replace with actual link if available
  },
  {
    title: 'Blog Website',
    description: 'A dynamic blog platform where users can post and comment.',
    icon: <FaCode size={40} color="#dc3545" />, // Code icon
    link: '#', // Replace with actual link if available
  },
  {
    title: 'The Movie Review App (IMDb Clone)',
    description: 'Build a seamless Movie Review App using React for the frontend and ASP.NET MVC for the backend, providing users with movie details, ratings, and reviews.',
    icon: <FaFilm size={40} color="#f39c12" />, // Movie icon
    link: '#', // Add the actual link to the project
  },
];

function Projects() {
  useEffect(() => {
    // Scroll-based background color change (if needed)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollY / pageHeight) * 100;

      if (scrollPercentage < 50) {
        document.body.style.backgroundColor = 'rgb(54, 162, 235)'; // Blue color
      } else {
        document.body.style.backgroundColor = 'rgb(75, 192, 192)'; // Greenish color
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">
              {project.icon}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
