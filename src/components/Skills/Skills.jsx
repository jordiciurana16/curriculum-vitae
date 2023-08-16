import React, { useState } from 'react';
import skillsData from '../../data/skillsData.json';
import Separator from '../Separator/Separator';
import styles from './Skills.module.css';
import ProjectModal from './ProjectModal'; // Import the ProjectModal component

const Skills = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null); // Add state for the selected skill

  const highlightWords = (text, highlightedWords) => {
    let highlightedText = text;
    highlightedWords.forEach(word => {
      const pattern = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedText = highlightedText.replace(pattern, `<strong>${word}</strong>`);
    });
    return highlightedText;
  };

  const handleOpenModal = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <h2>SKILLS</h2>
      <Separator expanded={isExpanded} />

      {skillsData.map((skills, index) => (
        <React.Fragment key={index}>
          <div
            className={`rounded pt-2 ps-2 pe-2 ${styles.skillsDiv} ${hoveredSkill === skills.skill ? styles.hovered : ''}`}
            onMouseEnter={() => setHoveredSkill(skills.skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6>{skills.skill}</h6>
              <a
                href="#projects"
                className={`text-black ${styles.projectsLink}`}
                onClick={() => handleOpenModal(skills)}
              >
                Projects
              </a>
            </div>
            <p
              className='mt-2'
              dangerouslySetInnerHTML={{
                __html: hoveredSkill === skills.skill
                  ? highlightWords(skills.description, skills.highlight)
                  : skills.description
              }}
            />
          </div>
          {index !== skillsData.length - 1 && <hr className="skills-divider" />}
        </React.Fragment>
      ))}

      {/* Render the ProjectModal when a skill is selected */}
      {selectedSkill && (
        <ProjectModal project={selectedSkill} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Skills;
