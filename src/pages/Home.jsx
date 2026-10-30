import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import LineMap from '../components/LineMap';
import verifyonchain from '../assets/works/verifyonchain.png';
import './Home.css';

const Home = () => {
  return (
    <main className="page-home container">
      <section className="hero">
        <div className="hero-head">
          <h1 className="hero-name">Ravipati<br />Pujitha</h1>
          <p className="hero-role">Frontend developer. I build React apps and ship them live.</p>
        </div>
        <LineMap />
      </section>

      <section className="latest" aria-labelledby="latest-title">
        <a className="latest-shot" href="https://verifyonchain-frontend.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Open VerifyOnChain live site">
          <img src={verifyonchain} alt="VerifyOnChain home page: Tamper-Proof Academic Credentials on Ethereum, with Verify a Certificate and University Login buttons." />
        </a>
        <div className="latest-text">
          <h2 id="latest-title">VerifyOnChain</h2>
          <p className="meta">2026 / React, Node/Express, Solidity</p>
          <p>A certificate registry on Ethereum. Change one letter and the certificate fails.</p>
          <p><a className="text-link" href="https://verifyonchain-frontend.vercel.app" target="_blank" rel="noopener noreferrer">verifyonchain-frontend.vercel.app <ArrowUpRight size={18} aria-hidden="true" /></a></p>
          <p><Link className="text-link" to="/projects">All projects <ArrowRight size={18} aria-hidden="true" /></Link></p>
        </div>
      </section>
    </main>
  );
};

export default Home;
