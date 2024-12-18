import React, { useState, useRef, useEffect } from 'react';
import { FaCode, FaLaptopCode, FaBook, FaFilm, FaTimes } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'This portfolio website where you can see my work and skills.',
    icon: <FaLaptopCode size={40} color="#007bff" />,
    fullDescription: 'A dynamic portfolio website built using React.js.',
    githubLink: 'https://github.com/yourusername/portfolio',
    liveDemoLink: 'https://your-portfolio-live.com',
  },
  {
    title: 'Online Attendance System',
    description: 'A Java-based system to manage attendance for schools and colleges.',
    icon: <FaCode size={40} color="#28a745" />,
    fullDescription: 'Manage student attendance using Java and MySQL.',
    githubLink: 'https://github.com/yourusername/attendance-system',
  },
  {
    title: 'Library Management System',
    description: 'A Java-based system for managing books in a library.',
    icon: <FaBook size={40} color="#ffc107" />,
    fullDescription: 'Helps libraries manage book checkouts, returns, and availability.',
    githubLink: 'https://github.com/yourusername/library-management',
  },
  {
    title: 'Blog Website',
    description: 'A dynamic blog platform where users can post and comment.',
    icon: <FaCode size={40} color="#dc3545" />,
    fullDescription: 'Built with PHP and MySQL for blogging and commenting.',
    githubLink: 'https://github.com/yourusername/blog-website',
  },
  {
    title: 'The Movie Review App (IMDb Clone)',
    description: 'A movie review app using React and ASP.NET MVC.',
    icon: <FaFilm size={40} color="#f39c12" />,
    fullDescription: 'Rate and review movies using React.js frontend and ASP.NET MVC backend.',
    githubLink: 'https://github.com/yourusername/movie-review-app',
    liveDemoLink: 'https://your-movie-app-live.com',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const projectListRef = useRef(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Hide the scroll indicator after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (projectListRef.current.scrollLeft > 10) {
        setShowScrollIndicator(false);
      }
    };

    const projectList = projectListRef.current;
    projectList.addEventListener('scroll', handleScroll);

    return () => projectList.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="projects">
      <h2>My Projects</h2>

      {showScrollIndicator && (
        <span className="scroll-indicator">Scroll to see more projects →</span>
      )}

      <div className="project-list" ref={projectListRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="view-project-btn">View Project</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <FaTimes size={20} />
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.fullDescription}</p>
            {selectedProject.githubLink && (
              <a href={selectedProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
            {selectedProject.liveDemoLink && (
              <a href={selectedProject.liveDemoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
