import React from 'react';
import './SkillCard.css';

const SkillCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon-wrapper">
        <Icon size={32} />
      </div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-desc">{description}</p>
    </div>
  );
};

export default SkillCard;
