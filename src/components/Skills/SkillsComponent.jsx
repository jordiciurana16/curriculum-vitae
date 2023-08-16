// SkillsComponent.js
import React, { useState } from 'react';
import styles from './SkillsComponent.module.css'; // Import your CSS module

const SkillsComponent = ({ skill, description, highlight, hovered, onHover, onHoverEnd }) => {
  const highlightWords = (text) => {
    let highlightedText = text;
    highlight.forEach(word => {
      const pattern = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedText = highlightedText.replace(pattern, `<strong>${word}</strong>`);
    });
    return highlightedText;
  };

  return (
    <div
      className={`rounded pt-2 ps-2 pe-2 ${styles.skillsDiv} ${hovered ? styles.hovered : ''}`} // Apply rounded class
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h6>{skill}</h6>
        <a href="#projects" className="text-decoration-none">See projects</a>
      </div>
      <p dangerouslySetInnerHTML={{ __html: hovered ? highlightWords(description) : description }} />
    </div>
  );
};

export default SkillsComponent;
