import React from 'react';
import Blobs from '../components/Blobs';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: '{{PROJECT_1_TITLE}}',
      description: '{{PROJECT_1_DESC}}',
      link: '{{PROJECT_1_URL}}'
    },
    {
      title: '{{PROJECT_2_TITLE}}',
      description: '{{PROJECT_2_DESC}}',
      link: '{{PROJECT_2_URL}}'
    },
    {
      title: '{{PROJECT_3_TITLE}}',
      description: '{{PROJECT_3_DESC}}',
      link: '{{PROJECT_3_URL}}'
    }
  ];

  return (
    <main className="page-projects animate-fade-up">
      <Blobs color="rgba(55, 194, 157, 0.15)" /> {/* Cool teal blob */}
      
      <div className="container section">
        <h1 className="section-title">
          <span className="text-accent">Projects</span>
        </h1>
        
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <ProjectCard 
              key={index}
              title={proj.title}
              description={proj.description}
              link={proj.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
