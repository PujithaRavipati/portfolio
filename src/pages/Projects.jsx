import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GITHUB } from '../contact';
import verifyonchain from '../assets/works/verifyonchain.png';
import './Projects.css';

const stages = [
  { name: 'Issue', who: 'University registrar', text: 'The backend computes the fingerprint, the registrar signs in MetaMask, and the contract records it.' },
  { name: 'Verify', who: 'Anyone, no login, no gas', text: 'An employer types the fields from the paper certificate. The fingerprint is recomputed and looked up: Valid, Revoked or Not Found.' },
  { name: 'Revoke', who: 'The issuing university only', text: 'A certificate issued in error is marked invalid on-chain, permanently.' }
];

const routes = [
  ['/register', 'Create an account'],
  ['/login', 'Log in (JWT)'],
  ['/', 'Dashboard of tasks'],
  ['/tasks/new', 'New task with a due date'],
  ['/tasks/:id', 'Task details'],
  ['/tasks/edit/:id', 'Edit a task']
];

const External = ({ href, children }) => (
  <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
    {children} <ArrowUpRight size={18} aria-hidden="true" />
  </a>
);

const Projects = () => {
  return (
    <main className="page-projects container">
      <header className="page-head">
        <h1 className="page-title">Projects</h1>
        <p className="page-intro">Apps I've designed and built.</p>
      </header>

      <ol className="route">
        <li className="stop project" id="verifyonchain">
          <div className="project-grid">
            <div>
              <h2>VerifyOnChain</h2>
              <p className="meta">2026 / Academic research project</p>
              <p className="meta">React, Vite, ethers v6 / Express, MongoDB Atlas / Solidity ^0.8.20</p>
              <p>A certificate registry where each certificate's fingerprint lives on Ethereum. Anyone can recompute it from the printed fields; names, birth dates and grades are never stored. Change one letter and the certificate fails.</p>
              <p><External href="https://verifyonchain-frontend.vercel.app">verifyonchain-frontend.vercel.app</External></p>
              <p><External href={`${GITHUB}?tab=repositories&q=verifyonchain`}>Frontend, backend and contracts on GitHub</External></p>
            </div>
            <a className="project-shot" href="https://verifyonchain-frontend.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Open VerifyOnChain live site">
              <img src={verifyonchain} alt="VerifyOnChain home page: Tamper-Proof Academic Credentials on Ethereum, with Verify a Certificate and University Login buttons." />
            </a>
          </div>

          <div className="branch">
            <h3>One certificate, three hands</h3>
            <p className="meta">Each stage is a different wallet signing its own transaction. No private key ever leaves the signer's wallet.</p>
            <ol className="route route--small">
              {stages.map(s => (
                <li key={s.name} className="stop">
                  <p className="branch-name">{s.name} <span className="meta">{s.who}</span></p>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </li>

        <li className="stop project" id="task-scheduler">
          <div className="project-grid">
            <div>
              <h2>Task Scheduler</h2>
              <p className="meta">2025–2026 / Not deployed yet</p>
              <p className="meta">React, React Router, axios / Express, MongoDB, JWT</p>
              <p>A task manager with accounts. Sign up, log in, add tasks with due dates, edit them and keep track of them on a dashboard.</p>
              <p><External href={`${GITHUB}/task-schedular-frontend`}>Frontend on GitHub</External></p>
              <p><External href={`${GITHUB}/task-scheduler-backend`}>Backend on GitHub</External></p>
            </div>
            <div className="app-routes">
              <h3>The app's routes</h3>
              <ol className="route route--small">
                {routes.map(([path, what]) => (
                  <li key={path} className="stop">
                    <code>{path}</code>
                    <span className="meta">{what}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </li>

        <li className="stop project project--small">
          <h2>This portfolio</h2>
          <p className="meta">2026 / React 19, Vite, React Router</p>
          <p>Designed and built by me. You're looking at it.</p>
          <p><External href={`${GITHUB}/portfolio`}>Source on GitHub</External></p>
        </li>

        <li className="stop project project--small">
          <h2>MERN coursework</h2>
          <p className="meta">2025 / HTML, CSS, JavaScript</p>
          <p>About 35 small exercise repositories, the MERNDAY series, from learning the stack one day at a time.</p>
          <p><External href={`${GITHUB}?tab=repositories&q=MERNDAY`}>Browse the series</External></p>
        </li>
      </ol>
    </main>
  );
};

export default Projects;
