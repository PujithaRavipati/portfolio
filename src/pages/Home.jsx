import React from 'react';
import Blobs from '../components/Blobs';
import './Home.css';

const Home = () => {
  return (
    <main className="page-home animate-fade-up">
      <Blobs color="rgba(76, 107, 219, 0.15)" /> {/* Violet/Blue blob for hero */}
      
      <section className="hero-section container">
        <div className="hero-content">
          <p className="hero-eyebrow">Hello It's Me</p>
          <h1 className="hero-name">"Ravipati Pujitha"</h1>
          <p className="hero-role">
            And I'm a <span className="text-accent">"AI Developer"</span>
          </p>
        </div>
        <div className="hero-visual">
          <div className="photo-placeholder"></div>
        </div>
      </section>

      <div className="container">
        <section className="teaser-section">
          <p className="teaser-text">
              "I'm a passionate AI developer with a knack for building intelligent solutions.
          </p>
        </section>
        <div className="divider"></div>
      </div>
    </main>
  );
};

export default Home;
