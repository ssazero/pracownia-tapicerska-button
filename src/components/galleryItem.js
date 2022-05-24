import React from 'react';
import Img from 'gatsby-image';

const GalleryItem = (props) => (
  <div className='gallery__item'>
    <a href={props.src} data-attribute='SRL'>
      <Img
        className='gallery__item-image'
        fluid={props.thumbnail}
        alt={props.caption}
      />
    </a>
  </div>
);

export default GalleryItem;
