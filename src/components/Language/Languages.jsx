import React, { useState, useEffect } from 'react';
import styles from './Languages.module.css';
import Separator from '../Separator/Separator';
import LanguageModal from './LanguageModal';
import languageData from '../../data/languageData.json';

const Languages = ({ isA4Format }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setShowOverlay(true);
  };

  const handleCloseModal = () => {
    setSelectedLanguage(null);
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

      <div onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
        <h2>LANGUAGES</h2>
        <Separator expanded={isExpanded} isA4Format={isA4Format}/>

        {/* Bootstrap grid row */}
        <div className="row">
          {languageData.map((language, index) => (
            // Bootstrap grid columns based on isA4Format
            <div
              className={`${
                isA4Format ? 'col-6 mb-2' : 'col-12 mb-3'
              }  ${styles.languagesList}`}
              key={index}
              onClick={() => handleLanguageClick(language)}
            >
              <div>
                <span
                  className={`${isA4Format ? 'me-2' : 'me-2'} ${styles.flagIcons} fi fi-${language.flag} `}
                ></span>
              </div>
              <span className={` ${isA4Format ? styles.a4LanguageText : styles.languageText}`}>
                {language.language} ({language.level})
              </span>
            </div>
          ))}
        </div>
        {selectedLanguage && <LanguageModal language={selectedLanguage} onClose={handleCloseModal} />}
      </div>
    </>
  );
};

export default Languages;
