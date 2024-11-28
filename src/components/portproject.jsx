import React, { useState } from 'react';
import '../components/portproject.css'; // Include your CSS file for styling
import imageCode from '../images/WhatsApp Image 2024-11-25 at 00.18.40_6130a69b.jpg';
import imagePlan from '../images/WhatsApp Image 2024-11-25 at 00.21.03_fbe69ca2.jpg';
import imageCollab from '../images/WhatsApp Image 2024-11-25 at 00.18.40_6130a69b.jpg';

function App() {
  // State management for selected image and project link
  const [selectedImage, setSelectedImage] = useState(imageCode);
  const [projectLink, setProjectLink] = useState('https://car-rental-project.com'); // Set default link

  // Button click handlers to change selected image and project link
  const handleProjectSelect = (image, link) => {
    setSelectedImage(image);
    setProjectLink(link);
  };

  return (
    <div className="app-container">
      <div className="what-we-do">
        <h1>
          <a className="tools">
            <span role="img" aria-label="projects">🌀</span> MY WORKS!
          </a> 
          <span role="img" aria-label="laptop">💻</span>
        </h1>

        <div className="displaying">
          <h5>
            <a className="tools"><span role="img" aria-label="javascript">📄</span> javascript</a>
            <a className="tools"><span role="img" aria-label="react">⚛</span> react</a>
            {/* <a className='tools'><span role="img" aria-label="nextjs">📘</span> nextjs</a> */}
            <a className="tools"><span role="img" aria-label="html">🌐</span> html</a>
            <a className="tools"><span role="img" aria-label="css">🎨</span> css</a>
          </h5>
        </div>
      </div>

      <div className="card">
        <div className="buttons">
          {/* When a button is clicked, change selected image and project link */}
          <button onClick={() => handleProjectSelect(imageCode, 'https://car-rental-project.com')}>Car-Rental</button>
          <button onClick={() => handleProjectSelect(imagePlan, 'https://dog-training-project.com')}>Dog-training</button>
          <button onClick={() => handleProjectSelect(imageCollab, 'https://phone-sales-project.com')}>Phone-sales</button>
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
