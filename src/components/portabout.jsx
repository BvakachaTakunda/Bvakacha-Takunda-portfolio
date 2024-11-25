import React, { useRef, useEffect } from 'react';
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

      <section className="cta">
        <h2>Let’s Bring Your Vision to Life</h2>
        <p>
          Interested in working together? I’m open to freelance projects, collaborations, and exciting full-time opportunities. Let’s connect!
        </p>
        <button className="contact-button">Contact Me</button>
      </section>
    </section>
  );
};

export default AboutSection;