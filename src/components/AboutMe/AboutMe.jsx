import React, { useState } from "react";
import Separator from "../Separator/Separator";

const AboutMe = ({ isA4Format }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className={isExpanded ? "expanded" : ""}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <h2>ABOUT ME</h2>
      <Separator expanded={isExpanded} isA4Format={isA4Format} />
      <p className={`text justify`}>
        I define myself as a creative, proactive and curious person. I am
        passionate about creating experiences that connect with people, using a
        blend of programming techniques and graphic design. I am eager to work
        and continue learning in areas that motivate and challenge me.
      </p>
    </div>
  );
};

export default AboutMe;
