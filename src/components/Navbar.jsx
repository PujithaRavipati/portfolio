import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { rooms, roomFor } from '../rooms';
import './Navbar.css';

const isTyping = (el) =>
  el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName);

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Keys 1–4 switch between pages
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      const room = rooms.find(r => r.key === e.key);
      if (room) navigate(room.path);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  return (
    <header className="site-header">
      <div className="site-header-inner container">
        <NavLink to="/" className="site-name">Ravipati Pujitha</NavLink>
        <nav aria-label="Pages">
          <ul className="rail" style={{ '--at': rooms.indexOf(roomFor(pathname)) }}>
            {rooms.map(room => (
              <li key={room.id}>
                <NavLink to={room.path} end className="rail-link" aria-keyshortcuts={room.key}>
                  {room.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
