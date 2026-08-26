import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-mockup"></div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          View Project &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
