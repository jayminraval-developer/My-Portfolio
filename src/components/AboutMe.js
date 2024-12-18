import React, { useEffect, useRef } from 'react';
import './AboutMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1600, // Animation speed
    });

    const skillsContainer = skillsContainerRef.current;

    // Duplicate the content to achieve seamless infinite scroll
    skillsContainer.innerHTML += skillsContainer.innerHTML;

    // Handle manual scroll interruption
    let isScrolling;
    const handleScroll = () => {
      skillsContainer.style.animationPlayState = 'paused';
      clearTimeout(isScrolling);

      // Resume animation after 1.5 seconds of inactivity
      isScrolling = setTimeout(() => {
        skillsContainer.style.animationPlayState = 'running';
      }, 1500);
    };

    // Attach the scroll event listener
    skillsContainer.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listener on unmount
      skillsContainer.removeEventListener('scroll', handleScroll);
    };
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
    { name: 'C++', icon: 'fas fa-cogs' },
  ];

  return (
    <div className="about-me-container">
      {/* Combined Hero and Intro Section */}
      <section className="combined-section" data-aos="fade-up">
        <div className="hero-section">
          <h1>I'm Jaymin Raval</h1>
          <p className="tagline">Web Developer | IT Enthusiast</p>
        </div>

        <div className="intro-section">
          <h2>About Me</h2>
          <p>
            I am a final-year Master's student at Hemchandracharya North Gujarat University (HNGU),
            with a passion for coding and building web applications. My journey in technology started with a fascination for computers,
            and it has led me to specialize in Java, web & app development, and software engineering.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section" data-aos="fade-up">
        <h2>My Journey</h2>
        <div className="journey-timeline">
          <ul>
            <li><div className="timeline-point"></div> <span>2020-2021:</span> Started studying Computer Science and learned C, C++, HTML5, CSS3, and JavaScript.</li>
            <li><div className="timeline-point"></div> <span>2021-2022:</span> Learned C#, ASP.NET, and PHP, gaining back-end development skills.</li>
            <li><div className="timeline-point"></div> <span>2022-2023:</span> Focused on React.js, Node.js, and full-stack web development.</li>
            <li><div className="timeline-point"></div> <span>2023-2024:</span> Attended a bootcamp on full-stack development, learning advanced web technologies.</li>
          </ul>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-section" data-aos="fade-up">
        <h2>Contact Information</h2>
        <div className="info-grid">
          <div className="info">Email: jayminraval57@gmail.com</div>
          <div className="info">Location: Palanpur, India</div>
          <div className="info">GitHub: jayminraval-developer</div>
          <div className="info">LinkedIn: jayminraval7046</div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" data-aos="fade-up">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-container" ref={skillsContainerRef}>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
