import React from 'react';
import styles from './Separator.module.css';

const Separator = ({ expanded, isA4Format }) => {
  return (
    <div className={`mb-3 ${styles.ThinLine}`}>
      <div className={`bg-dark ${expanded ? styles.ThickLineAnimation : ''} ${isA4Format ? styles.A4ThickLine : styles.ThickLine}`}></div>
    </div>
  );
};

export default Separator;
