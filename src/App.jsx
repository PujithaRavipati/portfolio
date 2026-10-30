import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { rooms } from './rooms';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Scroll to top and repaint the wall on route change
const RoomEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const path = pathname.replace(/\/+$/, '') || '/';
    const room = rooms.find(r => r.path === path) ?? rooms[0];
    document.documentElement.dataset.room = room.id;
    document.title = room.id === 'lobby'
      ? 'Ravipati Pujitha · Frontend Developer'
      : `${room.name} · Ravipati Pujitha`;
  }, [pathname]);

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
