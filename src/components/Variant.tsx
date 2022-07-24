import React from 'react';

interface IVariant {
  src: string;
  title: string;
}

const Variant: React.FC<IVariant> = ({ src, title }) => (
  <div className='variant'>
    <div className='variant__background'>
      <img className='variant__image' src={src} />
    </div>
    <div className='variant__title'>{title}</div>
  </div>
);

export default Variant;
