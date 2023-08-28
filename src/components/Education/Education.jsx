import React, { useState, useEffect } from 'react';
import styles from './Education.module.css';
import Separator from '../Separator/Separator';
import educationData from '../../data/educationData.json';
import EducationModal from './EducationModal';


const Education = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleEducationClick = (education) => {
    setSelectedEducation(education);
    setShowOverlay(true);
  };

  const handleCloseModal = () => {
    setSelectedEducation(null);
    setShowOverlay(false);
  };

  // Add event listener to close the modal when clicked outside
  useEffect(() => {
    const handleOverlayClick = (event) => {
      if (event.target.classList.contains('overlay')) {
        handleCloseModal();
      }
    };

    if (showOverlay) {
      document.addEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [showOverlay]);

  return (
    <>
      {/* Overlay */}
      {showOverlay && <div className='overlay'></div>}

      <div className='pb-2' onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
        <h2>EDUCATION</h2>
        <Separator expanded={isExpanded} />

        {educationData.map((education, index) => (
          <React.Fragment key={index}>
            {/* Use handleEducationClick function */}
            <div className={`ps-2 pt-1 ${styles.educationDiv} rounded`}
              onClick={() => handleEducationClick(education)}
            >
              <p className='bold'>{education.degree}</p>
              <p>{education.institution}</p>
              <p>{education.year}</p>
            </div>
            {index !== educationData.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>

      {/* Display the EducationModal when a degree is clicked */}
      {selectedEducation && (
        <div className='overlay'>
          <EducationModal education={selectedEducation} onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default Education;
