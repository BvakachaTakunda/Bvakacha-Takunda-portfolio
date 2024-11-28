import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Portnav from './components/portnav';  // The navigation component
import Portabout from './components/portabout'; // About Section
import Port from './components/port'; // Full Content for larger screens
import Portproject from './components/portproject'; // Project Section

function AnimatedRoutes() {
  const location = useLocation(); // Get current location

  return (
    <Routes location={location}> {/* Use location for route transitions */}
      <Route path="/portabout" element={<Portabout />} />
      <Route path="/port" element={<Port />} />
      <Route path="/portproject" element={<Portproject />} />
    </Routes>
  );
}

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Listen to window resize events and update the state
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update window width on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <Router> {/* Wrap everything in BrowserRouter */}
      <Portnav /> {/* Always render Portnav */}

      {/* On large screens, show the full content */}
      {windowWidth > 768 ? (
        <Port /> // Always render Port component for larger screens
      ) : (
        // For small screens, only show the About section when on the `/portabout` route
        <AnimatedRoutes />
      )}

      {/* Animated Routes to handle route changes smoothly */}
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
