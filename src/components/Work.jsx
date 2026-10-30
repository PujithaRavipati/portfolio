import React from 'react';
import './Work.css';

// A work hung on the wall: a framed piece on a wire, with its tombstone label.
// `children` is what goes inside the frame (a screenshot, or a study when there is no live app).
const Work = ({ title, year, medium, links = [], description, children, className = '', titleId }) => (
  <article className={`work ${className}`}>
    <div className="work-hang hung">
      <svg className="work-wire" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
        <polyline points="0,40 50,1 100,40" />
      </svg>
      <div className="frame">{children}</div>
    </div>
    <div className="label work-label">
      <h2 id={titleId}>{title}</h2>
      <p className="meta">{year}<br />{medium}</p>
      {description && <p>{description}</p>}
      {links.map(link => (
        <p key={link.href}>
          {link.prefix && <span className="meta">{link.prefix} </span>}
          <a className="label-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
        </p>
      ))}
    </div>
  </article>
);

export default Work;
