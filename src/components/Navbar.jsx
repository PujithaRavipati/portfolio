import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container container">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          Portfolio
        </NavLink>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="mobile-nav">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
