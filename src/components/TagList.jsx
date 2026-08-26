import React from 'react';
import './TagList.css';

const TagList = ({ tags }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li className="tag-item" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
