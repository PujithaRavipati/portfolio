import React from 'react';
import './Timeline.css';

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">{item.title}</h3>
              <span className="timeline-date">{item.date}</span>
            </div>
            {item.subtitle && <h4 className="timeline-subtitle">{item.subtitle}</h4>}
            <p className="timeline-desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
