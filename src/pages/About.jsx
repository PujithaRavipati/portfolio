import React from 'react';
import './About.css';

const education = [
  { title: 'B.Tech in Computer Science & Engineering', place: 'VIT-AP University', date: '2021 – 2025', text: 'Four-year undergraduate program focused on core CS fundamentals, software development, and emerging technologies.' },
  { title: 'Intermediate (MPC)', place: 'SR Junior College', date: '2019 – 2021', text: 'Higher secondary education with a focus on Mathematics, Physics, and Chemistry.' }
];

const skills = [
  { title: 'Web development', text: 'React and JavaScript. Both apps in Works are React.' },
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
      <header className="about-head">
        <h1 className="vinyl">About me</h1>
        <p className="wall-text">
          Hi, I'm Pujitha. I finished my B.Tech in Computer Science at VIT-AP in 2025, and I build React apps.
        </p>
        <p className="about-open">Currently open to full-time opportunities and freelance work. Let's talk.</p>
      </header>

      <div className="archive">
        <section className="panel archive-skills" aria-labelledby="a-skills">
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

        <section className="panel archive-edu" aria-labelledby="a-edu">
          <h2 id="a-edu">Education</h2>
          <ol>
            {education.map(e => (
              <li key={e.title}>
                <h3>{e.title}</h3>
                <p className="meta">{e.place} · {e.date}</p>
                <p>{e.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="panel archive-exp" aria-labelledby="a-exp">
          <h2 id="a-exp">Experience</h2>
          <h3>Fresher, open to opportunities</h3>
          <p className="meta">2025 – present</p>
          <p>Building real-world projects and expanding my skill set while looking for the right place to start my professional journey.</p>
        </section>

        <section className="panel archive-ach" aria-labelledby="a-ach">
          <h2 id="a-ach">Achievements</h2>
          <ul>
            {achievements.map(a => <li key={a}>{a}</li>)}
          </ul>
        </section>

        <section className="panel archive-love" aria-labelledby="a-love">
          <h2 id="a-love">What I love</h2>
          <p>{passions.join(' · ')}</p>
          <p className="meta">Currently obsessed with</p>
          <p>{obsessions.join(' · ')}</p>
        </section>
      </div>
    </main>
  );
};

export default About;
