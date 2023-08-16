import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education/Education';
import Languages from './Language/Languages';
import Skills from './Skills/Skills';
import Experience from './Experience';

const Main = () => {
  return (
    <main className="content-padding mt-5 mb-3 ">
      <div className="container">
        <div className="row">
          <div className="col-4 pe-3">
            <AboutMe />
            <Education />
            <Languages />
          </div>
          <div className="col-8 ps-5">
            <Skills />
            <Experience />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
