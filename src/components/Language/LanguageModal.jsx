import React from 'react';
import { BsX } from 'react-icons/bs';
import styles from './LanguageModal.module.css'

// Close modal
const LanguageModal = ({ language, onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  const highlightWords = (description, highlightedWords) => {
    let highlightedDescription = description;
    highlightedWords.forEach(word => {
      const pattern = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedDescription = highlightedDescription.replace(pattern, `<strong>${word}</strong>`);
    });
    return highlightedDescription;
  };

  const showDegreeLine = language.degree !== 'none';   // Determine whether to show the degree line or not

  const pdfUrl = `/curriculum-vitae/public/titles/language/${language.language}${language.degree}.pdf`;

  return (
    <div className={`${styles.languageModal} card`}>
      <div className='card-header d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <span className={`fi fi-${language.flag} me-3 fs-3`}></span>
          <span className="fs-3">{language.language}</span>
        </div>
        <div
          className='fs-1 d-flex align-items-center'
          onClick={handleCloseModal}
        >
          <BsX className={styles.closeModal}/>
        </div>
      </div>
      <div className='card-body'>
        <p dangerouslySetInnerHTML={{ __html: highlightWords(language.description, language.highlight) }} />
      </div>
      <div className='card-footer d-flex justify-content-between'>
        <p className='mb-0'>{language.level} level</p>
        {showDegreeLine && (
          <p className={`${styles.degreeLink} mb-0`}>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-black text-decoration-none">Degree: {language.degree}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default LanguageModal;
