import React from 'react';
import './AboutMe.css';  // Make sure your CSS is linked

function AboutMe() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Java', 'ASP .NET MVC', 'Node.js', 'Php', 'Python', 'MySQL'
  ];

  return (
    <section className="about" data-aos="fade-up">
      <div className="hero">
        <h1>Hi, I'm Jaymin Raval</h1>
        <p className="tagline">Web Developer | IT Enthusiast</p>
      </div>

      <div className="intro">
        <p>I am a final-year Master's student at Hemchandracharya North Gujarat University (HNGU), 
          with a passion for coding and building web applications. My journey in technology started with a fascination for computers, 
          and it has led me to specialize in Java, web & App development, and software engineering.</p>
      </div>

      <div className="journey-timeline">
  <ul>
    {['2020: Started learning Java and web development', 
       '2021: Built first full-stack web application',
       '2022: Joined Java Bootcamp and advanced skills in Spring Boot',
       '2023: Freelance Web Developer | Contributed to open-source projects']
       .map((event, index) => (
         <li key={index} style={{ animationDelay: `${index * 0.5}s` }}>
           {event}
         </li>
       ))}
  </ul>
</div>


      <div className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
        </div>
      </div>

      <div className="personal-info">
        <h2>Personal Information</h2>
        <div className="info-grid">
          <div className="info">
            <strong>Birthday:</strong> 18 Jun 2003
          </div>
          <div className="info">
            <strong>Email:</strong> jayminraval57@email.com
          </div>
          <div className="info">
            <strong>City:</strong> Palanpur, Gujarat
          </div>
          <div className="info">
            <strong>Freelance:</strong> Available
          </div>
          <div className="info">
            <strong>Phone:</strong> +91 70469 57063
          </div>
        </div>
      </div>

      <div className="cta">
        <p>Want to work together or have any questions? <a href="#contact">Get in touch!</a></p>
      </div>
    </section>
  );
}

export default AboutMe;
