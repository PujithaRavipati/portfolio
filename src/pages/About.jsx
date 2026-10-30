import React from 'react';
import './About.css';

// Newest first, like the rest of the sit
const timeline = [
  { title: 'Open to opportunities', place: 'Actively seeking full-time and freelance roles', date: 'present', text: 'Building real-world projects and expanding my skill set alongside my degree while looking for the right place to start my professional journey.' },
  { title: 'B.Tech in Computer Science & Engineering', place: 'VIT-AP University', date: '2023 – present', text: 'Four-year undergraduate program focused on core CS fundamentals, software development, and emerging technologies.' },
  { title: 'Intermediate (MPC)', place: 'SR Junior College', date: '2021 – 2023', text: 'Higher secondary education with a focus on Mathematics, Physics, and Chemistry.' },
  { title: 'Class X', place: 'KCP Siddhartha Adarsh Residential Public School', date: '2021', text: 'Completed secondary school.' }
];

const skills = [
  { title: 'Web development', text: 'React and JavaScript. Both apps in Projects are React.' },
  { title: 'UI/UX design', text: 'I design my own interfaces, including this site.' },
  { title: 'AI & machine learning', text: 'Learning ML concepts.' }
];

const achievements = [
  'Built and deployed multiple full-stack web applications as academic and personal projects',
  'Self-taught in UI/UX design and modern front-end frameworks'
];

const passions = ['Traveling', 'Watching TV', 'Drawing', 'Exercise'];
const obsessions = ['Skating', 'Skill development', 'Family time'];

const About = () => {
  return (
    <main className="page-about container">
      <header className="page-head">
        <h1 className="page-title">About me</h1>
        <p className="page-intro">
          Hi, I'm Pujitha. I'm a B.Tech Computer Science student at VIT-AP, and I build React apps.
        </p>
        <p className="about-open">Currently open to full-time opportunities and freelance work. Let's talk.</p>
      </header>

      <div className="about-grid">
        <ol className="route about-timeline" aria-label="Education and experience">
          {timeline.map(item => (
            <li key={item.title} className="stop">
              <h2>{item.title}</h2>
              <p className="meta">{item.place} / {item.date}</p>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="about-side">
          <section aria-labelledby="a-skills">
            <h2 id="a-skills">Skills</h2>
            <dl>
              {skills.map(s => (
                <div key={s.title}>
                  <dt>{s.title}</dt>
                  <dd>{s.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="a-ach">
            <h2 id="a-ach">Achievements</h2>
            <ul className="about-list">
              {achievements.map(a => <li key={a}>{a}</li>)}
            </ul>
          </section>

          <section aria-labelledby="a-love">
            <h2 id="a-love">What I love</h2>
            <p>{passions.join(' / ')}</p>
            <p className="meta about-sub">Currently obsessed with</p>
            <p>{obsessions.join(' / ')}</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
