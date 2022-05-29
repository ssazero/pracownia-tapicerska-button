import PropTypes from 'prop-types';
import React from 'react';

import Navigation from './Navigation';
import DrawerToggler from './DrawerToggler';

const Toolbar = (props) => {
  const toolbarClasses = ['toolbar'];
  if (props.alteration) {
    toolbarClasses.push('toolbar--alteration');
  }
  if (props.sideDrawerIsVisible) {
    toolbarClasses.push('toolbar--transparent');
  }
  return (
    <header className={toolbarClasses.join(' ')} ref={props.toolbarRef}>
      <div className='toolbar__content'>
        <div></div>
        <DrawerToggler
          clicked={props.sideDrawerToggle}
          sideDrawerOpened={props.sideDrawerIsVisible}
        />
        <nav className='toolbar__nav'>
          <Navigation />
        </nav>
      </div>
    </header>
  );
};

Toolbar.propTypes = {
  siteTitle: PropTypes.string,
};

Toolbar.defaultProps = {
  siteTitle: ``,
};

export default Toolbar;
