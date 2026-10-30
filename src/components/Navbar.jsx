import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { rooms } from '../rooms';
import './Navbar.css';

const isTyping = (el) =>
  el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName);

const Navbar = () => {
  const navigate = useNavigate();

  // Keys 1–4 walk between rooms
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
    <header className="rail-header">
      <div className="rail-inner container">
        <NavLink to="/" className="rail-name">Ravipati Pujitha</NavLink>
        <nav aria-label="Rooms">
          <ul className="rail-links">
            {rooms.map(room => (
              <li key={room.id}>
                <NavLink
                  to={room.path}
                  end
                  className="rail-link"
                  aria-keyshortcuts={room.key}
                >
                  <span className="rail-key" aria-hidden="true">0{room.key}</span>
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
