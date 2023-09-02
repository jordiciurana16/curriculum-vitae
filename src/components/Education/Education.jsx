import React, { useState, useEffect } from 'react';
import styles from './Education.module.css';
import Separator from '../Separator/Separator';
import educationData from '../../data/educationData.json';
import EducationModal from './EducationModal';

const Education = ({ isA4Format }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [hoveredObject, setHoveredObject] = useState(null);


  const handleEducationClick = (education) => {
    setSelectedEducation(education);
    setShowOverlay(true);
  };

  const handleCloseModal = () => {
    setSelectedEducation(null);
    setShowOverlay(false);
  };

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
      {showOverlay && <div className='overlay'></div>}

      <div className='pb-2' onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
        <h2>EDUCATION</h2>
        <Separator expanded={isExpanded} isA4Format={isA4Format} />
        <div className='row'>
        <div className={`col-1`}>
  <div className={`bg-primary row ${styles.timeLine}`}></div>
  <div className={`${styles.verticalLine} ps-2`}>
    {/* Add the black points */}
    <div className={`${styles.point} ${styles.start} ${hoveredObject === educationData[0] ? styles.active : ''}`}></div>
    <div className={`${styles.point} ${styles.middle} ${hoveredObject === educationData[1] ? styles.active : ''}`}></div>
    <div className={`${styles.point} ${styles.end} ${hoveredObject === educationData[2] ? styles.active : ''}`}></div>
  </div>
</div>
<div className="col-11">
  {educationData.map((education, index) => (
    <React.Fragment key={index}>
      <div
        className={`ps-2 pt-1 ${styles.educationDiv} ${isA4Format ? ' d-flex justify-content-between align-items-center' : ''} rounded`}
        onClick={() => handleEducationClick(education)}
        onMouseEnter={() => setHoveredObject(education)}
        onMouseLeave={() => setHoveredObject(null)}
      >
              <div>

                <h6 className={`bolder ${isA4Format ? '':'mb-3'}`}>{education.degree}</h6>
                <h5 className={` ${isA4Format ? 'a4h5':''}`}> {isA4Format ? `${education.institution} (${education.year})` : ''} </h5>

                {isA4Format && <p>{education.introduction}</p>}
              </div>
              {!isA4Format && (
                <React.Fragment>
                  <p>{education.institution}</p>
                  <p>{education.year}</p>
                </React.Fragment>
              )}
            </div>
            {index !== educationData.length - 1 && <hr className={`${isA4Format ? 'a4FormatEducation': ''} `}/>}
    </React.Fragment>
  ))}
</div>


        </div>
      </div>

      {selectedEducation && (
        <div className='overlay'>
          <EducationModal education={selectedEducation} onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default Education;
