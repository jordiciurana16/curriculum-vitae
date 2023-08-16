import React from 'react';
import styles from './Separator.module.css';

const Separator = ({ expanded }) => {
  return (
    <div className={`mb-3 ${styles.ThinLine}`}>
      <div className={`bg-dark ${styles.ThickLine} ${expanded ? styles.ThickLineAnimation : ''}`}></div>
    </div>
  );
};

export default Separator;
