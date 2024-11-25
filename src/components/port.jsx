import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon } from 'react-icons/fa';
import './port.css';
import './portproject.css'; // Include your CSS for styling the projects sidebar
import imageCode from '../images/WhatsApp Image 2024-11-25 at 00.18.40_6130a69b.jpg';
import imagePlan from '../images/WhatsApp Image 2024-11-25 at 00.21.03_fbe69ca2.jpg';
import imageCollab from '../images/WhatsApp Image 2024-11-25 at 00.18.40_6130a69b.jpg';

function HomePage() {
  const itemsRef = useRef([]); // Used to collect refs for fade-in animation
  const containerRef = useRef(null); // Reference for scroll container
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle state
  const [selectedImage, setSelectedImage] = useState(imageCode); // State for selected image
  const [projectLink, setProjectLink] = useState('https://project-code.com'); // State for project link

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
    setIsDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState); // Toggle dark mode
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
        <div className="about-experience">
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
          </div>

          <div className="what-we-do">
            <h2>What We Do! <span role="img" aria-label="laptop">💻</span></h2>
            <div className='displaying'>
            <div className="sidebar">
  <div onClick={toggleDropdown} className="sidebar-header">
    <span className="dropdown-icon">{isDropdownOpen ? '▲' : '▼'}</span>
    _projects/
  </div>
  {isDropdownOpen && (
    <ul className="project-list">
      <li><span role="img" aria-label="projects">🌀</span> projects</li>
      <li><span role="img" aria-label="javascript">📄</span> javascript</li>
      <li><span role="img" aria-label="react">⚛</span> react</li>
      <li><span role="img" aria-label="nextjs">📘</span> nextjs</li>
      <li><span role="img" aria-label="html">🌐</span> html</li>
      <li><span role="img" aria-label="css">🎨</span> css</li>
    </ul>
  )}
</div>
            <div className="concentric-circles">
              <div className="circle center">
                <p>Software Solutions</p>
              </div>
              <div className="circle layer1">
                <p className="item fade" ref={(el) => itemsRef.current.push(el)}>Mobile Apps</p>
                <p className="item fade" ref={(el) => itemsRef.current.push(el)}>Desktop Apps</p>
              </div>
              <div className="circle layer2"></div>
              <div className="circle layer3">
                <p className="item fade" ref={(el) => itemsRef.current.push(el)}>Web Design</p>
                <p className="item fade" ref={(el) => itemsRef.current.push(el)}>UI/UX Design</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        

{/* Sidebar for Projects */}


{/* Project Cards */}
<div className="card">
  <div className="buttons">
    <button onClick={() => { setSelectedImage(imageCode); setProjectLink(''); }}>Car-Rental</button>
    <button onClick={() => { setSelectedImage(imagePlan); setProjectLink(''); }}>Dog-training</button>
    <button onClick={() => { setSelectedImage(imageCollab); setProjectLink(''); }}>Phone-sales</button>
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

      </section>


    </div>
  );
}

export default HomePage;
