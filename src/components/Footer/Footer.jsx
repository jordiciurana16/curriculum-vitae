import React from 'react';
import styles from './Footer.module.css'
import { BsInstagram, BsGithub, BsStrava } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='bg-dark py-4'>
      <div className=' content-padding text-white'>
        <div className={`${styles.socialIcons} d-flex justify-content-end`}>
          <a href='https://www.instagram.com/jordiciurana16/' target='_blank' className='text-white me-4'>
            <BsInstagram size={30} />
          </a>
          <a href='https://www.strava.com/athletes/94208815' target='_blank' className='text-white me-4'>
            <BsStrava size={30} />
          </a>
          <a href='https://www.github.com/jordiciurana16' target='_blank' className='text-white'>
            <BsGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
