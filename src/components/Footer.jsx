import React from 'react';
import { useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { EMAIL, LINKEDIN, GITHUB } from '../contact';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // The Desk already letters these links on its wall
  const onDesk = useLocation().pathname.replace(/\/+$/, '') === '/contact';

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-title">Hiring a frontend developer? Let's talk.</p>

        {!onDesk && (
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

        <p className="footer-copyright">© {currentYear} Ravipati Pujitha</p>
      </div>
    </footer>
  );
};

export default Footer;
