import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portnav from './components/portnav'; 
import Portabout from './components/portabout'; 
import Port from './components/port'; 
import Portproject from './components/portproject';
import Home from './components/home';
import Contact from './components/contact'; 

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/portabout" element={<Portabout />} />
      <Route path="/portproject" element={<Portproject />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Portnav /> 
      <div className="content-container"> 
        {windowWidth > 768 ? <Port /> : <AnimatedRoutes />}
      </div>
    </Router>
  );
}

export default App;
