import React, { useState } from 'react';
import '../components/portnav.css';
import { FaBars, FaTimes, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link for navigation

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
              <li>
                <Link to="/port" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/portabout" onClick={toggleMenu}>About</Link>
              </li>
              <li>
                <Link to="/portproject" onClick={toggleMenu}>Projects</Link>
              </li>
              <li>
                <Link to="#contacts" onClick={toggleMenu}>Contacts</Link>
              </li>
              <li className="dark-mode-icon">
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
