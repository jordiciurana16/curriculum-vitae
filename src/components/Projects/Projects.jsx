import React, { useState, useEffect } from 'react';
import Separator from '../Separator/Separator';
import ProjectModal from './ProjectModal'; // Importa el modal

const Projects = ({ isA4Format }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estat per controlar el modal
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    setShowOverlay(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
    <div
      className={isExpanded ? 'expanded' : ''}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <h2>PROJECTS</h2>
      <Separator expanded={isExpanded} isA4Format={isA4Format} />
      <p>Check out different projects from the GitHub repository.</p>
      <button className="btn btn-dark" onClick={handleOpenModal}>
        Show All Projects
      </button>

      {showOverlay && <div className="overlay"></div>}
      {showModal && (
        <ProjectModal onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Projects;
