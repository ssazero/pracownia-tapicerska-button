import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  return (
    <footer className='footer' ref={props.footerRef}>
      <div className='footer__top'>
        <div className='footer__media'>
          <a href='tel:+48503658858'>
            <FontAwesomeIcon icon='mobile-alt' className='footer__fa footer__fa--media' />
            <span className='number'>+48 503 658 858</span>
          </a>
        </div>
        <div className='footer__media'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.google.com/maps/place/Wysoka+33,+34-105+Wysoka/@49.8894656,19.609757,16z/data=!4m13!1m7!3m6!1s0x47166279e9f30371:0x7e279f96d9d218f9!2sWysoka+33,+34-105+Wysoka!3b1!8m2!3d49.8892409!4d19.6096779!3m4!1s0x47166279e9f30371:0x7e279f96d9d218f9!8m2!3d49.8892409!4d19.6096779'
          >
            <FontAwesomeIcon icon='map-marker-alt' className='footer__fa footer__fa--media' />
            <span>
              Wysoka <span className='number'>33</span>
            </span>
            <span>
              <span className='number'>34-105</span> WYSOKA
            </span>
          </a>
        </div>
        <div className='footer__media'>
          <a href='mailto:kontakt@pracownia-button.pl'>
            <FontAwesomeIcon icon='envelope' className='footer__fa footer__fa--media' />
            <span>kontakt@pracownia-button.pl</span>
          </a>
        </div>
      </div>
      <div className='footer__separate'></div>
      <div className='footer__bottom'>
        <div className='footer__copyright'>
          <span className='footer__copyright-top'>Button © {new Date().getFullYear()} </span>
          <span className='footer__copyright-middle'>button meble</span>
          <span className='footer__copyright-bottom'> Grzegorz Smagło </span>
        </div>
        <div className='footer__made-by'>
          Website created by&nbsp;
          <a target='_blank' rel='noopener noreferrer' href='https://front-up.pro' title='Sprawdź!'>
            &ndash;Samuel&nbsp;Kędziora&ndash;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
