import React, { useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon } from 'react-icons/fa';
import './home.css';

const Home = () => {
  const containerRef = useRef();

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <section className="container" ref={containerRef}>
      <header className="header">
        <h1>Takunda Bvakacha</h1>
        <p>Front-End Developer</p>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:takundabvax@gmail.com">
            <FaEnvelope />
          </a>
          <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            <FaMoon />
          </button>
        </div>
      </header>

      <section className="intro">
        <h2>Crafting Engaging and Innovative Digital Solutions</h2>
        <p>
          As a front-end developer, I specialize in creating interactive and user-centric web applications that elevate the digital experience. 
          With a solid foundation in HTML, CSS, and JavaScript, alongside practical expertise in React and Next.js, 
          I design responsive, high-performance web solutions tailored to meet users' needs.
        </p>
      </section>
      
      <section className="cta">
        <button className="contact-button">Email Me</button>
      </section>
    </section>
  );
};

export default Home;
