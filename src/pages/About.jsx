import React from 'react';
import Blobs from '../components/Blobs';
import Timeline from '../components/Timeline';
import TagList from '../components/TagList';
import SkillCard from '../components/SkillCard';
import { Globe, Paintbrush, Brain } from 'lucide-react';
import './About.css';

const About = () => {
  const academicItems = [
    {
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'VIT-AP University',
      date: '2021 – 2025',
      description: 'Four-year undergraduate program focused on core CS fundamentals, software development, and emerging technologies.',
    },
    {
      title: 'Intermediate (MPC)',
      subtitle: 'SR Junior College',
      date: '2019 – 2021',
      description: 'Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.',
    }
  ];

  const experienceItems = [
    {
      title: 'Fresher — Open to Opportunities',
      subtitle: 'Actively seeking full-time & freelance roles',
      date: '2025 – Present',
      description: 'Building real-world projects and expanding my skill set while looking for the right opportunity to start my professional journey.',
    }
  ];

  const passions = ['Traveling', 'Watching TV', 'Drawing', 'Exercise'];
  const obsessions = ['Skating', 'Skill Development', 'Family Time'];

  return (
    <main className="page-about animate-fade-up">
      <Blobs color="rgba(219, 107, 76, 0.15)" /> {/* Warm amber/coral blob */}
      
      <div className="container">
        <section className="section">
          <h1 className="section-title">
            About <span className="text-accent">Me</span>
          </h1>

          <div className="about-content">
            <p className="about-paragraph">
              Hi, I'm Pujitha — a Computer Science graduate passionate about building thoughtful, user-focused digital experiences.
            </p>
            
            <div className="availability-tag">
              Currently open to full-time opportunities and freelance work — let's talk.
            </div>

            <div className="about-grid">
              <div className="about-column">
                <h2 className="subsection-title">Academic Background</h2>
                <Timeline items={academicItems} />
                
                <div className="margin-top-large">
                  <h2 className="subsection-title">What I Love</h2>
                  <TagList tags={passions} />
                </div>
              </div>

              <div className="about-column">
                <h2 className="subsection-title">Experience</h2>
                <Timeline items={experienceItems} />
                
                <div className="margin-top-large">
                  <h2 className="subsection-title">Achievements</h2>
                  <ul className="achievement-list">
                    <li>Built and deployed multiple full-stack web applications as academic and personal projects</li>
                    <li>Consistently maintained strong academic performance throughout B.Tech</li>
                    <li>Self-taught in UI/UX design and modern front-end frameworks</li>
                  </ul>
                </div>

                <div className="margin-top-large">
                  <h2 className="subsection-title text-muted">Currently obsessed with:</h2>
                  <TagList tags={obsessions} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h1 className="section-title">
            My <span className="text-accent">Skills</span>
          </h1>
          <div className="skills-grid">
            <SkillCard 
              icon={Globe}
              title="Web Development"
              description="Experienced in building responsive, modern web applications using React and other JavaScript frameworks."
            />
            <SkillCard 
              icon={Paintbrush}
              title="UI/UX Design"
              description="Passionate about crafting clean, intuitive interfaces that balance aesthetics with usability."
            />
            <SkillCard 
              icon={Brain}
              title="AI & Machine Learning"
              description="Exploring machine learning concepts and applying them to real-world problem solving."
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;