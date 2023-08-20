import React, {useState} from 'react';
import Separator from './Separator/Separator';


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
      <h1>text</h1>
    </div>
  );
};

export default Experience