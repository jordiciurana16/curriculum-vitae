import React, { useState } from 'react';
import Separator from './Separator/Separator';

const AboutMe = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <h2>ABOUT ME</h2>
      <Separator expanded={isExpanded} />
      <p className='text-justify'>I define myself as a creative, versatile, proactive and curious person. I am multifaceted with passion for sport, music and art. I like to work in a team, I am highly adaptable to changing environments and I am an easy-going person, eager to learn and work on what I am passionate about.</p>
    </div>
  );
};

export default AboutMe;
