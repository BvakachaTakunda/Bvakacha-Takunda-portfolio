import React, { useState } from 'react';
import '../components/portproject.css'; // Include your CSS file for styling
import imageCode from '../images/WhatsApp Image 2024-11-25 at 00.18.40_6130a69b.jpg';
import imagePlan from '../images/WhatsApp Image 2024-11-25 at 00.21.03_fbe69ca2.jpg';
import imageCollab from '../images/WhatsApp Image 2024-11-25 at 00.18.40_6130a69b.jpg';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = React.useState(imageCode);

  
const [projectLink, setProjectLink] = React.useState('https://project-code.com');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="app-container">
      {/* Sidebar Component */}
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


      {/* Card with Buttons Component */}
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
    </div>
  );
}

export default App;
