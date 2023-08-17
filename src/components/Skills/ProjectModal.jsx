import React from 'react';
import { BsX } from 'react-icons/bs';
import styles from './ProjectModal.module.css'

const ProjectModal = ({ project, onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className={`card ${styles.projectsModal}`}>
      <div className={`card-header d-flex justify-content-between align-items-center`}>
        <div className='d-flex align-items-center'>
          <h3 className={`mb-0 ${styles.projectTitle}`}>{project.skill} Projects</h3>
        </div>
        <div
          className={`${styles.closeModal} fs-1 d-flex align-items-center`}
          onClick={handleCloseModal}
        >
          <BsX />
        </div>
      </div>
      <div className={`card-body ${styles.projectList}`}>
  <ul className='list-unstyled'>
    {project.projects.map((project, index) => (
      <li key={index}>
        {/* Render the title as a link */}
        <h5>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            {project.title}
          </a>
        </h5>
        <p>{project.description}</p>
      </li>
    ))}
  </ul>
</div>






    </div>
  );
};

export default ProjectModal;
