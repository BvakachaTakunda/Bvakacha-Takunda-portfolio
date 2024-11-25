import React, { useState } from 'react';
import '../components/portnav.css';
import { FaBars, FaTimes, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-icon" onClick={toggleMenu}>
              <FaTimes />
            </button>
            <ul className="nav-links">
             <Link to={'port'}><li><a href="#home" onClick={toggleMenu}>Home</a></li></Link> 
            <Link to={'portabout'}><li><a href="#about" onClick={toggleMenu}>About</a></li></Link>
            <Link to={'portproject'}><li><a href="#projects" onClick={toggleMenu}>Projects</a></li></Link>
              <li><a href="#contacts" onClick={toggleMenu}>Contacts</a></li>
              
              <li className="dark-mode-icon"><FaMoon /></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;