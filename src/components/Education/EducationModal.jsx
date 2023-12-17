import React from 'react';
import { BsX } from 'react-icons/bs';
import styles from './EducationModal.module.css';

const EducationModal = ({ education, onClose }) => {
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

  const highlightAchievements = (achievements, highlightedWords) => {
    const highlightedAchievements = achievements.map(achievement =>
      highlightWords(achievement, highlightedWords)
    );
    return highlightedAchievements;
  };

  const pdfUrl = `https://jordiciurana16.github.io/curriculum-vitae/titles/education/${education.degree}.pdf`;

  return (
    <div className={`${styles.languageModal} card`}>
      <div className='card-header d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <span className='fs-3'>{education.degree}</span>
        </div>
        <div className='fs-1 d-flex align-items-center' onClick={handleCloseModal}>
          <BsX className={styles.closeModal} />
        </div>
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        {/* Highlight the education description */}
        <p dangerouslySetInnerHTML={{ __html: highlightWords(education.description, education.highlight) }} />
        {/* Grid Layout */}
        <div className='row'>
          <div className='col'>
            <p>Areas of knowledge:</p>
            <ul>
              {education.knowledge.map((knowledge, index) => (
                <li className='mb-2' key={index}>{knowledge}</li>
              ))}
            </ul>
          </div>
          <div className='col d-flex align-items-center justify-content-center '>
            {/* Anchor Image to education.link */}
            <a href={education.link} target='_blank' rel='noopener noreferrer'>
              <img className='img-fluid' src={education.image} alt={education.degree} />
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='mb-3'>Significant accomplishments:</p>
            <ul>
              {/* Highlight the achievements */}
              {highlightAchievements(education.achievements, education.highlight).map((achievement, index) => (
                <li className='mb-2' key={index}>
                  {/* Render the HTML as React components */}
                  <span dangerouslySetInnerHTML={{ __html: achievement }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='card-footer d-flex justify-content-end'>
        <p className={`mb-0 ${styles.certificateLink}`}>
          {/* Anchor the image to education.link */}
          <a className='text-black text-decoration-none' href={pdfUrl} target='_blank' rel='noopener noreferrer'>
            Certificate
          </a>
        </p>
      </div>
    </div>
  );
};

export default EducationModal;
