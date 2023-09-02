import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education/Education';
import Languages from './Language/Languages';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';

const Main = ({ isA4Format }) => {
  return (
    <main className={`content-padding mb-4 pb-1 ${isA4Format ? 'mt-4' : 'mt-5'}`}>
      <div className="container">
        <div className="row">
          <div className={`${isA4Format ? 'col-4 pe-3 pt-1' : 'col-5 pe-3'}`}>
            <AboutMe isA4Format={isA4Format} />
            {isA4Format ? (
              <Skills isA4Format={isA4Format} />
            ) : (
              <>
                <Education />
                <Languages isA4Format={isA4Format} />
              </>
            )}
          </div>
          <div className={` ${isA4Format ? 'col-8 ps-4 pt-1' : 'col-7 ps-5'}`}>
            {isA4Format ? (
              <>
                <Education isA4Format={isA4Format} />
                <Experience isA4Format={isA4Format} />
                <Languages isA4Format={isA4Format} />
              </>
            ) : (
              <>
               <Skills isA4Format={isA4Format} />
               <Experience />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
