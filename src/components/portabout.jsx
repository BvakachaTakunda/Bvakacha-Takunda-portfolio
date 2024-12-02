import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './portabout.css';

const AboutSection = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 200);
    });
  }, []);

  return (
    <section className="about-experience">
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

        <Link className="resume"><h4>Download CV</h4></Link>

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

          <a className="tools">HTML</a>
          <a className="tools">CSS</a>
          <a className="tools">JavaScript</a>
          <a className="tools">React</a>
          <a className="tools">Node</a>
        </div>

      </div>

      <section className="cta">
        <h2>Let’s Bring Your Vision to Life</h2>
        <p>
          Interested in working together? I’m open to freelance projects, collaborations, and exciting full-time opportunities. Let’s connect!
        </p>
        <a
        href="mailto:takundabvax@gmail.com"  
        className="button-co"
        target="_blank"
        rel="noopener noreferrer"
      >
        📧 Email Me
      </a>
      </section>
      <p className="footer">
        Based on <strong>Bvakacha Takunda's website</strong>. Coded in <strong>Visual Studio Code</strong>. Built with React.
      </p>
    </section>
  );
};

export default AboutSection;
