import React from 'react';
import styles from './Footer.module.css';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = ({ isA4Format }) => {
  return (
    <footer className={`bg-dark ${isA4Format ? ' py-5 ' : 'mt-5 py-4'} `}>
      <div className='text-white container'>
        <div className={`${styles.socialIcons} d-flex justify-content-end`}>
          {!isA4Format && (
            <>
              <a href='https://www.instagram.com/jordiciurana16/' target='_blank' className='text-white me-4'>
                <BsInstagram size={30} />
              </a>
              <a href='https://www.linkedin.com/in/jordiciurana16/' target='_blank' className='text-white me-4'>
                <BsLinkedin size={30} />
              </a>
              <a href='https://www.github.com/jordiciurana16' target='_blank' className='text-white'>
                <BsGithub size={30} />
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
