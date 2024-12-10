import React, { useState, useEffect, useRef } from 'react';
import '../components/portnav.css';
import { FaBars, FaTimes, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  const handleOutsideClick = (e) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      {isOpen && (
        <div className="overlay" ref={overlayRef}>

<button className="close-icon" onClick={toggleMenu}>
              <FaTimes />
            </button>
          <div className="overlay-content">

            <ul className="nav-links">

              <li>
                <Link to="/home" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/portabout" onClick={toggleMenu}>About</Link>
              </li>
              <li>
                <Link to="/portproject" onClick={toggleMenu}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>Contacts</Link>
              </li>
              <li className="dark-mode-icon" onClick={toggleDarkMode}>
                <FaMoon />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
