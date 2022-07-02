import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { SRLWrapper } from 'simple-react-lightbox';

import { options } from '../utils/simpleReactLightbox';

const ImageChooser: React.FC<{
  alt: string;
  srcs: (FluidObject | FluidObject[])[];
}> = ({ alt, srcs }) => {
  const [thumbnails, setThumbnails] = React.useState<(FluidObject | FluidObject[])[]>(srcs);

  const changeImage = (index: number) => {
    console.log(index);
    const newThumnbailsOrder = [...thumbnails];
    const mainImage = newThumnbailsOrder[0];
    newThumnbailsOrder[0] = newThumnbailsOrder[index];
    newThumnbailsOrder[index] = mainImage;

    setThumbnails(newThumnbailsOrder);
  };

  return (
    <div className='image-chooser'>
      <SRLWrapper options={{ ...options, thumbnails: { showThumbnails: false } }}>
        <Img className='image-chooser__image' imgStyle={{ objectFit: 'contain' }} fluid={thumbnails[0]} alt={alt} />
      </SRLWrapper>
      <div className='image-chooser__thumbnails'>
        {thumbnails.map(
          (imgSrc, index) =>
            index !== 0 && (
              <button className='image-chooser__thumbnail' onClick={() => changeImage(index)}>
                <Img
                  className='image-chooser__thumbnail-image'
                  imgStyle={{ objectFit: 'contain' }}
                  fluid={imgSrc}
                  alt={`${index}-zdjęcie`}
                />
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default ImageChooser;
