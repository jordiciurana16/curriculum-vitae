import React, { useState, useEffect } from 'react';
import styles from './Languages.module.css';
import Separator from '../Separator/Separator';
import LanguageModal from './LanguageModal';
import languageData from '../../data/languageData.json';

const Languages = () => {
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
        <Separator expanded={isExpanded} />

        <ul className='list-unstyled pt-1'>
          {languageData.map((language, index) => (
            <li className={`mb-3 ${styles.languagesList}`} key={index} onClick={() => handleLanguageClick(language)}>
              <div>
                <span className={`${styles.flagIcons} fi fi-${language.flag} me-2`}></span>
              </div>
              <span className={styles.languageText}>{language.language} ({language.level})</span>
            </li>
          ))}
        </ul>
        {selectedLanguage && (
          <LanguageModal language={selectedLanguage} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default Languages;
