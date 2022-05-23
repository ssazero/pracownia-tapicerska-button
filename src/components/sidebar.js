import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = (props) => {
  let sidebarContentClasses = ['sidebar__content'];
  if (props.alteration) {
    sidebarContentClasses.push('sidebar__content--alteration');
  }
  return (
    <div className='sidebar'>
      <div className={sidebarContentClasses.join(' ')} ref={props.contentRef}>
        <Link className='sidebar__logo-link' to='/'>
          <img className='sidebar__logo' src='/logo.png' alt='logo' />
        </Link>
        <div className='sidebar__media'>
          <div className='sidebar__media-item'>
            <a href='mailto:kontakt@pracownia-button.pl'>
              <FontAwesomeIcon
                icon='envelope'
                className='sidebar__fa sidebar__fa--media'
              />
              <span>kontakt@pracownia-button.pl</span>
            </a>
          </div>
          <div className='sidebar__media-item'>
            <a href='tel:+48503658858'>
              <FontAwesomeIcon
                icon='mobile-alt'
                className='sidebar__fa sidebar__fa--media'
              />
              <span className='number'>+48 503 658 858</span>
            </a>
          </div>
          <div className='sidebar__media-item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.google.com/maps/place/Wysoka+33,+34-105+Wysoka/@49.8894656,19.609757,16z/data=!4m13!1m7!3m6!1s0x47166279e9f30371:0x7e279f96d9d218f9!2sWysoka+33,+34-105+Wysoka!3b1!8m2!3d49.8892409!4d19.6096779!3m4!1s0x47166279e9f30371:0x7e279f96d9d218f9!8m2!3d49.8892409!4d19.6096779'
            >
              <FontAwesomeIcon
                icon='map-marker-alt'
                className='sidebar__fa sidebar__fa--media'
              />
              <span>
                Wysoka <span className='number'>33</span>
              </span>
              <span>
                <span className='number'>34-105</span> WYSOKA
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
