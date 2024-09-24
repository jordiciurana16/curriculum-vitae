import React, { useState } from 'react';
import { BsX } from 'react-icons/bs';
import styles from './ProjectModal.module.css';
import projectsData from './projectsData.json'; // Importa el JSON

const ProjectModal = ({ onClose }) => {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onClose(); // Tanquem el modal si es fa clic a la capa opaca
    }
  };

  const handleProjectClick = (url) => {
    window.open(url, '_blank'); // Obre la URL en una nova pestanya
  };

  const highlightTechnologies = (description, technologies) => {
    let highlightedDescription = description;
    technologies.forEach(tech => {
      const regex = new RegExp(`\\b(${tech})\\b`, 'gi');
      highlightedDescription = highlightedDescription.replace(regex, `<strong>${tech}</strong>`);
    });
    return highlightedDescription;
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`card ${styles.projectsModal}`}>
        <div className='card-header d-flex justify-content-between align-items-center'>
          <h3 className={`mb-0 ${styles.projectTitle}`}>All Projects</h3>
          <div
            className={`${styles.closeModal} fs-1 d-flex align-items-center`}
            onClick={onClose} // Crida a la funció de tancament
          >
            <BsX />
          </div>
        </div>
        <div className={`card-body ${styles.projectList}`}>
          <ul className='list-unstyled'>
            {projectsData.map((project, index) => (
              <li
                key={index}
                className="d-flex align-items-center mb-3"
                onClick={() => handleProjectClick(project.url)} // Redirigeix a la URL del projecte
                onMouseEnter={() => setHoveredProjectIndex(index)} // Estableix el projecte en hover
                onMouseLeave={() => setHoveredProjectIndex(null)} // Restableix el hover
                style={{ cursor: 'pointer' }} // Canvia el cursor per indicar que és clicable
              >
                <img src={project.image} alt={project.title} className="me-3" />
                <div>
                  <h5>{project.title}</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        hoveredProjectIndex === index
                          ? highlightTechnologies(project.description, project.technologies)
                          : project.description,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
