import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Work from '../components/Work';
import { EMAIL } from '../contact';
import verifyonchain from '../assets/works/verifyonchain.png';
import './Home.css';

const plan = [
  { to: '/projects', key: '02', name: 'Works', line: 'VerifyOnChain, Task Scheduler and more.' },
  { to: '/about', key: '03', name: 'Archive', line: 'Education, skills and what I love.' },
  { to: '/contact', key: '04', name: 'Desk', line: 'Email, LinkedIn, GitHub or a message form.' }
];

const Home = () => {
  return (
    <main className="page-home">
      <section className="lobby container">
        <div className="lobby-wall">
          <h1 className="vinyl">Ravipati Pujitha</h1>
          <p className="wall-text">
            Frontend developer. I build React apps and ship them live.
          </p>
          <p className="lobby-open">Open to full-time frontend roles and freelance work.</p>
          <div className="lobby-actions">
            <Link to="/projects" className="btn-paper">See the works <ArrowRight size={18} aria-hidden="true" /></Link>
            <a href={`mailto:${EMAIL}`} className="lobby-mail">{EMAIL}</a>
          </div>
        </div>

        <Work
          className="lobby-work"
          title="VerifyOnChain"
          year="2026"
          medium="React, Node/Express, Solidity"
          description="A certificate registry on Ethereum. Change one letter and the certificate fails."
          links={[{ prefix: 'On view:', label: 'verifyonchain-frontend.vercel.app', href: 'https://verifyonchain-frontend.vercel.app' }]}
        >
          <img src={verifyonchain} alt="VerifyOnChain home page: Tamper-Proof Academic Credentials on Ethereum, with Verify a Certificate and University Login buttons." />
        </Work>
      </section>

      <nav className="container floor-plan" aria-label="Floor plan">
        <ul className="floor-plan-list">
          {plan.map(room => (
            <li key={room.to}>
              <Link to={room.to}>
                <span className="floor-key">{room.key}</span>
                <span className="floor-name">{room.name}</span>
                <span className="floor-line">{room.line}</span>
                <ArrowRight size={20} aria-hidden="true" className="floor-arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Home;
