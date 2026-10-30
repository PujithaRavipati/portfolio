import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { roomFor } from './rooms';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Scroll to the target and switch to the page's line colour on route change
const RoomEffects = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });

    const room = roomFor(pathname);
    document.documentElement.dataset.room = room.id;
    document.title = room.id === 'home'
      ? 'Ravipati Pujitha · Frontend Developer'
      : `${room.name} · Ravipati Pujitha`;
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <RoomEffects />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
