import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Portnav from './components/portnav';
import Portabout from './components/portabout';
import Port from './components/port';
import Portproject from './components/portproject';

function AnimatedRoutes() {
  const location = useLocation(); // Get current location

  return (
    <>
      <Portnav /> {/* The navigation component */}
      <Routes location={location}> {/* Use location for route transitions */}
        <Route path="/portabout" element={<Portabout />} />
        <Route path="/port" element={<Port />} />
        <Route path="/portproject" element={<Portproject />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router> {/* Wrap everything in BrowserRouter */}
      <AnimatedRoutes /> {/* Render the animated routes */}
    </Router>
  );
}

export default App;
