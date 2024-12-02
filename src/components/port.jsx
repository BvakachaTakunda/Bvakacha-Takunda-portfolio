import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon } from 'react-icons/fa';
import './port.css';
import './portproject.css'; 
import imageCode from '../images/WhatsApp Image 2024-11-25 at 00.18.40_6130a69b.jpg';
import imagePlan from '../images/WhatsApp Image 2024-11-25 at 00.21.03_fbe69ca2.jpg';
import imageCollab from '../images/WhatsApp Image 2024-08-28 at 20.28.40_f623aceb.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
  const itemsRef = useRef([]); 
  const containerRef = useRef(null); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(imageCode); 
  const [projectLink, setProjectLink] = useState('https://project-code.com'); 

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
    itemsRef.current.forEach((el) => observer.observe(el));

    return () => {
      itemsRef.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleWheelScroll = (event) => {
    event.preventDefault();
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: event.deltaY,
        behavior: 'smooth'
      });
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); 
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState); 
  };

  return (
    <div className={`scroll ${isDarkMode ? 'dark-mode' : ''}`} onWheel={handleWheelScroll}>
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

      <section className="scrolldown">
        <div className="about-experience2">
          <div className="about">
            <h3>About</h3>
            <p>
              I have been fortunate to learn from experienced developers who have guided me in understanding the fundamentals of web and mobile app development.
              Inspired by their journey of creating websites, mobile apps, and exploring advanced technologies like AI and ML, I am eager to apply these skills in my own projects.
            </p>
            <p>
              I am constantly expanding my knowledge in programming, focusing on building interactive websites and functional mobile apps.
              I am excited to continue growing in this field and to one day bring my own innovative ideas to life.
            </p>

            
          </div>

          <Link className='resume'><h4>Download CV</h4></Link>

          <div className="experience">
            <h3>Experience</h3>
            <p>
              I have gained hands-on experience in web development and app design, working on various projects that have sharpened my skills in:
            </p>
            <ul>
              <li><strong>HTML, CSS, JavaScript:</strong> Building responsive web pages and applications.</li>
              <li><strong>React:</strong> Developing dynamic and interactive user interfaces.</li>
              <li><strong>UI/UX Design:</strong> Creating user-friendly interfaces and enhancing overall user experiences.</li>
            </ul>

            <p>
              I am now focusing on integrating these skills into more advanced projects, aiming to deliver efficient, high-quality web and mobile applications.
            </p>

            <a className="tools">HTML</a>  <a className="tools">CSS</a> <a className="tools">JavaScript</a>
            <a className="tools">React</a>  <a className="tools">Node</a> 
          </div>

          <div className="what-we-do">
            
            <h2><a className='tools'><span role="img" aria-label="projects">🌀</span> MY WORKS!</a> <span role="img" aria-label="laptop">💻</span></h2>
            <div className="displaying">
             
              <h3>
                    <a className='tools><span role="img" aria-label="javascript">📄</span> javascript</a>
                    <a className='tools><span role="img" aria-label="react">⚛</span> react</a>
                    <a className='tools'><span role="img" aria-label="nextjs">📘</span> nextjs</a>
                    <a className='tools'><span role="img" aria-label="html">🌐</span> html</a>
                    <a  ><span role="img" aria-label="css">🎨</span> css</a>
                    </h3>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="buttons">
            <button onClick={() => { setSelectedImage(imageCode); setProjectLink('https://car-rental-bvax.vercel.app/HeroSection'); }}>Car-Rental</button>
            <button onClick={() => { setSelectedImage(imagePlan); setProjectLink('https://maligatorsyandex.vercel.app'); }}>Dog-training</button>
            <button onClick={() => { setSelectedImage(imageCollab); setProjectLink('https://njaiko-smartphones.vercel.app/phones'); }}>Phone-sales</button>
          </div>
          <div className="image-container">
            <img src={selectedImage} alt="Selected project" />
            <a 
              href={projectLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="visit-project-overlay"
            >
              Visit Project
            </a>
          </div>

          <p>Build code quickly and more securely with GitHub Copilot embedded throughout your workflows.</p>
        </div>

        
      <div className='co-container'>
        <h2 className='lastheading'>Get In Touch</h2>
        <p className='lastparagraph'>
          I’m always on the lookout for new opportunities, and my inbox is open
          for all. If you’re considering my contribution, have a question, or
          just want to say hi, you can count on hearing back from me!
        </p>
        <a
          href=""
          className='button-co'
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 Email Me
        </a>
        <p className='footer'>
        Based on <strong>Bvakacha Takunda's website</strong>. Coded in <strong>Visual Studio Code</strong>. Built with React.
        </p>

      </div>
      </section>

    </div>
  );
}

export default HomePage;

