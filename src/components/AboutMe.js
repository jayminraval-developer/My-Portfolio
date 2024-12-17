import React, { useEffect } from 'react';
import './AboutMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // animation speed
    });
  }, []);

  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'C#', icon: 'fab fa-cuttlefish' },
    { name: 'ASP .NET MVC', icon: 'fab fa-microsoft' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'jQuery', icon: 'fab fa-jquery' },
    { name: 'Oracle', icon: 'fab fa-java' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'C', icon: 'fas fa-cogs' },
    { name: 'C++', icon: 'fas fa-cogs' }
  ];

  return (
    <section className="about" data-aos="fade-up">
      <div className="hero">
        <h1>Hi, I'm Jaymin Raval</h1>
        <p className="tagline">Web Developer | IT Enthusiast</p>
      </div>

      <div className="intro">
        <p>
          I am a final-year Master's student at Hemchandracharya North Gujarat University (HNGU),
          with a passion for coding and building web applications. My journey in technology started with a fascination for computers,
          and it has led me to specialize in Java, web & app development, and software engineering.
        </p>
      </div>

      <div className="journey-timeline">
        <ul>
          {[
            'About My Journey',
            '2020-2021: Started studying Computer Science and learned C, C++, HTML5, CSS3, and JavaScript.',
            '2021-2022: Learned C#, ASP.NET, and PHP, gaining back-end development skills.',
            '2022-2023: Focused on React.js, Node.js, and full-stack web development.',
            '2023-2024: Attended a bootcamp on full-stack development, learning advanced web technologies.'
          ].map((event, index) => (
            <li key={index}>
              <div className="timeline-point"></div>
              {event}
            </li>
          ))}
        </ul>
      </div>

      <div className="personal-info">
        <h2>Contact Information</h2>
        <div className="info-grid">
          <div className="info">Email: jaymin.raval@example.com</div>
          <div className="info">Location: Palanpur, India</div>
          <div className="info">GitHub: github.com/jaymin-raval</div>
          <div className="info">LinkedIn: linkedin.com/in/jaymin-raval</div>
        </div>
      </div>

      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              data-skill={skill.name}
            >
              <i className={skill.icon}></i> 
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
