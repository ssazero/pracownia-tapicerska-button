import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faAddressCard,
  faSearch,
  faLink,
  faCog,
  faCogs,
  faPhoneAlt,
  faMobileAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import SimpleReactLightbox from 'simple-react-lightbox';

import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';
import SideDrawer from '../components/SideDrawer';
import Sidebar from '../components/Sidebar';
import '../sass/main.scss';

library.add(faEnvelope, faAddressCard, faSearch, faLink, faCog, faCogs, faPhoneAlt, faMobileAlt, faMapMarkerAlt);

console.log('Thanks for lightbox to: https://www.npmjs.com/package/simple-react-lightbox');

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [toolbarAlteration, setToolbarAlteration] = useState(false);
  const [sidebarAlteration, setSidebarAlteration] = useState(false);
  const toolbarRef = useRef(null);
  const layoutRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const footerRef = useRef(null);

  const yOffset = () => {
    if (window) {
      setScrollY(window.pageYOffset);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', yOffset);

      return () => {
        window.removeEventListener('scroll', yOffset);
      };
    }
  });

  useEffect(() => {
    if (scrollY > 70) {
      setToolbarAlteration(true);
    } else {
      setToolbarAlteration(false);
    }
  }, [setToolbarAlteration, scrollY]);

  useEffect(() => {
    if (
      scrollY + sidebarContentRef.current.clientHeight >
      layoutRef.current.clientHeight - footerRef.current.clientHeight
    ) {
      setSidebarAlteration(true);
    } else {
      setSidebarAlteration(false);
    }
  }, [setSidebarAlteration, scrollY, sidebarContentRef, footerRef]);

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  return (
    <SimpleReactLightbox>
      <div className='layout' ref={layoutRef}>
        <div className='layout__start'>
          <Sidebar contentRef={sidebarContentRef} alteration={sidebarAlteration} compress={props.compress} />
          <div className='main'>
            <div className='layout__toolbar'>
              <Toolbar
                sideDrawerToggle={sideDrawerToggleHandler}
                sideDrawerIsVisible={sideDrawerIsVisible}
                alteration={toolbarAlteration}
                toolbarRef={toolbarRef}
              />
            </div>
            <main className='content'>{props.children}</main>
          </div>
        </div>
        <Footer footerRef={footerRef} />
        <SideDrawer opened={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />
      </div>
    </SimpleReactLightbox>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
