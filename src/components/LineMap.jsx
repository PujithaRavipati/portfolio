import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EMAIL } from '../contact';
import './LineMap.css';

// Station positions are in the desktop map's 1280 x 740 coordinates (see the svg below).
const stations = [
  { line: 'home', x: 950, y: 110, name: 'Open to work', detail: 'Full-time frontend roles and freelance' },
  { line: 'projects', x: 850, y: 270, name: 'VerifyOnChain', detail: 'Live on Vercel', to: '/projects#verifyonchain' },
  { line: 'projects', x: 1090, y: 270, name: 'Task Scheduler', detail: 'React, Express, MongoDB', to: '/projects#task-scheduler' },
  { line: 'about', x: 950, y: 520, name: 'VIT-AP University', detail: 'B.Tech CSE, 2025', to: '/about' },
  { line: 'contact', x: 950, y: 680, name: 'Contact', detail: EMAIL, to: '/contact' }
];

const Station = ({ station }) => {
  const body = (
    <>
      <span className="station-name">
        {station.name}
        {station.to && <ArrowRight size={18} aria-hidden="true" />}
      </span>
      <span className="station-detail">{station.detail}</span>
    </>
  );
  return station.to
    ? <Link className="station-body" to={station.to}>{body}</Link>
    : <span className="station-body">{body}</span>;
};

const LineMap = () => (
  <div className="line-map">
    <svg className="map-svg map-svg--wide" viewBox="0 0 1280 740" aria-hidden="true">
      <g className="map-lines">
        <path pathLength="1" style={{ stroke: 'var(--line-home)' }} d="M24 410H560L860 110H1280" />
        <path pathLength="1" style={{ stroke: 'var(--line-projects)' }} d="M24 430H640L800 270H1280" />
        <path pathLength="1" style={{ stroke: 'var(--line-about)' }} d="M24 450H660L730 520H1280" />
        <path pathLength="1" style={{ stroke: 'var(--line-contact)' }} d="M24 470H560L770 680H1280" />
      </g>
      <rect className="map-capsule" x="6" y="394" width="36" height="92" rx="18" />
      {stations.map(s => <circle key={s.name} className="map-dot" cx={s.x} cy={s.y} r="13" />)}
    </svg>

    {/* Phones: the four lines run down the left edge and peel off at their stations */}
    <svg className="map-svg map-svg--tall" viewBox="0 0 64 560" aria-hidden="true">
      <g className="map-lines">
        <path pathLength="1" style={{ stroke: 'var(--line-home)' }} d="M40 20V54L52 66H64" />
        <path pathLength="1" style={{ stroke: 'var(--line-projects)' }} d="M30 20V248L52 270H64" />
        <path pathLength="1" style={{ stroke: 'var(--line-projects)' }} d="M30 146L52 168H64" />
        <path pathLength="1" style={{ stroke: 'var(--line-about)' }} d="M20 20V340L52 372H64" />
        <path pathLength="1" style={{ stroke: 'var(--line-contact)' }} d="M10 20V432L52 474H64" />
      </g>
      <rect className="map-capsule" x="3" y="10" width="44" height="20" rx="10" />
      {[66, 168, 270, 372, 474].map(y => <circle key={y} className="map-dot" cx="64" cy={y} r="8" />)}
    </svg>

    <ul className="stations">
      {stations.map(s => (
        <li key={s.name} className="station" style={{ '--x': s.x, '--y': s.y, '--c': `var(--line-${s.line})` }}>
          <Station station={s} />
        </li>
      ))}
    </ul>
  </div>
);

export default LineMap;
