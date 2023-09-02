import React, { useState } from 'react';
import Separator from '../Separator/Separator';
import experienceData from '../../data/experienceData.json';
import styles from './Experience.module.css';

const Experience = ({ isA4Format }) => { // Add isA4Format as a prop
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isExpanded, setExpanded] = useState(false);

  const highlightWords = (text, highlightedWords, index) => {
    let highlightedText = text;
    if (index === hoveredIndex) {
      highlightedWords.forEach((word) => {
        const pattern = new RegExp(`\\b(${word})\\b`, 'gi');
        highlightedText = highlightedText.replace(pattern, `<strong> ${word} </strong>`);
      });
    }
    return highlightedText;
  };

  return (
    <div className='mt-2' onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <h2>EXPERIENCE</h2>
      <Separator expanded={isExpanded}  isA4Format={isA4Format} />
      {experienceData.map((experience, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a href={experience.link} target='_blank' className='text-black text-decoration-none'>
            <div className={` ${styles.experienceItem} pt-1 ps-2 rounded `}>
              <h6>{experience.company}</h6>
              <p
                className='mt-2'
                dangerouslySetInnerHTML={{
                  __html: isA4Format ? highlightWords(experience.introduction, experience.highlight, index) : highlightWords(experience.description, experience.highlight, index),
                }}
              />
            </div>
          </a>
          {index !== experienceData.length - 1 && <hr className={`${isA4Format ? 'a4FormatHr': ''} `}/>}
        </div>
      ))}
    </div>
  );
};

export default Experience;
