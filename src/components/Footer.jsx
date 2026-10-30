import React from 'react';
import { useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { EMAIL, LINKEDIN, GITHUB } from '../contact';
import { roomFor } from '../rooms';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // The Contact page already shows these links at full size
  const onContact = roomFor(useLocation().pathname).id === 'contact';

  return (
    <footer className="footer">
      <div className="footer-lines" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="container footer-inner">
        <p className="footer-title">Hiring a frontend developer? Let's talk.</p>

        {!onContact && (
          <ul className="footer-links">
            <li>
              <a href={`mailto:${EMAIL}`}><Mail size={20} aria-hidden="true" />{EMAIL}</a>
            </li>
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={20} />LinkedIn</a>
            </li>
            <li>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer"><GithubIcon size={20} />GitHub</a>
            </li>
          </ul>
        )}

        <p className="footer-note">
          © {currentYear} Ravipati Pujitha
          <span className="footer-keys"> / Press 1–4 to switch pages</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
