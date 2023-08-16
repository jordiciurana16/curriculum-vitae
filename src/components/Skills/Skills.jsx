import React, {useState} from 'react';
import SkillsComponent from './SkillsComponent';
import skillsData from '../../data/skillsData.json';
import Separator from '../Separator/Separator';

const Skills = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <h2>SKILLS</h2>
      <Separator expanded={isExpanded} />

      {skillsData.map((skills, index) => (
        <React.Fragment key={index}>
          <SkillsComponent
            skill={skills.skill}
            description={skills.description}
            highlight={skills.highlight}
            hovered={hoveredSkill === skills.skill}
            onHover={() => setHoveredSkill(skills.skill)}
            onHoverEnd={() => setHoveredSkill(null)}
          />
          {index !== skillsData.length - 1 && <hr className="skills-divider" />} {/* Add HR */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Skills;