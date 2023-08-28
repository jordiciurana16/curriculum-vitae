import React, {useState} from 'react';
import Separator from '../Separator/Separator'
import experienceData from '../../data/experienceData.json'


const Experience = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className='mt-2'
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <h2>EXPERIENCE</h2>
      <Separator expanded={isExpanded} />
      {experienceData.map((experience, index) => (
        <React.Fragment key={index}>
          <h6>{experience.company}</h6>
          <p>{experience.description}</p>
          {index !== experienceData.length - 1 && <hr className="skills-divider" />}
        </React.Fragment>
      ))}
      </div>
  );
};

export default Experience