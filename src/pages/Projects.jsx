import React from 'react';
import Work from '../components/Work';
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

const Projects = () => {
  return (
    <main className="page-projects container">
      <header className="room-head">
        <h1 className="vinyl">Works</h1>
        <p className="wall-text">Apps I've designed and built.</p>
      </header>

      <section className="works-feature" aria-labelledby="w-voc">
        <Work
          className="feature-work"
          titleId="w-voc"
          title="VerifyOnChain"
          year="2026 · Academic research project"
          medium="React, Vite, ethers v6 · Express, MongoDB Atlas · Solidity ^0.8.20"
          description="A certificate registry where each certificate's fingerprint lives on Ethereum. Anyone can recompute it from the printed fields; names, birth dates and grades are never stored. Change one letter and the certificate fails."
          links={[
            { prefix: 'On view:', label: 'verifyonchain-frontend.vercel.app', href: 'https://verifyonchain-frontend.vercel.app' },
            { prefix: 'Source:', label: 'frontend, backend and contracts on GitHub', href: `${GITHUB}?tab=repositories&q=verifyonchain` }
          ]}
        >
          <img src={verifyonchain} alt="VerifyOnChain home page: Tamper-Proof Academic Credentials on Ethereum, with Verify a Certificate and University Login buttons." />
        </Work>

        <div className="label stages">
          <h3>One certificate, three hands</h3>
          <p className="meta">Each stage is a different wallet signing its own transaction. No private key ever leaves the signer's wallet.</p>
          <dl>
            {stages.map(s => (
              <div key={s.name} className="stage">
                <dt>{s.name}<span className="meta">{s.who}</span></dt>
                <dd>{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="works-second" aria-label="Task Scheduler">
        <Work
          className="second-work"
          title="Task Scheduler"
          year="2025–2026"
          medium="React, React Router, axios · Express, MongoDB, JWT"
          description="A task manager with accounts. Sign up, log in, add tasks with due dates, edit them and keep track of them on a dashboard. Not deployed yet."
          links={[
            { prefix: 'Source:', label: 'frontend on GitHub', href: `${GITHUB}/task-schedular-frontend` },
            { prefix: 'Source:', label: 'backend on GitHub', href: `${GITHUB}/task-scheduler-backend` }
          ]}
        >
          <div className="study">
            <p className="study-title">Study: the app's routes</p>
            <ul>
              {routes.map(([path, what]) => (
                <li key={path}><code>{path}</code><span>{what}</span></li>
              ))}
            </ul>
          </div>
        </Work>
      </section>

      <section className="works-small" aria-label="Also on view">
        <div className="panel">
          <h2>This portfolio</h2>
          <p className="meta">2026<br />React 19, Vite, React Router</p>
          <p>Designed and built by me. You're standing in it.</p>
          <p><a className="label-link" href={`${GITHUB}/portfolio`} target="_blank" rel="noopener noreferrer">Source on GitHub</a></p>
        </div>
        <div className="panel">
          <h2>MERN coursework</h2>
          <p className="meta">2025<br />HTML, CSS, JavaScript</p>
          <p>About 35 small exercise repositories, the MERNDAY series, from learning the stack one day at a time.</p>
          <p><a className="label-link" href={`${GITHUB}?tab=repositories&q=MERNDAY`} target="_blank" rel="noopener noreferrer">Browse the series</a></p>
        </div>
      </section>
    </main>
  );
};

export default Projects;
