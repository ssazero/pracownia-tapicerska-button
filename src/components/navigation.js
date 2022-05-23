import React from 'react';

import NavigationItem from './navigationItem';

const Navigation = (props) => {
  return (
    <ul className='navigation-list'>
      <NavigationItem to='/'>Home</NavigationItem>
      <NavigationItem to='/oferta'>Oferta</NavigationItem>
      <NavigationItem to='/partnerzy'>Partnerzy</NavigationItem>
      <NavigationItem to='/realizacje'>Realizacje</NavigationItem>
    </ul>
  );
};

export default Navigation;
