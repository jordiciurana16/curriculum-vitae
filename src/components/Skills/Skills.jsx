import React, { useState, useEffect } from 'react';
import skillsData from '../../data/skillsData.json';
import Separator from '../Separator/Separator';
import styles from './Skills.module.css';

const Skills = ({ isA4Format }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const highlightWords = (text, highlightedWords) => {
    let highlightedText = text;
    highlightedWords.forEach((word) => {
      const pattern = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedText = highlightedText.replace(pattern, `<strong>${word}</strong>`);
    });
    return highlightedText;
  };

  return (
    <>
      <div onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
        <h2>SKILLS</h2>
        <Separator expanded={isExpanded} isA4Format={isA4Format}/>

        {skillsData.map((skills, index) => (
          <React.Fragment key={index}>
            <div
              className={`${isA4Format ? '':'pt-1'} rounded ps-2 pe-2 ${styles.skillsDiv} ${
                hoveredSkill === skills.skill ? styles.hovered : ''
              }`}
              onMouseEnter={() => setHoveredSkill(skills.skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className='d-flex justify-content-between align-items-center'>
                <h4>{skills.skill.toUpperCase()}</h4>
              </div>
              {isA4Format ? (
                <ul>
                  {skills.highlight.map((item, index) => (
                    <li className='mb-1' key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p
                  className='mt-2'
                  dangerouslySetInnerHTML={{
                    __html:
                      hoveredSkill === skills.skill
                        ? highlightWords(skills.description, skills.highlight)
                        : skills.description,
                  }}
                />
              )}
            </div>
            {!isA4Format && index !== skillsData.length - 1 && <hr className='skills-divider' />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Skills;
