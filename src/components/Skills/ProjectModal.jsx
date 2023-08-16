import React from 'react';
import { BsX } from 'react-icons/bs';

const ProjectModal = ({ project, onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className={`card`}>
      <div className='card-header d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <h3 className='mb-0'>{project.skill}</h3>
        </div>
        <div
          className='fs-1 d-flex align-items-center'
          onClick={handleCloseModal}
        >
          <BsX />
        </div>
      </div>
      <div className='card-body'>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
    </div>
  );
};

export default ProjectModal;
