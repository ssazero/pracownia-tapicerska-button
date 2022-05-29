import React from 'react';
import Img from 'gatsby-image';

const Partner = (props) => {
  const styles = {
    ...props.style,
    width: `calc(11rem * ${props.src.aspectRatio})`,
  };
  return (
    <div className='partners__item' style={styles}>
      {console.log(props)}
      <a
        className='partners__item-link'
        href={props.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Img
          style={{ height: '100%', width: '100%' }}
          imgStyle={{ objectFit: 'contain' }}
          className='partners__item-image'
          fluid={props.src}
          alt={props.alt}
        />
      </a>
    </div>
  );
};

export default Partner;
